# Workflow Template

A workflow template contains the following sections.

#### Common Name and Type

*   `type`: workflow
*   `version`: the version of the Argo YAML DSL used in this template
*   `name`: the unique name of the object

*   `description`: (Optional), an informative description of the object.

#### inputs

This section describes the two categories of inputs: parameters and artifacts.

*   `parameters` - maps the parameter name to parameter object. Each parameter can be used in the body of the YAML template in the form of `%%_parameter name_%%` to be replaced with the parameter value at run time.

*   Parameter object has the following fields.

*   `default` - the default value of the parameter.(Optional). If a default value is specified and the user didn't provide a value when launching a deployment instance, the default value will be used.

*   `description` - (Optional) a description of the object.

*   `artifacts` - an array of artifact objects. Each input artifact is placed at a specified path.

*   Artifact object has the following fields.

*   `path` - the absolute path inside the container where this artifact will be placed.

*   `from` - where the artifact comes from. The common pattern is in the form of `%%xxx_artifact%%`, where `%%xxx_artifact%%` is passed in as a parameter from the parent workflow.

#### outputs

*   Argo currently supports only artifact outputs.
*   `artifacts`: a map of a unique output artifact name to an artifact object mapping.
*   Artifact objects has the following fields.
    *   `from` - specifies the "fully qualified" path where the output comes from.
    *   `path` - the absolute inside a container that you will export as artifact.
    *   `excludes` - an array of file name patterns that you will exclude from the artifact collection. The pattern is in the form of a tar pattern.

#### steps

This section describes the steps in a workflow. The steps section is mutually exclusive to the container section. A workflow only uses other containers and workflows, and never defines a container itself.

A workflow can contain any number of steps in an array. The steps are executed in sequence, and if one step fails, the workflow fails and aborts the steps that follow.

NOTE: Each step can also contain multiple tasks, which can be run in parallel. Multiple tasks within a step are indicated by a step name that is NOT preceded by a hyphen ("-"). If any of the tasks in a step fails, the remaining tasks in the same step still execute to completion, but the overall step fails.

The steps section contains:

*   An array of step objects. Each step object contains

*   A map of task name to task object mapping. The task name must be unique within the whole workflow, not just within the step.

*   The task object contains the following fields.

*   `template`: the name of the YAML template that this step runs.
*   `arguments` - a map of the parameter name to its value mapping. Both the parameter name and its value have a "fully qualified" reference.
*   Fields that describe a Docker container:

    *   `image` - the docker container image. Same as what you would provide to docker pull.
    *   `command`: a string that specifies the command to run in the container.
    *   `args` is an array of arguments for the command.
    *   `resources`: the system resource that the container can use.
    *   `mem_mib` - amount of memory in MiB the service is expected to use. Argo only runs this container on a host with the specified amount of free memory. Argo allows the service's memory to grow to 1.5 times of specified amount, before it is killed.
    *   `cpu_cores` - the percentage of a CPU core that Argo allows the container to use. 0.1 means 10% of a single core. Argo allows the container to use a maximum of 4 times of the specified amount. Argo does not kill the container for exceeding the CPU limit.
    *   `env` - specifies the environment options for a Docker container. . Argo only supports the "-e", "-p" options, although the use of "-p" option is strongly discouraged, because it limits the ability to migrate the Docker container.

#### Flags for exception handling

In many cases, you will want to specially handle errors and exceptions that occur during workflows. Two special flags are provided for this purpose:

*   `ignore_error` - Ignore any errors/failures for the specified step. The step always succeeds.

*   `always_run` - Always run this step before exiting the current sequence of steps.

In the following code snippet, the cleanup step is always run even if the job fails or is canceled during the setup or test phase. Furthermore, any errors during the cleanup step will be ignored and cannot fail the workflow.



---

steps:

- setup:

    template: mysetup

- test:

    template: mytest

- cleanup:

    template: mycleanup

    flags:

        always_run: true

        ignore_error: true



#### Steps executed sequentially

```
---
type: workflow
version: 1
name: basic-workflow-inline
description: Basic workflow steps using containers
inputs:
  parameters:
    COMMIT:
      default: "%%session.commit%%"
    REPO:
      default: "%%session.repo%%"
steps:
- STEP1:
    image: alpine:latest
    command: ["sh", "-c"]
    args: ["echo 'sleeping for 2 minutes' ; sleep 120; echo 'done'"]
- STEP2:
    image: alpine:latest
    command: ["sh", "-c"]
    args: ["echo 'sleeping for 2 minutes' ; sleep 120; echo 'done'"]

```

where:

`- STEP1` is the name of the first step. The leading hyphen and space indicates this is part of a list.

`alpine:latest` is the name of the container image that is run in this step.

`["sh", "-c"]` are the commands that Argo runs on this container.

`["echo 'sleeping for 2 minutes' ; sleep 120; echo 'done'"]` are the arguments for the command to be executed.

#### Steps executed in parallel

If you want steps to execute in parallel (instead of sequentially), just omit the leading hyphen and space ("- ") that precedes the subsequent step:

```
steps:
- STEP1:
    image: alpine:latest
    command: ["sh", "-c"]
    args: ["echo 'sleeping for 2 minutes' ; sleep 120; echo 'done
```

```
  STEP2:
    image: alpine:latest
    command: ["sh", "-c"]
    args: ["echo 'sleeping for 2 minutes' ; sleep 120; echo 'done'"]
```

#### Passing Output from one workflow as input to another workflow

In this example, Step 1 of the parent workflow called `test-workflow-nested-artifacts` creates an output artifact from the nested workflow called `test-workflow-with-output-artifact`. Step 2 of the parent workflow takes the output from Step 1 and uses it as input for the `test-workflow-with-input-artifact` workflow.

```
---
type: workflow
version: 1
name: test-workflow-with-output-artifact
description: Workflow with an output artifact
steps:
- STEP1:
    template: test-container-with-output-artifact
outputs:
  artifacts:
    BIN-OUTPUT:
      from: "%%steps.STEP1.outputs.artifacts.BIN-OUTPUT%%"

---
type: workflow
version: 1
name: test-workflow-with-input-artifact
description: Container which accepts an input artifact
steps:
- STEP1:
    template: test-container-with-input-artifact
inputs:
  artifacts:
    BIN-INPUT:

---
type: workflow
version: 1
name: test-workflow-nested-artifacts
description: Workflow which passes output from a workflow as an input to another workflow
inputs:
  parameters:
    COMMIT:
      default: "%%session.commit%%"
    REPO:
      default: "%%session.repo%%"
steps:
- STEP1:
    template: test-workflow-with-output-artifact
- STEP2:
    template: test-workflow-with-input-artifact
    arguments:
      artifacts.BIN-INPUT: "%%steps.STEP1.outputs.artifacts.BIN-OUTPUT%%"

```
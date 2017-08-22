# Container and Workflow Templates

The container and workflow templates contain the following sections.

#### Common Name and Type

*   name: the unique name of the object.

*   type: container, workflow

*   description: optional, describes the object for the benefit of the users.

#### inputs

This section describes the two categories of inputs: parameters and artifacts.

*   parameters: it maps the parameter name to parameter object. Each parameter can be used in the YAML body in the form of %%parameter name%% to be replaced with the parameter value at run time.

*   Parameter object has the following fields.

*   default: the default value of the parameter. Optional. If a default value is specified and the user didn't provide a value when launching a service instance, the default value will be used.

*   description: optional, a description for the benefit of the users of the service.

*   artifacts: it is an array of artifact objects. Each input artifact is placed at a specified path.

*   Artifact object has the following fields.

*   path: the absolute path inside the container where this artifact will be placed.

*   from: where the artifact comes from. The common pattern is in the form of %%xxx_artifact%% where %%xxx_artifact%% is passed in as a parameter from the parent workflow.

#### outputs

*   Applatix currently supports only artifact outputs.

*   artifacts: it's a map of unique output artifact name to artifact object mapping.

*   Artifact objects has the following fields.

*   path: the absolute inside a container that you will export as artifact.

*   excludes: an array of file name patterns that you will exclude from the artifact collection. The pattern is in the form of a tar pattern.

#### container

This section describes a Docker container.

*   image: the docker container image. Same as what you would provide to docker pull.

*   command: a string that specifies the command to run in the container.

*   docker_options: the docker options. Applatix only supports the "-e", "-p" options, though the use of "-p" is strongly discouraged, because it limits the ability to migrate the docker container.

*   resources: the system resource the container can use.

*   mem_mib: amount of memory in MiB the service is expected to use. Applatix only runs this container on a host with the specified amount of free memory. Applatix allows the service's memory to grow to 1.5 times of specified amount, before it is killed.

*   cpu_cores: the percentage of a CPU core that Applatix allows the container to use. 0.1 means 10% of a single core. Applatix allows the container to use a maximum of 4 times of the specified amount. Applatix does not kill the container for exceeding the CPU limit.

#### steps

This section describes the steps in a workflow. The steps section is mutually exclusive to the container section. A workflow only uses other containers and workflows, and never defines a container itself.

A workflow can contain any number of steps in an array. The steps are executed in sequence, and if one step fails, the workflow fails and aborts the steps that follow.

Each step can also contain multiple tasks, which will be run in parallel. If any one of them fails, the others in the same step will still execute to completion, but the overall step will fail.

The steps section contains:

*   An array of step objects. Each step object contains

*   A map of task name to task object mapping. The task name must be unique within the whole workflow, not just within the step.

*   The task object contains the following fields.

*   template: the name of the YAML template this task runs.

*   parameters: it's a map of parameter name to value mapping. The parameter names are as defined in the YAML template.

#### exception handling

In many cases, you will want to specially handle errors and exceptions that occur during workflows. Two special flags are provided for this purpose:

*   ignore_error: Ignore any errors/failures for the specified step. The step always succeeds.

*   always_run: Always run this step before exiting the current sequence of steps.

Below, the cleanup step is always run even if the job fails or is canceled during the setup or test phase. Furthermore, any errors during the cleanup step will be ignored and cannot fail the workflow.

<div xmlns="">

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

</div>
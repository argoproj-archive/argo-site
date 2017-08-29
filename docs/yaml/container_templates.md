# Container Template

A container template contains the following sections.

#### Common Name and Type

*   `type`: container
*   `version`: the the Argo DSL version of the YAML template
*   `name`: the unique name of the object
*   `description`: (Optional), describes the object for the benefit of the users.

*   `image` - the docker container image. Same as what you would provide to docker pull.

*   `command`: a string that specifies the command to run in the container.
*   `args` is an array of arguments for the command.

*   `resources`: the system resource that the container can use.

*   `mem_mib` - amount of memory in MiB the service is expected to use. Argo only runs this container on a host with the specified amount of free memory. Argo allows the service's memory to grow to 1.5 times of specified amount, before it is killed.

*   `cpu_cores` - the percentage of a CPU core that Argo allows the container to use. 0.1 means 10% of a single core. Argo allows the container to use a maximum of 4 times of the specified amount. Argo does not kill the container for exceeding the CPU limit.

*   `env` - specifies the environment options for a Docker container. . Argo only supports the "-e", "-p" options, although the use of "-p" option is strongly discouraged, because it limits the ability to migrate the Docker container.

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
    *   `path` - the absolute inside a container that you will export as artifact.
    *   `excludes` -(Optional) an array of file name patterns that you will exclude from the artifact collection. The pattern is in the form of a tar pattern.

## Examples

<!--#### Container with Input Parameter

```
---
type: container
version: 1
name: noop-container-with-input-parameter
description: Container that has a required input parameter
image: alpine:latest
command: ["sh", "-c"]
args: ["echo 'sleeping for %%inputs.parameters.SLEEP%% seconds' ; sleep %%inputs.parameters.SLEEP%%; echo 'done'"]
inputs:
  parameters:
    SLEEP:
```

where:

*   `1` represents the version of the Argo YAML DSL that the template is using (the value is a string type).
*   `alpine:latest` refers to the registry that the latest Docker image is pulled from; this image is used for running the container.
*   `["sh", "-c"]` are the commands to execute on the container.
*   `%%inputs.parameters.SLEEP%%` is the fully qualified path to value of the input parameter `SLEEP`

#### Container Outputs an Artifact

```
---
type: container
version: 1
name: test-container-with-output-artifact
description: Container which produces an output artifact
image: alpine:latest
command: ["sh", "-c"]
args: ["echo 'sleeping for 20 seconds' && sleep 20 && echo 'done'"]
outputs:
  artifacts:
    BIN-OUTPUT:
      path: /bin
```

where:

*   `BIN-INPUT` is the artifact that the container outputs.
*   `/bin` is the path to store the output artifact.

#### Container Takes an Input Artifact

```
---
type: container
version: 1
name: test-container-with-input-artifact
description: Container which accepts an input artifact
image: alpine:latest
command: ["sh", "-c"]
args: ["find /root/bin && echo 'sleeping for 20 seconds' && sleep 20 && echo 'done'"]
inputs:
  artifacts:
    BIN-INPUT:
      path: /root/bin
```

where:

*   `BIN-INPUT` is the artifact that the container takes as input.
*   `/root/bin` is the path to store the input artifact.-->

#### Container Taking Input Artifact and Outputs an Artifact

Note: This container template is one of the core YAML DSL templates that Argo provides for checking out source code from a repository and storing it in a directory. This template is agnostic to the repository you are using; in other words, you can run it against any repo.

```
---
type: container
version: 1
name: test-policy-checkout
description: Checks out a source repository to /src
resources:
  mem_mib: 500
  cpu_cores: 0.1
image: argoproj/argoscm:v2.0
command: ["axscm"]
args: ["clone", "%%inputs.parameters.REPO%%", "/src", "--commit", "%%inputs.parameters.COMMIT%%"]
inputs:
  parameters:
    COMMIT:
      default: "%%session.commit%%"
    REPO:
      default: "%%session.repo%%"
outputs:
  artifacts:
    CODE:
      path: /src
```

where:

*   `axscm` is the Argo command for checking out the source code from a repository you specify.
*   `clone` is the argument that tells Argo to make a copy of the source code
*   `%%inputs.parameters.REPO%%` is the argument that represents the fully qualified path to the value of the parameter.
*   `/src` is the directory location where the copy of the source code is placed.
*   `--commit` is the argument that tells Argo to clone the source code that belongs to a specific commit.
*   `%%inputs.parameters.COMMIT%%` is the argument that represents the fully qualified path to the value of the parameter.

#### Container with Volume attached

```
---
type: container
version: 2
name: container-with-input-volume
description: Container that accepts an input volume
image: httpd:latest
inputs:
  volumes:
    DATA:
      mount_path: /data
```

where:

*   `volumes` is the key that indicates a volume to be attached to the container as an input.
*   `DATA` is the name of volume.
*   `mount_path: /data` indicates the path "/data" to where the volume is mounted from.

#### Container with environmental variable to be set

```
---
type: container
version: 2
name: test-container-with-env-var
description: Container expects an environment variable to be set
image: alpine:latest
command: ["sh", "-c"]
args: ['echo 'hello world' && [ "$FOO" == "bar" ]']
env:
- name: FOO
  value: "%%inputs.parameters.FOO_VAL%%"
inputs:
  parameters:
    COMMIT:
      default: "%%session.commit%%"
    REPO:
      default: "%%session.repo%%"
    FOO_VAL:
      default: bar

```

where:

*   `FOO` is the name of the environmental variable to be set.
*   `%%inputs.parameters.FOO_VAL%%` is the fully qualified path to the value that the environmental variable is set to

#### <a name="ContainerDinDWorkflow"></a>Container calling Docker Commands "Docker-in-Docker"

If you are running a Docker-in-Docker (DinD), you must add two lines to your container template (as shown in bold below):

```
---
type: container
version: 1
name: dind-test-container
description: dind testing
image: docker:latest
command: ["sh", "-c", "sleep 600"]
resources:
  mem_mib: 300
  cpu_cores: 0.1
**annotations:
  ax_ea_docker_enable: '{"graph-storage-size": "10Gi", "cpu_cores":0.1, "mem_mib":200}'**
```

where:

*   `annotations` refers to the metadata that you can add to a YAML template to extend it. It contains only information that you will consume.
*   `ax_ea_docker_enable` is a key that meansit is an early access feature.
*   `graph-storage-size` refers to the storage that Docker uses
*   `cpu_cores` and `mem_mib` represents the memory given to Docker daemon; 32MB minimum; no restriction on number of cores.

For a complete example of Docker-in-Docker, see [Tutorial 2: Build Docker Image and Deploy Workflow](#/docs;doc=argo_tutorial_2_create_docker_image_build_workflow.md).

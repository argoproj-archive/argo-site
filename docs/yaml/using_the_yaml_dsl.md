# Tutorials

The Argo tutorials take you through the creation of YAML templates for workflows and deployments of containerized apps running at scale in Argo. The following examples show how to run CI/CD workflows, deploy stateful and stateless applications, and also use external, non-containerized resources (fixtures) in your workflows.

NOTE: All examples in these tutorials are available on the Argo GitHub account at [https://github.com/argoproj](https://github.com/argoproj) repo.

To access all of the YAML files that the tutorials use for running on Argo, check the `.argo` directory of this repo.

IMPORTANT: There are two things to remember about the YAML templates:
1.  The names of the YAML templates are case-sensitive. If you are running a job from the Argo command line (CLI), please check that the name of the workflow template in the command-line matches exactly the name of the template itself.
2. If the name of the YAML template contains a space, you must enclose the name in ASCII double quotes (for example, "MLB app").

## Prerequisites

Before you try out the tutorials, you must have installed Argo and configured source repository and container registry as mentioned in the [Install Argo]ur Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo and [https://hub.docker.com/argoproj](https://github.com/argoproj) container registry.

Additional documentation and additional tools (such as the Argo YAML syntax checker) are also available from the Argo github repo [https://github.com/argoproj](https://github.com/argoproj) repo.

# Install Argo

Before you start:

*   Make sure you have an [AWS account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) with [Minimum resource quota requirements](../d_more_information/faqs.htm#MinResourceType4AWS) for Argo running in AWS.
*   [Docker client](https://docs.docker.com/engine/installation/) is installed on your client system.
*   [AWS Command-Line Interface (CLI)](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) is installed on your client system.

## Install Argo In Your AWS Account from Command Line (Mac and Linux only)

1.  Run the following commands:

    For Mac

    `curl -sSL -O https://s3-us-west-1.amazonaws.com/ax-public/argocli/latest/darwin_amd64/argo`

    For Linux

    `curl -sSL -O https://s3-us-west-1.amazonaws.com/ax-public/argocli/latest/linux_amd64/arg`o

    `chmod +x argo`

    `./argo cluster`

    (ascii art -Argo logo appears)

2.  You'll see Welcome to Argo and the prompt `argo cluster ops >`.
3.  Enter `argocluster install`.
4.  Please enter a name for your cluster and your AWS profile.(Required) For the remaining configuration options, you can use the defaults .
5.  Here's a link to the successful installation. Argo installation could take up to 20 minutes as it is installing Kubernetes and configuring AWS.

## Configure Argo to Run Workflows

*   Integrate with your SCM repo from the Argo Web UI >Integrations > Source Control Management Systems.
*   Integrate with your Docker registry (which stores the container images you'll run as workflows) from the Argo Web UI > Integrations > Docker Registries.

By default, Argo integrates with the public GitHub repo [http://github.com/argoproj](http://github.com/argoproj) and the public Docker registry [https://hub.docker.com](https://hub.docker.com/) so you can easily run the examples and tutorials.

## Next Step:

Now that you have set up Argo in AWS, let's go to the [Tutorials](#/docs;doc=%2Fyaml%2Fusing_the_yaml_dsl.md) and run container-native workflows.

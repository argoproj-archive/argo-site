# Tutorials

The <span class="GeneralApplatix Platform Name">Argo</span> tutorials take you through the creation of YAML templates for workflows and deployments of containerized apps running at scale in <span class="GeneralApplatix Platform Name">Argo</span>. The following examples show how to run Docker containers in an <span class="GeneralKubernetes Cluster with Argo">Argo</span>, how to automate the running of workflows and deployments, and how to use other resources that are external to the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

NOTE: All examples in these tutorials are available on the <span class="GeneralApplatix Platform Name">Argo</span> GitHub account at [https://github.com/argoproj](https://github.com/argoproj) repo

Check the YAML files that are used to run on <span class="GeneralApplatix Platform Name">Argo</span> under `.argo` directory of the repo.

# About Workflows, Jobs, and Templates

After you connect <span class="GeneralKubernetes Cluster with Argo">Argo</span> to the desired repo branch and Docker registry, you are now ready to run a workload on the public cloud.

With <span class="GeneralApplatix Platform Name">Argo</span>, there are a couple types of workloads you can run on the Kubernetes Cluster:

*   workflows
*   applications

When you run a workload, this is called a job. A job consists of a workflow that is run by <span class="GeneralYAML template">YAML template</span>s.

## Prerequisites

Before you try out the tutorials, you must have installed Argo and configured source repository and container registry as mentioned in the [Quick Start with Argo](#/docs;doc=%2Fquickstart%2Fintro_applatix_quick_start.md) instructions. By default, your Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo and [https://hub.docker.com/argoproj](https://github.com/argoproj) container registry.

Additional documentation and additional tools (such as the <span class="GeneralApplatix Platform Name">Argo</span> YAML syntax checker) are also available from the "Quick Setup" menu from the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.

<span style="color: #ff0000;">Edit Intro to</span> <span style="color: #ff0000;" class="NewSetYAML Tutorial">YAML Tutorial and Reference</span> <span style="color: #ff0000;">below</span>

The automation of the public cloud infrastructure is driven by <span class="GeneralYAML template">YAML template</span>s that are written in the <span class="GeneralApplatix Platform Name">Argo</span> Domain Specific Language. (DSL). You write <span class="GeneralYAML template">YAML template</span>s for specifying workflows, deployments, and applications that run on <span class="GeneralKubernetes Cluster with Argo">Argo</span>. The specifications in the <span class="GeneralYAML template">YAML template</span>s are treated like code and are hosted in source code management (SCM) systems with your application code. Out of the box, <span class="GeneralApplatix Platform Name">Argo</span> also provides pre-configured, reusable workflows and applications in [Argo’s public GitHub repository (“repo”)](https://github.com/argoproj "Argo GitHub Repository"). This repo contains <span class="GeneralYAML template">YAML template</span>s for core microservices (such as checking out code from a Source Code Management system and an approval workflow) that can be used as "building blocks" for your own workflows and application s. You can clone them and modify the <span class="GeneralYAML template">YAML template</span>s to fit your needs.

<span class="GeneralApplatix Platform Name">Argo</span> also provides a syntax and consistency checkers to validate the YAML definitions. The checkers are available for Linux, Apple MacOS, and Microsoft Windows operating systems and they can be downloaded directly from the Applatix Console.

## About the <span class="GeneralApplatix Platform Name">Argo</span> YAML Templates

The <span class="GeneralApplatix Platform Name">Argo</span> DSL provides six types of YAML templates:

*   **Container** – for running a single container; you can specify its parameters (such as a Java build container, Selenium test container, or MySQL DB container)
*   **Workflow** – for specifying the job to run; think of it as a “short-running app” because a job “terminates” when it is completed.(such as Continuous Integration or Continuous Deployment workflows). Can be run manually or triggered by a policy. Each step in a workflow can be a container or another workflow.
*   **Policy** – for defining rules that trigger a job or notification. Policies are applied to other templates (such as a policy to automatically trigger jobs for every commit)
*   **Deployment** – for specifying a long-running service (such as a microservice or application). Can be run manually or triggered by a policy.
*   **Fixture** – for defining fixture classes that represent resources outside of the <span class="GeneralKubernetes Cluster with Argo">Argo</span>. In order for a workflow or application to use these resources with <span class="GeneralApplatix Platform Name">Argo</span>, you must define a fixture class. See [Creating a fixture class for a workflow](ex_create_managed_fixtures.htm#CreateFixture) for an example.
*   **Project** – for creating apps or workflows that can be accessed in the <span class="GeneralApplatix Catalog">Argo Catalog</span>
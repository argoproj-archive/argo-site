# Tutorial 3: Deploy a Stateless App

This tutorial shows how to deploy and scale a stateless containerized application called Major League Baseball ("MLB")using a workflow on Kubernetes. This stateless application consists of a <span class="UI_element">node.js</span> deployment and a <span class="UI_element">mongodb</span> deployment.

## Deploy a Stateless MLB App

1.  Go to [https://github.com/argoproj/appstore](https://github.com/argoproj/appstore) repository
2.  Review the `mlb_deploy.yaml` file under `.argo` folder in that repo. This file defines a workflow with four steps: "`checkout`", "`deploy mongo`", "`insert data`" and "`deploy mlb`". Each step is defined as a container or deployment. Each deployment specification internally maps to a Kubernetes deployment and service. For more details on the Argo deployment YAML DSL, see [Deployment Template](#/docs;doc=deployment_template.md).
3.  If your deployment spec has an `external_route` key, then that service can be accessed external to the cluster. If it has an `internal_route` key, then it can only be accessed by services within the cluster. In this example, the `mlb` instance has an `external_route` and `mongo` instance has an `internal_route`
4.  Since your Argo installation is automatically integrated with https://github.com/argoproj repo, you can view this workflow in your Argo web UI under Catalog menu item.
5.  From the Catalog, select <span class="UI_element">MLB</span> catalog item and click <span class="UI_element">Run.</span>
6.  You will see the workflow running in <span class="GeneralApplatix Cluster Console">Argo Web UI</span> where every step is a container. You can check logs by clicking on each step.
7.  Once the workflow completes you will see a "<span class="UI_element">mlb-app</span>" application deployed under <span class="UI_element">Applications</span> tab in the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
8.  You can see it has two deployments "<span class="UI_element">mongo-deploy</span>" and "<span class="UI_element">run-mlb-deploy</span>" with each deployment running one pod.
9.  You can access the app by clicking the "access_url" in the <span class="UI_element">mongo-deploy</span>.
10.  From the Application detail page, you can increase the number of pods, view the logs and sh/bash into the container

## Create and Deploy your custom stateless app

### Create your YAML files

1.  Create an `.argo` folder under your repository.
2.  Copy `mlb_deploy.yaml` from [https://github.com/argoproj/appstore/](https://github.com/argoproj/appstore/) to your `.argo` folder. Customize it with your deployment and container specifications.

    [[Notice that the code contains two types of YAML templates:

    *   A deployment template, which defines the parameters of a deployment.
    *   A corresponding container template, which specifies the implementation of the deployment.

    The deployment template has the following sections:

    *   The inputs section specifies the parameters that represent the long running service that is deployed.
    *   An application defines a namespace that may consist of multiple deployments. Each deployment may be deployed and upgraded independent. In this example, test-app only has one deployment.
    *   The scale section defines the number of instances that are used for this deployment.
    *   The external_routes and internal routes sections define the exposed ports. The external_routes are the ports that are exposed on the Internet. A DNS name and load balancer will be configured automatically for the deployment. A list of CIDRs allowed access to the service can also be specified. The internal routes section defines the ports that exposed only within the cluster.
    *   The containers section specifies the container for the application that will be deployed (in this example, it’s a server application, Apache.
    *   The termination_policy defines the maximum length of time and budget cost that the long running service stays alive.

    Lastly, you specify the corresponding container template that implements the deployment. This template has the following sections:

    *   The resources section defines the memory and CPU that the container uses
    *   The image section specifies the image to be used for the app.
    *   If desired, you can specify liveness or readiness probes in the readiness_probe or liveness_probe sections.
    *   The inputs section specifies the artifacts used in this workflow and the parameters for the input.
    *   The labels section specifies the tags to identify the container.]]
3.  `axscm_checkout.yaml` defines a container provided by Argo for checking out code in your AWS S3 storage which can be accessed by your other workflow steps. There is no need to customize this template as it is written to accomodate any source control system that <span class="GeneralApplatix Platform Name">Argo</span> supports.
4.  Customize the `dind-workflow.yaml` file with your build and deploy containers.
5.  `mlb_app_project.yaml` defines how it will show up in your <span class="UI_element">Catalog</span> menu. This is optional only if you want it to show up in your catalog. Otherwise you can run it against your commits in Timelines menu. You can also see and run all your yamls under Templates menu.

    [[One of the typical tasks you’ll perform in Applatix is to make your common workflows or applications available for other users to run and/or deploy.

    By default, the Applatix Cloud Delivery Platform connects to several apps and projects published in Applatix public GitHub repo. These apps and projects are automatically loaded into the Applatix Catalog. Additionally, you can also create and publish your own workflows and apps in the Catalog.

    To accomplish this task, you’ll use a project template to make the application and workflow visible in the Catalog:

    The following example is a project template for building a Golang program that is published to the Catalog.

    -------------------------------------------------------------------------------------

    In the code example, the project name and description will display as the name and short description of the corresponding app on the Applatix Catalog.

    For all actions that can be invoked, there is a template for each action you want to invoke. In this example, the template is golang check and build.

    Under assets, the value for the icon parameter points to a file containing the graphic that signifies the app; the value for the publisher_icon is another icon that overlays on the icon and quickly tells users where the app is coming from; detail contains the detailed description of the app that will be shown in the Applatix Console (“Console”). All path names are relative to the root of the source code repository containing the app.

    Use the categories parameter to specify the category that the app appears in the Catalog. A "promoted" app will appear in the list of apps at the top row of the Catalog. A non-promoted app appears under a category (which is displayed as the bottom row of the Catalog).]

    The publish statement indicates the branches from which the application is published. Typically, only the main branch is published. However, you can publish other branches based on the tasks to be completed (such as for testing or if different versions of the application from different release branches should be made available to users).

    The labels statement is used to tag or “label” apps with metadata for search purposes.]]

6.  If you want to setup a policy to automatically trigger this workflow then please review the steps and YAML under the[Tutorial 1: Create CI Workflow](#/docs;doc=argo_tutorial_1_create_ci_workflow.md) tutorial.

### Manually RUN your workflow

Since your Argo installation is integrated with your repo, you will see your commits in Argo web dashboard under Timeline menu item

You can select any commit, click on "create a new job". Select the workflow name, enter input parameter value and click on submit

### Automatically TRIGGER your workflow <span style="color: #ff0000;">[SAME]</span>

To setup a policy to automatically trigger this workflow then please review the steps for policy creation and YAML under CI-workflow tutorial

In Argo web UI, go to Templates menu and search for that policy and click enabled

For every commit on that repo, based on your policy your workflow will get triggered
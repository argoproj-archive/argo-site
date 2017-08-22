# Tutorial 3: Deploy a Stateless App

This tutorial shows how to deploy and scale a stateless containerized application called Major League Baseball ("MLB")using a workflow on Kubernetes. This stateless application consists of a node.js deployment and a mongodb deployment.

## Deploy a Stateless MLB App

1.  Go to [https://github.com/argoproj/appstore](https://github.com/argoproj/appstore) repository and click mlb-db.
2.  Review the `deploy-mlb-db.yaml` file under `.argo` folder in that repo. This file defines a workflow with four steps: "`checkout`", "`deploy-mongo`", "`insert-data`" and "`deploy-mlb`". Each step is defined as a container or deployment. Each deployment specification internally maps to a Kubernetes deployment and service. For more details on the Argo deployment YAML DSL, see [Deployment Template](#/docs;doc=deployment_template.md). Argo deployment YAMLs internally maps to Kubernetes deployment and service YAMLs.
3.  If your deployment spec has an `external_route` key, then that service can be accessed external to the cluster. If it has an `internal_route` key, then it can only be accessed by services within the cluster. In this example, the `mlb` instance has an `external_route` and the `mongo` instance has an `internal_route`
4.  Since your Argo installation is automatically integrated with [https://github.com/argoproj repo](https://github.com/argoproj repo), you can view this workflow in your Argo Web UI under the Catalog menu.
5.  Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, go to Navigation Bar > Settings > Domain Management, make your changes, and click UPDATE DOMAINS.
6.  From the Catalog, select MLB catalog item and click Run.
7.  You will see the workflow running in Argo Web UI where every step is a container. You can check logs by clicking on each step.
8.  Once the workflow completes you will see a "mlb-app" application deployed under Applications tab in the Argo Web UI.
9.  You can see it has two deployments "mongo-deploy" and "run-mlb-deploy" with each deployment running one pod.
10.  You can access the app by clicking the "access_url" in the mongo-deploy.
11.  From the Application detail page, you can increase the number of pods, view the logs and sh/bash into the container

## Create and Deploy your custom stateless app

### Create your YAML files

1.  Create an `.argo` folder under your repository.
2.  Copy `mlb_deploy.yaml` from [https://github.com/argoproj/appstore/](https://github.com/argoproj/appstore/) to your `.argo` folder. Customize it with your deployment and container specifications.

3.  `axscm_checkout.yaml` defines a container provided by Argo for checking out code in your AWS S3 storage which can be accessed by your other workflow steps. There is no need to customize this template as it is written to accomodate any source control system that Argo supports.
4.  Customize the `dind-workflow.yaml` file with your build and deploy containers.
5.  `mlb_app_project.yaml` defines how it will show up in your Catalog menu. This is optional only if you want it to show up in your catalog. Otherwise you can run it against your commits in Timelinesmenu. You can also see and run all your YAML templates under the Templates menu.

### Manually Run Your Workflow

Since your Argo installation is integrated with your repo, you will see your commits in Argo web dashboard under Timeline menu item.

You can select any commit, click on "create a new job". Select the workflow name, enter the input parameter value, and click Submit.

### Automatically Trigger Your Workflow

To setup a policy to automatically trigger this workflow then please review the steps for policy creation and the YAML file `example-policy.yaml` from [Tutorial 1: Create CI Workflow](#/docs;doc=argo_tutorial_1_create_ci_workflow.md).

In Argo web UI, go to Templates menu and search for that policy and click Enabled.

For every commit on that repo, based on your policy your workflow will get triggered.
# Tutorial 3: Deploy a Stateless App

This tutorial shows how to deploy and scale a stateless, containerized application called Major League Baseball ("MLB") using Argo on Kubernetes. This stateless application consists of a node.js deployment and a mongodb deployment. These are the steps you'll run to deploy this stateless application:

* Check out source code from your repo
* Deploy the mongodb container
* Insert the MLB data into mongodb
* Deploy the Node.js container with the MLB app

## Prerequisites
This tutorial assumes the following:

* You have successfully [installed Argo](https://argoproj.github.io/argo-site/#/get-started/installation).
* You have integrated Argo with the sample MLB repo at [https://github.com/argoproj/appstore](https://github.com/argoproj/appstore).

## About the YAML files

This MLB app deployment workflow uses 2 YAML files from the `.argo` folder in the Argo appstore repo:

* `argo_checkout.yaml` defines a container that Argo provides for checking out code from your repo to an AWS S3 bucket that your workflow steps access. There's no need to customize this Argo-provided YAML file because it is written to accommodate any source control system that Argo supports.

* `mlb.yaml` defines a workflow with four steps:
  - `checkout` - checks out the source code for the stateless MLB web app.
 - `deploy-mongo` - deploys mongodb as a container.
 - `insert-data` - inserts the MLB data into the container for the mongodb database.
 - `deploy-mlb`- deploys the Node.js container for running the MLB web app.
  <br/>

  Each step is defined as a container or deployment.

  The `mlb.yaml` file also defines two network routes for services to access the MLB web application:
	- `external_routes:` for the `mlb-deploy` deployment. This means that the MLB deployment can be accessed by services outside of the Argo cluster (which means the public Internet).
	- `internal_routes:` for the `mongo-deploy` deployment. This means that the mongodb deployment can only be accessed by services within the Argo cluster.

NOTE: The YAML files for an Argo deployment internally map to the YAML files that Kubernetes uses for deployment and services.
For more details on writing a deployment file using Argo YAML DSL, see [Deployment Template](#/docs;doc=yaml%deployment_template.md).

## Deploy the Stateless MLB App using Catalog

To deploy the sample MLB app, go to the Argo Web UI and perform these steps:

1.  Configure the domain for your deployment (Navigation Bar > **Settings** > **Domain Management**, *<add-your-domain>*, and click **UPDATE DOMAINS**.
2.  Go to **Catalog** and select **MLB** and click **Run**. You will see the workflow running in Argo Web UI where every step is a container within a Kubernetes pod. You can check logs by clicking on each step.

 ![MLB_deployment](../../images/mlb.png)

When the workflow completes you will see a `mlb-app` application deployed under Applications tab in the Argo Web UI. You can see it has two deployments `mongo-deploy` and `mlb-deploy` with each deployment running one pod. You can view the app by clicking the `endpoint` in the `mlb-deploy`.

From the deployment detail page, you can increase the number of instances/pods for each deployment, view the logs, and shell or bash into the container.

## Customize Your Stateless App

* In your own repo, create a directory called `.argo`. (The Argo Workflow engine uses this directory to look for the YAML files to run for a containerized workflow.)

* Copy the 2 YAML templates you ran in the sample stateless MLB app (`argo_checkout.yaml` and `mlb.yaml`) from the Appstore  [https://github.com/argoproj/appstore/tree/master/.argo](https://github.com/argoproj/appstore/tree/master/.argo) to the `.argo` folder you just created in your repo.

* Customize the `mlb.yaml` file with your deployment and container specifications.

For more details about writing the YAML DSL see [Argo YAML DSL Reference](#/docs;doc=yaml%2Fdsl_reference_intro.md).




### Running Your Deployment Workflow

When you integrate your repo with Argo, the Argo Web UI displays your source code commits in the **Timeline** menu item.


 You have two options for running your customized deployment workflow:

 * **Manually**
	 - Go to **Timeline**.
	 - Select a commit.
	 - Click **Create a New Job**.
	 - Select the CI workflow name and enter values for the input parameters.
	 - Click **Submit**.  
<br/>
   (Optional) As a convenience, Argo also lets you run your workflow from the **Catalog**. The benefit of using the Catalog is it allows multiple users to easily run the workflow through the Argo Web UI. If you want the MLB stateless app to display in your Catalog menu, just modify the the `Project` section in the `mlb.yaml` YAML template.


 * **Automatically**
<!--May want to move the generic core templates into a separate directory or repo; otherwise the templates are scattered many directories-->
   - Create a Policy template. (TIP: Copy the `example-policy.yaml` file from https://github.com/argoproj/ci-workflow/tree/master/.argo to the `.argo` directory in your repo and modify it as needed.)
   - Enable your policy template. (**Templates** > *name_of_policy_template* > and click **Enabled**)  
   <br/>

   After you've completed these steps, every time you make a commit in your repo, the CI workflow is automatically triggered.

<!--
# Tutorial 3: Deploy a Stateless App

This tutorial shows how to deploy and scale a stateless containerized application called Major League Baseball ("MLB")using a workflow on Kubernetes. This stateless application consists of a node.js deployment and a mongodb deployment.

## Deploy a Stateless MLB App

1.  Go to [https://github.com/argoproj/appstore](https://github.com/argoproj/appstore) repository and click mlb-db.
2.  Review the `deploy-mlb-db.yaml` file under `.argo` folder in that repo. This file defines a workflow with four steps: "`checkout`", "`deploy-mongo`", "`insert-data`" and "`deploy-mlb`". Each step is defined as a container or deployment. Each deployment specification internally maps to a Kubernetes deployment and service. For more details on the Argo deployment YAML DSL, see [Deployment Template](#/docs;doc=yaml%2Fdeployment_template.md). Argo deployment YAMLs internally maps to Kubernetes deployment and service YAMLs.
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

To setup a policy to automatically trigger this workflow then please review the steps for policy creation and the YAML file `example-policy.yaml` from [Tutorial 1: Create CI Workflow](#/docs;doc=yaml%2Fargo_tutorial_1_create_ci_workflow.md).

In Argo web UI, go to Templates menu and search for that policy and click Enabled.

For every commit on that repo, based on your policy your workflow will get triggered.
-->

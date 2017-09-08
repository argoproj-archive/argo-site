# Tutorial 3: Deploy a Stateless App

This tutorial shows how to deploy and scale a stateless, containerized application called Major League Baseball ("MLB") using Argo on Kubernetes. This stateless application consists of a node.js deployment and a mongodb deployment. These are the steps you'll run to deploy this stateless application:

* Check out code
* Deploy mongodb container
* Insert MLB data into mongodb
* Deploy Node.js container with the MLB app

## Prerequisites
This tutorial assumes the following:

* You have successfully [installed Argo](https://argoproj.github.io/argo-site/get-started/installation).
* You have integrated Argo with the sample MLB repo at [https://github.com/argoproj/appstore](https://github.com/argoproj/appstore).

## About the YAML files

This MLB app deployment workflow uses 2 YAML files from the `.argo` folder in the Argo appstore repo:

* `argo_checkout.yaml` defines a container that Argo provides for checking out code from your repo to an AWS S3 bucket that your workflow steps access.
* `mlb.yaml` defines a workflow with four steps:
 - `checkout` - checks out the source code for the stateless MLB web app.
 - `deploy-mongo` - deploys mongodb as a container.
 - `insert-data` - inserts the MLB data into the container for the mongodb database.
 - `deploy-mlb`- deploys the Node.js container for running the MLB web app.
  <br/>

  Each step is defined as a container or deployment.

	- `mlb-deploy` deployment has an `external_route`. This means that the MLB deployment can be accessed by services outside of the Argo cluster.
	- `mongo-deploy` deployment has an `internal_route`. This means that the mongodb deployment can only be accessed by services within the K8s cluster.

NOTE: The YAML files for an Argo deployment internally map to Kubernetes deployment and services YAML files.
For more details on writing a deployment file using Argo YAML DSL, see [Deployment Template](../yaml/deployment_template.md).

## Deploy the Sample Stateless MLB App

To deploy the sample MLB app, go to the Argo Web UI and perform these steps:

1.  Configure the domain for your deployment (Navigation Bar > **Settings** > **Domain Management**, *<add-your-domain>*, and click **UPDATE DOMAINS**.
2.  Go to **Catalog** and select **MLB** and click **Run**. You will see the workflow running in Argo Web UI. You can check logs by clicking on each step. When the workflow completes you will see a `mlb-app` application deployed under Applications tab in the Argo Web UI. You can see it has two deployments `mongo-deploy` and `mlb-deploy` with each deployment running one pod. You can view the app by clicking the `endpoint` in the `mlb-deploy`.
3. From the deployment detail page, you can increase the number of instances/pods for each deployment, view the logs, and shell or bash into the container.

 ![MLB_deployment](../../images/mlb.png)


## Customizing Your Stateless App

1. In your own repo, create a directory called `.argo`.
1. Copy the 2 YAML templates you ran in the sample stateless MLB app (`argo_checkout.yaml` and `mlb.yaml`) from the Appstore  [https://github.com/argoproj/appstore/tree/master/.argo](https://github.com/argoproj/appstore/tree/master/.argo) to your `.argo` folder
2. Customize the `mlb.yaml` file with your deployment and container specifications.

## Running Your Deployment Workflow

When you integrate your repo with Argo, the Argo Web UI displays your source code commits in the **Timeline** menu item.

You have two options for running your customized CI workflow:

 * **Manually**
	1. Go to **Timeline** menu, select a commit and click **Create a New Job**.
	2. Select the CI workflow name, enter values for the input parameters and click **Submit**.  

   (Optional)  If you want your stateless app to display in your Catalog menu, just modify the `Project` section in the `mlb.yaml` YAML template.

* **Automatically**
  1. Add `commit` and `repo` as input parameters to your workflow as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).
  2. Create and activate a Policy template to trigger this workflow for every commit as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).

   After you've completed these steps, every time you make a commit in your repo, the deployment workflow is automatically triggered.   

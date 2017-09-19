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
* (CLI only) You have logged into the Argo command line. To do this, go to your terminal, cd to the directory for the Argo install, and enter the following information at the command-line prompt:

  * ```$ ~/argo login```
  * Press enter for "Enter a configuration name (default):" (this takes the default value)
  * *your_Argo_cluster_URL* for "Enter cluster URL:"
  * *your_email_address* for "Enter cluster username:"
  * *your_Argo_cluster_password* for "Enter cluster password:"
<!--Config written to: /Users/<your_name>/.argo/default-->


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

### From Argo CLI:

```$ argo job submit "Deploy MLB" --argument "parameters.APPNAME=mlb-app"  --argument "parameters.YEAR=2016"```

NOTE: This code example does not include the parameter arguments, `commit` and `repo`. These are optional because they are specified as special parameters (%%) Argo CLI automatically checks for the repo and the commit associated with the job. 

<!-- complete command line that includes commit and repo arguments-->
<!--
$ argo job submit "Deploy MLB" --argument "parameters.COMMIT=4714410fd6a47db3022c9722aebc0fe1efed69e9" --argument "parameters.REPO=https://github.com/argoproj/appstore.git" --argument "parameters.APPNAME=mlb-app"  --argument "parameters.YEAR=2016"
-->
Get the job ID of the running job:

```$ argo job list```

Get the status of a job:

```$ argo job show <job_ID>```

### From Argo Web UI

1.  Configure the domain for your deployment (Navigation Bar > **Settings** > **Domain Management**, *<add-your-domain>*, and click **UPDATE DOMAINS**.
2.  Go to **Catalog** and select **MLB** and click **Run**. You will see the workflow running in Argo Web UI. You can check logs by clicking on each step. When the workflow completes you will see a `mlb-app` application deployed under Applications tab in the Argo Web UI. You can see it has two deployments `mongo-deploy` and `mlb-deploy` with each deployment running one pod. You can view the app by clicking the `endpoint` in the `mlb-deploy`.
3. From the deployment detail page, you can increase the number of instances/pods for each deployment, view the logs, and shell or bash into the container.

 ![MLB_deployment](../../images/mlb.png)


## Customizing Your Stateless App

1. In your own repo, create a directory called `.argo`.
1. Copy the 2 YAML templates you ran in the sample stateless MLB app (`argo_checkout.yaml` and `mlb.yaml`) from the Appstore  [https://github.com/argoproj/appstore/tree/master/.argo](https://github.com/argoproj/appstore/tree/master/.argo) to your `.argo` folder
2. Customize the `mlb.yaml` file with your deployment and container specifications.
3. 	Integrate your repo with Argo. In Argo Web UI, select **Administration->Integrations->SCM**. Once integrated, the Argo Web UI will display your source code commits in the **Timeline** menu item.

## Running Your Deployment Workflow


You have two options for running your customized deployment workflow:

 * **Manually**
	1. Go to **Timeline** menu, select a commit and click **Create a New Job**.
	2. Select the CI workflow name, enter values for the input parameters and click **Submit**.  

   (Optional)  If you want your stateless app to display in your Catalog menu, just modify the `Project` section in the `mlb.yaml` YAML template.

* **Automatically**

  2. Create and activate a Policy template to trigger this workflow for every commit as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).

   After you've completed these steps, every time you make a commit in your repo, the deployment workflow is automatically triggered.   

# Tutorial 4: Deploy a Stateful App

This tutorial shows how to deploy and scale a stateful, containerized application named Odoo ([https://www.odoo.com](https://www.odoo.com/)) using persistent volumes. Odoo is an open source, two-tiered, ERP and CRM app that has an app server and a PostgreSQL database.

This tutorial uses two AWS EBS volumes to persist data: One volume for persisting the app server files and another volume for persisting the PostgreSQL database.    

These are the steps you'll run in this workflow for deploying the app:

* Deploy a PostgreSQL database
* Deploy the Odoo application

## Prerequisites
This tutorial assumes the following:

* You have successfully [installed Argo](https://argoproj.github.io/argo-site/get-started/installation).
* You have integrated Argo with the sample Odoo repo at [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app).
* (CLI only) You have logged into the Argo command line. To do this, go to your terminal, cd to the directory for the Argo install, and enter the following information at the command-line prompt:

  * ```$ ~/argo login```
  * Press enter for "Enter a configuration name (default):" (this takes the default value)
  * *your_Argo_cluster_URL* for "Enter cluster URL:"
  * *your_email_address* for "Enter cluster username:"
  * *your_Argo_cluster_password* for "Enter cluster password:"
<!--Config written to: /Users/<your_name>/.argo/default-->


## About the YAML files

This stateful app deployment uses the following YAML file from the `.argo` folder in the  sample Odoo repo:

* `odoo-with-vol.yaml` - defines a workflow with two steps: "`deploy-postgres`" and "`deploy-odoo`". Each step is specified as a deployment. Argo deployment YAMLs internally map to Kubernetes deployment and service YAMLs. For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](../yaml/dsl_reference_intro.md).

  In this tutorial, the `odoo-with-vol.yaml` file refers to two named EBS volumes, "`odoo`" and "`postgres`" which need to be created before deploying the app. For further details about specifying volumes for a deployment, see [Adding a Volume as Storage for Deployment](../yaml/ex_add_volume_deployment.md).

## Deploy and Scale Odoo App

### From Argo CLI:

```$ argo job submit odoo-workflow-with-volumes --argument "parameters.APP_NAME=odoo-with-vols" --argument "parameters.APP_VOL_NAME=odoo" --argument "parameters.DATA_VOL_NAME=postgres" --argument "parameters.PASSWORD=odoo" --argument "parameters.USER=odoo" --repo https://github.com/argoproj/odoo-app.git```

Get the job ID of the running job:

```$ ~/argo job list```

Get the status of a job:

```$ ~/argo job show <job_ID>```

### From Argo Web UI

1. Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, click **Navigation Bar** > **Settings** > **Domain Management**, make your changes, and click **UPDATE DOMAINS**.
2. Create two named volumes. Go to **Navigation Bar** > **Infrastructure** > **Volumes** and create two EBS volumes called "`odoo`" and "`postgres`" of 1 GB size each.
2. From **Catalog**, click **>** to select **Odoo App**, and click **Deploy Odoo With Volumes**. Keep the default input parameters. Make sure the volume input parameters are defined as above. Click **Submit**. You will see the workflow running in Argo Web UI.
3. When the workflow completes, go to **Applications** tab. You'll see a new application named **odoo-with-vols** that has been deployed.

 ![odoo-with-vols](../../images/deployed_odoo_app_with_volumes_instances.png)
You can also see that the application has two deployments: **odoo-deploy** and **postgres-deploy** with each deployment running its own pod.
4.  Click `odoo-deploy`. You can easily increase the number of pods, view the logs and sh/bash into the container for the app itself. Click on the `endpoint` to launch the app in your browser.
If you start or stop the application, you can see that the data is persisted.

## Customize Your Stateful App

1. In your own repo, create a directory called `.argo`. (The Argo Workflow engine uses this directory to look for the YAML files to run for a containerized workflow.)
1. Copy the `odoo-with-vol.yaml` YAML file you ran in the above workflow from [https://github.com/argoproj/odoo-app/,argo](https://github.com/argoproj/odoo-app/,argo) to the `.argo` folder you just created in your repo.
1. Customize the `odoo-with-vol.yaml` file by writing your own deployment specification or adding more steps.

	For more details about writing the YAML DSL, see [Argo YAML DSL Reference](./../yaml/dsl_reference_intro.md).

4. Integrate your repo with Argo. In Argo Web UI, select **Administration->Integrations->SCM**. Once integrated, the Argo Web UI will display your source code commits in the **Timeline** menu item.

## Running Your Deployment Workflow


You have two options for deploying your stateful app:

 * **Manually**
	1. Go to **Templates** menu, select your YAML template and click **Create a New Job**.

   (Optional)  If you want your app to display in your Catalog menu, just modify the `Project` section in the `odoo-project.yaml` YAML template.


 * **Automatically**
	1. Add `commit` and `repo` as input parameters to your workflow as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md)
	2. Create and activate a Policy template to trigger this workflow for every commit as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md)

   After you've completed these steps, every time you make a commit in your repo, the deployment workflow is automatically triggered.

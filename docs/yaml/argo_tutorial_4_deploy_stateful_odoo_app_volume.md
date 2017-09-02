# Tutorial 4: Deploy a Stateful App

This tutorial shows how to deploy and scale a stateful, containerized application named Odoo ([https://www.odoo.com](https://www.odoo.com/)). Odoo is an open source, two-tiered, ERP and CRM app that has an app server and a PostgreSQL database.

This tutorial also uses two AWS EBS volumes to persist data: One volume for persisting the app server files and another volume for persisting the PostgreSQL database.    

These are the steps you'll run in this workflow for deploying the containerized, stateful app that uses volumes:

* Deploy a PostgreSQL database
* Deploy the Odoo application

## Prerequisites
This tutorial assumes the following:

* You have successfully [installed Argo](https://argoproj.github.io/argo-site/#/get-started/installation).
* You have integrated Argo with the sample Odoo repo at [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app).

## About the YAML files

This stateful app deployment with volumes uses 1 YAML file from the `.argo` folder in the  sample Odoo repo:

* `odoo-with-vol.yaml` - defines a workflow with two steps: "`deploy-postgres`" and "`deploy-odoo`". Each step is specified as a deployment. Argo deployment YAMLs internally map to Kubernetes deployment and service YAMLs. For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](#/docs;doc=yaml%2Fdsl_reference_intro.md).

  Because both deployments need to persist data, you must first create two volumes. In this tutorial, the `odoo-with-vol.yaml` file already specifies two EBS volumes, "`odoo`" and "`postgres`". For further details about specifying volumes for a deployment, see [Adding a Volume as Storage for Deployment](#/docs;doc=yaml%2Fex_add_volume_deployment.md).

  NOTE: You can also create the volumes using the Argo Web UI. Go to **Navigation Bar** > **Infrastructure** > **Volumes** and create two EBS volumes called "`odoo`" and "`postgres`" of 1 GB size each.

## Deploy and Scale Odoo App

1. Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, click **Navigation Bar** > **Settings** > **Domain Management**, make your changes, and click **UPDATE DOMAINS**.
2. From **Catalog**, click **>** to select **Odoo App**, and click **Deploy Odoo With Volumes**. Keep the default input parameters. Make sure the volume input parameters are defined as above. Click **Submit**. You will see the workflow running in Argo web UI.
3. When the workflow completes, go to **Applications** tab. You'll see a new application named **odoo-with-vols** that has been deployed.
You can also see that the application has two deployments: **odoo-deploy** and **postgres-deploy** with each deployment running in its own pod.
4.  Click `odoo-deploy`. From this view, you can easily increase the number of pods, view the logs and access the endpoint so you can sh/bash into the container for the app itself.
If you start or stop the application, you can see that the data is persisted.

## Customze Your Stateful App

1. In your own repo, create a directory called `.argo`. (The Argo Workflow engine uses this directory to look for the YAML files to run for a containerized workflow.)
1. Copy the YAML templates you ran in the sample workflow for deploying stateless app from [https://github.com/argoproj/odoo-app/,argo](https://github.com/argoproj/odoo-app/,argo) to the `.argo` folder you just created in your repo.
1. Customize the `odoo-with-vol.yaml` file by writing your own deployment specification or adding more steps.

	For more details about writing the YAML DSL, see [Argo YAML DSL Reference](./../yaml/dsl_reference_intro.md).

4.  (Optional) Modify the `odoo-project.yaml` file to give users the option to run the project from the Catalog menu. If you do not want to provide this option, then users can run the workflow against your commits displayed in the **Timelines** menu. You can also run all your YAML templates from the **Templates** menu.

When you integrate your repo with Argo, the Argo Web UI will display your source code commits in the **Timeline** menu item.

## Running Your Deployment Workflow

When you integrate your repo with Argo, the Argo Web UI displays your source code commits in the **Timeline** menu item.

You have two options for running your customized CI workflow:

 * **Manually**
	1. Go to **Timeline** menu, select a commit and click **Create a New Job**.
	1. Select the CI workflow name, enter values for the input parameters and click **Submit**.  

   (Optional)  If you want your stateless app to display in your Catalog menu, just modify the `Project` section in the `odoo-project.yaml` YAML template.


 * **Automatically**
	1. Create a Policy template. (TIP: Copy the `example-policy.yaml` file from https://github.com/argoproj/ci-workflow/tree/master/.argo to the `.argo` directory in your repo and modify it as needed.)
	1. Enable your policy template. (**Templates** > *name_of_policy_template* > and click **Enabled**)  
   <br/>

   After you've completed these steps, every time you make a commit in your repo, the CI workflow is automatically triggered.

<!-- [Tutorial 1: Create CI Workflow](#/docs;doc=yaml%2Fargo_tutorial_1_create_ci_workflow.md).-->

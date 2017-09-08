# Tutorial 5: Deploy Stateful App with AWS RDS

This tutorial shows how to deploy a stateful, containerized application named Odoo ([https://www.odoo.com](https://www.odoo.com/)/) using AWS RDS to persist the data. Odoo is an open source, two-tiered, ERP and CRM app composed of an app server and PostgreSQL database. This tutorial uses an AWS EBS volume to persist the app server files and AWS RDS for the PostgreSQL database.

The only step you'll run in this tutorial is to deploy odoo.

## Prerequisites

This tutorial assumes the following:

* You have successfully [installed Argo](https://argoproj.github.io/argo-site/get-started/installation).
* You have integrated Argo with the sample odoo repo at [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app)
* You have [created an AWS RDS database instance of type "PostgreSQL"](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html). Make sure that Argo can access the database endpoint.

## About the YAML Files

This stateful app deployment with AWS RDS uses the following YAML file from the repo at  [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app/.argo):

* ` odoo-with-rds.yaml` - defines a workflow with one step - "`deploy-odoo`" which is of type `deployment`. This step deploys the Odoo app server. Argo deployment YAMLs internally maps to Kubernetes deployment and service YAMLs. For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](./../yaml/dsl_reference_intro.md).

In this tutorial, ` odoo-with-rds.yaml` file refers to a named volume `odoo-rds` which needs to be created before deploying the app. For further details about specifying volumes for a deployment, see [Adding a Volume as Storage for Deployment](#/docs;doc=yaml%2Fex_add_volume_deployment.md).

## Deploy and Scale Sample Odoo App with AWS RDS

1. Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, click **Navigation Bar** > **Settings** > **Domain Management**, make your changes, and click **UPDATE DOMAINS**.
2. Create a named volume. Go to **Navigation Bar** > **Infrastructure** > **Volumes** and create an EBS volume named `odoo-rds` of 1 GB size.
2. From **Catalog**, select **Odoo App**, and click **Deploy Odoo with RDS**. Keep the default input parameters. Make sure the volume input parameters are defined as above. For the `DBHost` parameter, enter your RDS endpoint (which is a URL that AWS provides). You don't have to enter port number 5432. Click **Submit**. You will see the workflow running in Argo Web UI.
3. When the workflow completes, go to **Applications** tab. You'll see a new application named **odoo-rds-with-vols** that has been deployed.

  ![](./../../images/application_odoo-rds-with-vols_screen2.png)

 You'll also see that the application has one deployment: **odoo-deploy** which is running its own pod/instance.
4. Click `endpoint` to launch the odoo app in your browser.

4.  Click `odoo-deploy`. You can easily increase the number of pods, view the logs and sh/bash into the container for the app itself.

## Customize Your YAML Files

1.  Create a `.argo` folder under your repository.
2.  Copy `odoo-with-rds.yaml` from [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app) to your `.argo` folder. Customize it with your deployment and container specs.
3.  Create an EBS volume called "`odoo`" using the [YAML templates for Volumes](./ex_add_volume_deployment.md) or the Argo Web UI (**Navigation Bar** > **Infrastructure** > **Volumes** > **+** and select a type of  named volume.
4.  (Optional) Modify the `odoo-project.yaml` file to give users the option to run the app from the Catalog menu. If you do not want to provide this option, then users can run the workflow against your YAML template from the **Templates** menu.

## Running Your Deployment Workflow

When you integrate your repo with Argo, the Argo Web UI displays your source code commits in the **Timeline** menu.

You have two options for running your customized CI workflow:

 * **Manually**
	1. Go to **Templates** menu, select your YAML template and click **Create a New Job**.
	1. Select the CI workflow name, enter values for the input parameters and click **Submit**.  

   (Optional)  If you want your app to display in your Catalog menu, just modify the `Project` section in the `odoo-project.yaml` YAML template.


 * **Automatically**
    1. Add `commit` and `repo` as input parameters to your workflow as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).
    2. Create and activate a Policy template to trigger this workflow for every commit as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).

     After you've completed these steps, every time you make a commit in your repo, the deployment workflow is automatically triggered.

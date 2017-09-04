# Tutorial 5: Deploy Stateful App with AWS RDS

This tutorial shows how to deploy and scale a Stateful containerized application using a workflow. The example app you'll deploy is Odoo, which is an open source, two-tiered, ERP and CRM app. ([https://www.odoo.com](https://www.odoo.com/)/). Odoo has an app server and postgres database. This tutorial uses an AWS EBS volume to persist the app server files and AWS RDS for the postgres database.

## Deploy and Scale Example Odoo App with AWS RDS

1.  From your AWS console, create an AWS RDS database instance of type "PostgreSQL" taking all default parameters. Make sure the database endpoint can be accessed from Argo.
2.  Go to [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app) repository.
3.  Review the `odoo-with-rds.yaml` under `.argo` folder in that repo. It defines a workflow with one step - "`deploy-odoo`" which is of type `deployment`. This step deploys the Odoo app server. Argo deployment YAMLs internally maps to Kubernetes deployment and service YAMLs. For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](./../yaml/dsl_reference_intro.md).
4.  Because the Odoo deployment must persist data, you must first create a volume. Go to Argo web UI->infrastructure > Volumes and create an EBS volume called "odoo-rds" of 1 GB size. You can do this automatically in the YAML template. For an example, see [Adding a Volume as Storage for Deployment](./ex_add_volume_deployment.md).
5.  Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, go to Navigation Bar > Settings > Domain Management, make your changes, and click UPDATE DOMAINS.
6.  Since your Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo, you can view the "Odoo App" workflow in your Argo Web UI at Catalog > Demo.
7.  From your Catalog, select "Odoo App" and click "Deploy Odoo with RDS". Keep the default input parameters. Make sure the volume name input parameter is defined as above. Provide your RDS endpoint as the `DBHost` parameter. You don't have to provide the port 5432\. Click Submit.
8.  You will see the workflow running in Argo Web UI.
9.  Once the workflow completes you will see a "odoo-rds-with-vols" application deployed under Applications tab in Argo Web UI.
10.  You can see it has one deployment "odoo-deploy" which is running one pod/instance.
11.  Click the "access-url" in `odoo-deploy` and you can access the odoo application from your browser
12.  You can easily increase the number of pods, view the logs and sh/bash into the container
13.  If you stop or terminate the application and redeploy you can see that the data is persisted

## Deploy and Scale Your Custom Stateful app

### Create your YAML files

1.  Create an `.argo` folder under your repository.
2.  Copy `odoo-with-rds.yaml` from [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app) to your `.argo` folder. Customize it with your deployment and container specs.
3.  Create volumes using the [YAML templates](./ex_add_volume_deployment.md) or the Argo Web UI.
4.  (Optional) If you want the application to show up in your Catalog, .the file `odoo-project.yaml` specifies this. You can also run all your YAML-based workflows from the Templates menu in the Argo Web UI

## Manually Run Your Workflow

1.  Go to Templates menu in Argo web UI.
2.  Search by your app name.
3.  Submit a new job.

## Automatically Trigger Your Workflow

1.  To setup a policy to automatically trigger this workflow, please review the steps for policy creation and the YAML file `example-policy.yaml` from [Tutorial 1: Create CI Workflow](./../yaml/argo_tutorial_1_create_ci_workflow.md).
2.  In Argo web UI, go to Templates menu and search for that policy and click Enabled.
3.  For every commit on that repo, based on your policy your workflow will get triggered

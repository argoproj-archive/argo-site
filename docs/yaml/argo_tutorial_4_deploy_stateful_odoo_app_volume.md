# Tutorial 4: Deploy a Stateful App

This tutorial shows how to deploy and scale a stateful, containerized application (Odoo.com) using an EBS volume on AWS.

## Deploy and Scale Odoo App

1.  Go to [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app) repository.
2.  Review the `odoo-with-vol.yaml` under `.argo` folder in that repo. It defines a workflow with two steps: "`deploy-postgres`" and "`deploy-odoo`". Each step is specified as a deployment. Argo deployment YAMLs internally maps to Kubernetes deployment and service YAMLs. For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](#/docs;doc=dsl_reference_intro.md).
3.  Because both deployments need to persist data, you need to first create two volumes . Go to Argo web UI->infrastructure > Volumes and create two EBS volumes called "`odoo`" and "`postgres`" of 1 GB each. You can do this automatically in YAML also as defined in YAML tutorial at [Adding a Volume as Storage for Deployment](#/docs;doc=ex_add_volume_deployment.md).
4.  Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, go to Navigation Bar > Settings > Domain Management, make your changes, and click UPDATE DOMAINS.
5.  Since your Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo, you can view the "Odoo-App" workflow in your Argo Web UI under Catalog menu item under Demo category.
6.  Select "Odoo App" catalog item and click Deploy Odoo with volumes. Keep the default input parameters. Make sure the volume input parameters are defined as above. Click Submit.
7.  You will see the workflow running in Argo web UI.
8.  Once the workflow completes, go to Applications tab. You'll see a new application named "odoo-with-vols" that has been deployed.
9.  You can see that the application has two deployments: "odoo-deploy" and "postgres-deploy" with each deployment running in its own pod.
10.  Click the "access-url" in `odoo-deploy` and you can access the odoo application from your browser
11.  From this view, you can easily increase the number of pods, view the logs and sh/bash into the container itself.
12.  If you start or stop the application, you can see that the data is persisted.

## Create and Deploy Your Custom Stateful App

### Create your YAML files

1.  Create an `.argo` folder under your repository.
2.  Copy `odoo-with-vol.yaml` from [https://github.com/argoproj/odoo-app](https://github.com/argoproj/odoo-app) to your `.argo` folder. Customize it with your deployment and container specs.
3.  Create volumes through your YAML template through the Argo Web UI.
4.  (Optional) If you want the application to show up in your Catalog, .the file `odoo-project.yaml` specifies this. You can also run all your YAML-based workflows from the Templates menu in the Argo Web UI.

### Manually Run Your Workflow

1.  Go to Templates menu in Argo Web UI.
2.  Search by your app name.
3.  Submit a new job.

### Automatically Trigger Your Workflow

1.  To setup a policy to automatically trigger this workflow, please review the steps for policy creation and the YAML file `example-policy.yaml` from [Tutorial 1: Create CI Workflow](#/docs;doc=argo_tutorial_1_create_ci_workflow.md).
2.  In Argo Web UI, go to Templates menu and search for that policy and click Enabled.
3.  For every commit on that repo, based on your policy your workflow will get triggered.

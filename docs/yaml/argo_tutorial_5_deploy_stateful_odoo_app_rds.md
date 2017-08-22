# Tutorial 5: Deploy Stateful App with AWS RDS

This tutorial shows how to deploy and scale a Stateful containerized application using a workflow. The example app you'll deploy is Odoo, which is an open source, two-tiered, ERP and CRM app. ([https://www.odoo.com](https://www.odoo.com/)/). Odoo has an app server and postgres database. This tutorial uses an AWS EBS volume to persist the app server files and AWS RDS for the postgres database.

## Deploy and Scale Example Odoo App with AWS RDS

1.  From your AWS console, create an AWS RDS database instance of type "PostgreSQL" taking all default parameters. Make sure the database endpoint can be accessed from Argo.
2.  Go to [https://github.com/argoproj/odd-app](https://github.com/argoproj/odd-app) repository.
3.  Review the `odoo-with-rds.yaml` under `.argo` folder in that repo. It defines a workflow with one step - "`deploy-odoo`" which is of type `deployment`. This step deploys the Odoo app server. The Argo deployment specification internally maps to a Kubernetes deployment and service. For more details on the Argo YAML DSL you can check the YAML tutorial at <span style="color: #ff0000;"><need help url for rds yaml></span>
4.  Because the Odoo deployment must persist data, you must first create a volume. Go to Argo web UI-><span class="UI_element">infrastructure</span> > <span class="UI_element">Volumes</span> and create an EBS volume called "odoo-rds" of 1 GB size. You can do this automatically in the YAML template. For an example, see [Adding a Volume as Storage for Deployment](#/docs;doc=ex_add_volume_deployment.md).
5.  Since your Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo, you can view the "Odoo App" workflow in your <span class="GeneralApplatix Cluster Console">Argo Web UI</span> at <span class="UI_element">Catalog</span> > <span class="UI_element">Demo</span>.
6.  From your <span class="UI_element">Catalog</span>, select "<span class="UI_element">Odoo App</span>" and click "<span class="UI_element">Deploy Odoo with RDS</span>". Keep the default input parameters. Make sure the volume name input parameter is defined as above. Provide your RDS endpoint as the `DBHost` parameter. You don't have to provide the port 5432\. Click <span class="UI_element">Submit</span>.
7.  You will see the workflow running in <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
8.  Once the workflow completes you will see a "<span class="UI_element">odoo-rds-with-vols</span>" application deployed under Applications tab in <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
9.  You can see it has one deployment "odoo-deploy" which is running one pod/instance.
10.  Click the "<span class="UI_element">access-url</span>" in `odoo-deploy` and you can access the odoo application from your browser
11.  You can easily increase the number of pods, view the logs and sh/bash into the container
12.  If you stop or terminate the application and redeploy you can see that the data is persisted

## Deploy and Scale your custom Stateful app

### Create your YAML files

1.  Create an `.argo` folder under your repository.
2.  Copy `odoo-with-rds.yaml` from [https://github.com/argoproj/odd-app](https://github.com/argoproj/odd-app) to your `.argo` folder. Customize it with your deployment and container specs.
3.  Create volumes using the [<span class="NewSetYAML template">YAML template</span>s](#/docs;doc=ex_add_volume_deployment.md) or the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
4.  (Optional) If you want the application to show up in your Catalog, .the file `odoo-project.yaml` specifies this. You can also run all your YAML-based workflows from the <span class="UI_element">Templates</span> menu in the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>

## Manually RUN your workflow

1.  Go to templates menu in Argo web UI
2.  Search by your app name
3.  Submit a new job

## Automatically TRIGGER your workflow

1.  To setup a policy to automatically trigger this workflow please review the steps for policy creation and YAML under CI-workflow tutorial
2.  In Argo web UI, go to Templates menu and search for that policy and click enabled
3.  For every commit on that repo, based on your policy your workflow will get triggered
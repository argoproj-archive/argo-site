# Tutorial 4: Deploy a Stateful App

This tutorial shows how to deploy and scale a Stateful containerized application (Odoo.com) using an EBS volume on AWS.

## Deploy and Scale Odoo App

1.  Go to https://github.com/argoproj/odd-app repository.
2.  Review the `odoo-with-vol.yaml` under `.argo` folder in that repo. It defines a workflow with two steps: "`deploy-postgres`" and "`deploy-odoo`". Each step is specified as a deployment. Each deployment specification internally maps to a Kubernetes deployment and service. For more details on the Argo YAML DSL you can check the YAML tutorial at <span style="color: #ff0000;"><help url></span>
3.  Because both deployments need to persist data, you need to first create two volumes . Go to Argo web UI-><span class="UI_element">infrastructure</span> > <span class="UI_element">Volumes</span> and create two EBS volumes called "`odoo`" and "`postgres`" of 1 GB each. You can do this automatically in YAML also as defined in YAML tutorial at [Adding a Volume as Storage for Deployment](#/docs;doc=ex_add_volume_deployment.md).
4.  Since your Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo, you can view the "<span class="UI_element">Odoo-App</span>" workflow in your <span class="GeneralApplatix Cluster Console">Argo Web UI</span> under Catalog menu item under <span class="UI_element">Demo</span> category.
5.  Select "Odoo App" catalog item and click <span class="UI_element">Deploy Odoo with volumes</span>. Keep the default input parameters. Make sure the volume input parameters are defined as above. Click <span class="UI_element">Submit</span>.
6.  You will see the workflow running in Argo web UI.
7.  Once the workflow completes, go to <span class="UI_element">Applications</span> tab. You'll see a new application named "odoo-with-vols" that has been deployed.
8.  You can see that the application has two deployments: "<span class="UI_element">odoo-deploy</span>" and "<span class="UI_element">postgres-deploy</span>" with each deployment running in its own pod.
9.  Click the "access-url" in `odoo-deploy` and you can access the odoo application from your browser
10.  From this view, you can easily increase the number of pods, view the logs and sh/bash into the container itself.
11.  If you start or stop the application, you can see that the data is persisted.

## Create and Deploy your custom stateful app

### Create your YAML files

1.  Create an `.argo` folder under your repository.
2.  Copy `odoo-with-vol.yaml` from [https://github.com/argoproj/odd-app](https://github.com/argoproj/odd-app) to your `.argo` folder. Customize it with your deployment and container specs.
3.  Create volumes through your <span class="GeneralYAML template">YAML template</span> through the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
4.  (Optional) If you want the application to show up in your Catalog, .the file `odoo-project.yaml` specifies this. You can also run all your YAML-based workflows from the Templates menu in the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.

### Manually RUN your workflow

1.  Go to templates menu in <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
2.  Search by your app name
3.  Submit a new job

### Automatically TRIGGER your workflow <span style="color: #ff0000;">[SAME]</span>

1.  To setup a policy to automatically trigger this workflow please review the steps for policy creation and YAML under CI-workflow tutorial
2.  In <span class="NewSetApplatix Cluster Console">Argo Web UI</span>, go to <span class="UI_element">Templates</span> menu and search for that policy and click <span class="UI_element">enabled</span>.
3.  For every commit on that repo, based on your policy your workflow will get triggered
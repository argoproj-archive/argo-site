# Tutorial 7: Deploy Microservices-based App

This tutorial shows how to deploy and scale a stateful microservices based application ("Sock shop") using a workflow. Sock shop is an open source e-commerce app with fourteen microservices. ([https://microservices-demo.github.io/](https://microservices-demo.github.io/)). Six of the services are stateful services that require a persistent volume. To persist the stateful services, this example uses an AWS EBS volume. This example also deploys Zipkin for tracing the application end-to-end.

## Deploy and Scale Example Sock Shop App

1.  From your AWS console, create an AWS RDS database instance of type PostgreSQL taking all default parameters. Make sure the database endpoint can be accessed from Argo.
2.  Go to [https://github.com/argoproj/omicroservices-demo](https://github.com/argoproj/omicroservices-demo) repository.
3.  Review the `sock-shop-workflow.yaml` under `.argo` folder in that repo. This file defines a workflow that has fourteen deployments for deploying sock shop and three deployments to deploy Zipkin. The Argo deployment specification internally maps to a Kubernetes deployment and service. For more details on the Argo YAML DSL you can check the YAML tutorial at <span style="color: #ff0000;"><help url??????></span>.
4.  Because the Sock shop deployment needs to persist the data, you must first create six EBS volumes. Go to Argo web UI-><span class="UI_element">Infrastructure</span>→<span class="UI_element">Volumes</span> and create six EBS volumes of 1 GB each. Name the volumes as `sock-shop-order-db`, `sock-shop-cart`, `sock-shop-cart-db`, `sock-shop-shipping`, `sock-shop-user-db`, and `sock-shop-order`. You can do this automatically in the YAML template. For an example, see [Adding a Volume as Storage for Deployment](#/docs;doc=ex_add_volume_deployment.md).
5.  Since your Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo, you can view The "Sock Shop App" workflow in your <span class="GeneralApplatix Cluster Console">Argo Web UI</span> at <span class="UI_element">Catalog</span> > <span class="UI_element">Demo</span>.
6.  From your <span class="UI_element">Catalog</span>, select "<span class="UI_element">Sock Shop App</span>" and click "<span class="UI_element">Deploy Sock Shop with RDS</span>", taking the default input parameters. Make sure the volume names are input parameter as defined above. Provide your RDS endpoint as the `DBHost` parameter. You do not have to provide the port `5432` for PostgreSQL. Click <span class="UI_element">Submit</span>.
7.  You will see the workflow running in <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
8.  Once the workflow completes you will see a "<span class="UI_element">odoo-rds-with-vols</span>" application deployed under <span class="UI_element">Applications</span> tab in <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.
9.  You can see it has one deployment "<span class="UI_element">sock-shop-deploy</span>" running one pod/instance.
10.  Click on the "access-url" in sock-shop-deploy and you can access the Sock shop application from your browser.
11.  You can easily increase the number of pods, view the logs and sh/bash into the container
12.  If you stop or terminate the application and redeploy you can see that the data is persisted

## Deploy and Scale your custom Stateful app

### Create your YAML files

1.  Create an .argo folder under your repository
2.  Copy `sock-shop-with-rds.yaml` from [https://github.com/argoproj/sock-shop-app](https://github.com/argoproj/odd-app) to your .argo folder. Customize it with your deployment and container specs
3.  Create volumes through YAML or using web UI
4.  odoo-project.yaml defines how it will show up in your Catalog menu. This is optional only if you want it to show up in your catalog. You can see and run all your yaml based workflows from Templates menu in Argo web UI.

### Manually RUN your workflow

1.  Go to templates menu in Argo web UI
2.  Search by your app name
3.  Submit a new job

### Automatically TRIGGER your workflow

1.  To setup a policy to automatically trigger this workflow please review the steps for policy creation and YAML under CI-workflow tutorial
2.  In Argo web UI, go to Templates menu and search for that policy and click enabled
3.  For every commit on that repo, based on your policy your workflow will get triggered
# Tutorial 7: Deploy Microservices-based App

This tutorial shows how to deploy and scale a stateful microservices based application ("Sock shop") using a workflow. Sock shop is an open source e-commerce app with fourteen microservices. ([https://microservices-demo.github.io/](https://microservices-demo.github.io/)). Six of the services are stateful services that require a persistent volume. To persist the stateful services, this example uses an AWS EBS volume. This example also deploys Zipkin for tracing the application end-to-end.

## Deploy and Scale Example Sock Shop App

1.  From your AWS console, create an AWS RDS database instance of type PostgreSQL taking all default parameters. Make sure the database endpoint can be accessed from Argo.
2.  Go to [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo) repository.
3.  Review the `sock-shop-workflow.yaml` under `.argo` folder in that repo. This file defines a workflow that has fourteen deployments for deploying sock shop and three deployments to deploy Zipkin. Argo deployment YAMLs internally maps to Kubernetes deployment and service YAMLs. For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](#/docs;doc=dsl_reference_intro.md).
4.  Because the Sock shop deployment needs to persist the data, you must first create six EBS volumes. Go to Argo web UI->Infrastructure→Volumes and create six EBS volumes of 1 GB each. Name the volumes as `sock-shop-order-db`, `sock-shop-cart`, `sock-shop-cart-db`, `sock-shop-shipping`, `sock-shop-user-db`, and `sock-shop-order`. You can do this automatically in the YAML template. For an example, see [Adding a Volume as Storage for Deployment](#/docs;doc=ex_add_volume_deployment.md).
5.  Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, go to Navigation Bar > Settings > Domain Management, make your changes, and click UPDATE DOMAINS.
6.  Since your Argo installation is automatically integrated with [https://github.com/argoproj](https://github.com/argoproj) repo, you can view The "Sock Shop App" workflow in your Argo Web UI at Catalog > Demo.
7.  From your Catalog, select "Sock Shop App" and click "Deploy Sock Shop with RDS", taking the default input parameters. Make sure the volume names are input parameter as defined above. Provide your RDS endpoint as the `DBHost` parameter. You do not have to provide the port `5432` for PostgreSQL. Click Submit.
8.  You will see the workflow running in Argo Web UI.
9.  Once the workflow completes you will see a "odoo-rds-with-vols" application deployed under Applications tab in Argo Web UI.
10.  You can see it has one deployment "sock-shop-deploy" running one pod/instance.
11.  Click on the "access-url" in sock-shop-deploy and you can access the Sock shop application from your browser.
12.  You can easily increase the number of pods, view the logs and sh/bash into the container.
13.  If you stop or terminate the application and redeploy you can see that the data is persisted.

## Deploy and Scale Your Custom Stateful App

### Create your YAML files

1.  Create an .argo folder under your repository
2.  Copy `sock-shop-with-rds.yaml` from [https://github.com/argoproj/sock-shop-app](https://github.com/argoproj/microservices-demo) to your .argo folder. Customize it with your deployment and container specs
3.  Create volumes through YAML or using the Argo Web UI.
4.  `odoo-project.yaml` defines how it will show up in your Catalog menu. This is optional only if you want it to show up in your catalog. You can see and run all your yaml based workflows from Templates menu in Argo web UI.

### Manually RUN your workflow

1.  Go to templates menu in Argo web UI.
2.  Search by your app name.
3.  Submit a new job.

### Automatically TRIGGER your workflow

1.  To setup a policy to automatically trigger this workflow, please review the steps for policy creation and the YAML file `example-policy.yaml` from [Tutorial 1: Create CI Workflow](#/docs;doc=argo_tutorial_1_create_ci_workflow.md).
2.  In Argo web UI, go to Templates menu and search for that policy and click Enabled.
3.  For every commit on that repo, based on your policy your workflow will get triggered.

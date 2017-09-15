# Tutorial 7: Deploy Microservices-based App

This tutorial shows how to deploy and scale a stateful, microservices-based application ("Sock shop") using an Argo workflow. Sock shop is an open source e-commerce app with fourteen microservices. ([https://microservices-demo.github.io/](https://microservices-demo.github.io/)). Six of the services are stateful services that require a persistent volume. To persist the stateful services, this example uses an AWS EBS volume. This example also deploys Zipkin for tracing the application end-to-end.

## Prerequisites

  This tutorial assumes the following:

  * You have successfully [installed Argo](https://argoproj.github.io/argo-site/get-started/installation).
  * You have integrated Argo with Appstore containing Sock shop microservices-based application [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo)
  * You have [created an AWS RDS database instance of type "PostgreSQL"](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html). Make sure you've taken all default parameters and that Argo can access the database endpoint.
  * (CLI only) You have logged into the Argo command line. To do this, go to your terminal, cd to the directory for the Argo install, and enter the following information at the command-line prompt:

    * ```$ ~/argo login```
    * Press enter for "Enter a configuration name (default):" (this takes the default value)
    * *your_Argo_cluster_URL* for "Enter cluster URL:"
    * *your_email_address* for "Enter cluster username:"
    * *your_Argo_cluster_password* for "Enter cluster password:"
  <!--Config written to: /Users/<your_name>/.argo/default-->


## About the YAML Files

The Sock shop workflow uses 3 YAML files from the ``.argo` directory of the repo at [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo):

3.  Review the `sock-shop-workflow.yaml` under `.argo` folder in that repo. This file defines a workflow that has fourteen deployments for deploying sock shop and three deployments to deploy Zipkin. Argo deployment YAMLs internally maps to Kubernetes deployment and service YAMLs. For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](./../yaml/dsl_reference_intro.md).

## Deploy and Scale Sample Sock Shop App

### From Argo CLI:

```~/argo job submit ??????????????? --argument "parameters.COMMIT=<commit_ID>" --argument "parameters.REPO=https://github.com/argoproj/example-dind.git"  --repo https://github.com/argoproj/example-dind.git```

Get the job ID of the running job:

```$ ~/argo job list```

Get the status of a job:

```$ ~/argo job show <job_ID>```

### From Argo Web UI

1. Because the Sock shop deployment needs to persist the data, you must first create six EBS volumes. Go to Argo web UI->Infrastructure→Volumes and create six EBS volumes of 1 GB each. Name the volumes as `sock-shop-order-db`, `sock-shop-cart`, `sock-shop-cart-db`, `sock-shop-shipping`, `sock-shop-user-db`, and `sock-shop-order`. You can do this automatically in the YAML template. For an example, see [Adding a Volume as Storage for Deployment](./../yaml/ex_add_volume_deployment.md).
2.  Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, go to Navigation Bar > Settings > Domain Management, make your changes, and click UPDATE DOMAINS.

3. From your Catalog, select "Sock Shop App" and click "Deploy Sock Shop with RDS", taking the default input parameters. Make sure the volume names are input parameter as defined above. Provide your RDS endpoint as the `DBHost` parameter. You do not have to provide the port `5432` for PostgreSQL. Click Submit.

You will see the workflow running in Argo Web UI.
![Deploy Microservices Workflow](./../../images/microservices_sock-shop_deployment.png)

Once the workflow completes you will see a "Sock-shop" application deployed under Applications tab in Argo Web UI.
You can see it has one deployment "sock-shop-deploy" running one pod/instance.
4. Click the "access-url" in sock-shop-deploy and you can access the Sock shop application from your browser.
12.  You can easily increase the number of pods, view the logs and sh/bash into the container.
13.  If you stop or terminate the application and redeploy you can see that the data is persisted.

To see the deployed app, click **ENDPOINTS** and select the URL for the Sock Shop Application.

## Deploy and Scale Your Custom Stateful App

### Create your YAML files

1.  Create an .argo folder under your repository
2.  Copy `sock-shop-with-rds.yaml` from [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo) to your .argo folder. Customize it with your deployment and container specs
3.  Create volumes through YAML or using the Argo Web UI.
4.  `microservices-project.yaml` defines how it will show up in your Catalog menu. This is optional only if you want it to show up in your catalog. You can see and run all your yaml based workflows from Templates menu in Argo web UI.
4.  Integrate your repo with Argo. In Argo Web UI, select **Administration->Integrations->SCM**. Once integrated, the Argo Web UI will display your source code commits in the **Timeline** menu item.

### Manually RUN your workflow

1.  Go to templates menu in Argo web UI.
2.  Search by your app name.
3.  Submit a new job.


* **Automatically**
   1. Add `commit` and `repo` as input parameters to your workflow as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).
   2. Create and activate a Policy template to trigger this workflow for every commit as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).

    After you've completed these steps, every time you make a commit in your repo, the deployment workflow is automatically triggered.   

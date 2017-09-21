# Tutorial 7: Deploy Microservices-based App

This tutorial shows how to deploy and scale a stateful, microservices-based application ("Sock shop") using an Argo workflow. Sock shop is an open source e-commerce app with fourteen microservices. ([https://microservices-demo.github.io/](https://microservices-demo.github.io/)). Six of the services are stateful services that require a persistent volume. (The Sock shop deployment requires the persistence of the user-generated data and the app files to run.) This example uses an AWS EBS volume to persist the stateful services. This example also deploys Zipkin for tracing the application end-to-end.

## Prerequisites

  This tutorial assumes the following:

  * You have successfully [installed Argo](https://argoproj.github.io/argo-site/get-started/installation).
  * You have integrated Argo with Appstore containing Sock shop microservices-based application [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo)
  * You have [created an AWS RDS database instance of type "PostgreSQL"](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html). Make sure you've taken all default parameters and that Argo can access the database endpoint.
  * (CLI only) You have logged into the Argo command line. To do this, go to your terminal, cd to the directory for the Argo install, and enter the following information at the command-line prompt:
    * `$ argo login`
    * Press enter for "Enter a configuration name (default):" (this takes the default value)
    * *your_Argo_cluster_URL* for "Enter cluster URL:"
    * *your_email_address* for "Enter cluster username:"
    * *your_Argo_cluster_password* for "Enter cluster password:"
  <!--Config written to: /Users/<your_name>/.argo/default-->



## About the YAML Files

The Sock shop workflow uses 1 top-level YAML files from the ``.argo` directory of the repo at [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo):

* `sock-shop-workflow.yaml` - This file defines a workflow that has fourteen deployment templates for deploying sock shop and three deployment templates to deploy Zipkin. These are YAML templates you'll run for the microservices-demo:ß
 - `carts-db` - deploys the mongoDB database that handles the shopping carts. (Uses named volume to store shopping cart data.)
 - `catalogue-db` - deploys MySQL database for the catalogue app.
 - `orders-db` - deploys mongoDB database for order information. (Uses named volume to store data for orders.)
 - `queue-master` - deploys this service that reads data from the shipping queue. Specifies Zipkin for tracing.
 - `rabbitmq` - deploys this message broker app.
 - `session-db` - deploys Redis message broker for tracking session information.
 - `user-db` - deploys database for tracking users.
 - `user` - deploys user app running in Zipkin environment.
 - `carts` - deploys this Java app for shopping carts, running in Zipkin environment. (Uses named volume to store app server files.)
 - `catalogue` - deploys the catalogue app running in Zipkin environment.
 - `orders` - deploys Java app for handling orders, running in Zipkin environment. (Uses named volume to store app server files.)
 - `payment` - deploys payment app, running in Zipkin environment.
 - `shipping` - deploys Java app for handling shipping, running in Zipkin environment. (Uses named volume to store app server files.)
 - `front-end` - deploys the front-end for the Sock shop application.
 - `zipkin-mysql` - deploys MySQL database for Zipkin app.
 - `zipkin` - deploys Zipkin app.
 - `zipkin-cron` - deploys Zipkin to run as a cron job.

Argo deployment YAML files internally map to Kubernetes deployment and service YAML files.

For more details on the Argo YAML DSL, see [Argo YAML DSL Reference](./../yaml/dsl_reference_intro.md).

## Deploy and Scale Sample Sock Shop App

IMPORTANT: Before you deploy the microservices-based app, you must create six "named" volumes for the following services: `carts-db`, `carts`, `orders-db`, `orders`, `shipping`, and `user-db`.
You can create these volumes in the Argo Web UI or in the YAML template files.

Using the Argo Web UI, go to **Infrastructure** > **Volumes** and create six EBS volumes of 1 GB each. Name the volumes as follows:
 - `sock-shop-order-db`
 - `sock-shop-cart`
 - `sock-shop-cart-db`
 - `sock-shop-shipping`
 - `sock-shop-user-db`
 - `sock-shop-order`

Using YAML files, you'll declare the "named" volumes in the respective deployment templates. You'll use the same names for the volumes as listed above for the Argo Web UI. To see an example of the named volumes, look at the `sock-shop-workflow.yaml` file in the **.argo** directory of [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo). For details, see [Adding a Volume as Storage for Deployment](./../yaml/ex_add_volume_deployment.md).

### From Argo CLI:

```

$ argo job submit sock-shop-workflow --argument "parameters.APP_NAME=sock-shop" --argument "parameters.CART_DB_VOL_NAME=sock-shop-cart-db" --argument "parameters.CART_VOL_NAME=sock-shop-cart" --argument "parameters.ORDERS_DB_VOL_NAME=sock-shop-order-db" --argument "parameters.ORDERS_VOL_NAME=sock-shop-order" --argument "parameters.SHIPPING_VOL_NAME=sock-shop-shipping" --argument "parameters.USER_DB_VOL_NAME=sock-shop-user-db" --repo https://github.com/argoproj/microservices-demo.git


```

Get the job ID of the running job:


```

$ argo job list


```

Get the status of a job:

```

$ argo job show <job_ID>


```


### From Argo Web UI

1.  Configure the domains for deployment. This allows you to control which applications can access a deployment. From the Argo Web UI, go to Navigation Bar > **Settings** > **Domain Management**, make your changes, and click **UPDATE DOMAINS**.

2. From **Catalog**, select **Sock Shop App** and click **Deploy Sock Shop with RDS**, taking the default input parameters. Make sure the volume names are entered as the input parameters defined above. For the `DBHost` parameter, enter the value for your AWS RDS endpoint. You do not have to provide port `5432` for PostgreSQL. Click **Submit**.

 You will see the workflow running in Argo Web UI.

 ![Deploy Microservices Workflow](./../../images/microservices_sock-shop_deployment.png)

 Once the workflow completes, click **Applications** and you'll see a "Sock-shop" application displayed.
You can see it has one deployment named `sock-shop-deploy`, which runs one pod per instance.
4. Click the "access-url" in `sock-shop-deploy` and you can access the Sock shop application from your browser.
You can easily increase the number of pods, view the logs and sh/bash into the container.
If you stop or terminate the application and redeploy you can see that the data is persisted.

 To see the deployed app, click **ENDPOINTS** and select the URL for the Sock Shop Application.

## Deploy and Scale Your Custom Stateful App

### Create your YAML files

1.  Create an .argo folder under your repository.
2.  Copy `sock-shop-with-rds.yaml` from [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo) to your repo's `.argo` folder. Customize it with your deployment and container specs
3.  Create volumes through YAML or using the Argo Web UI.
4.  (Optional) If you want Sock shop to show up in your Catalog, copy the `microservices-project.yaml` from [https://github.com/argoproj/microservices-demo](https://github.com/argoproj/microservices-demo) to your repo's `.argo` folder. This YAML file defines how the app shows up in your Catalog menu. You can see and run all your YAML-based workflows from **Templates** menu in the Argo Web UI.
4.  Integrate your repo with Argo. In Argo Web UI, select **Administration** > **Integrations** > **SCM**. Once integrated, the Argo Web UI displays your source code commits in the **Timeline** menu item.

## Running Your Customized Selenium Test Workflow

You have two options for running your selenium workflow:

 * **Manually**

	1. Go to **Templates** menu, search for your app name, click **+**.
	1. Review the values for the input parameters and click **Submit**.  You can also run all your YAML templates from the **Templates** menu.

    (Optional) If you want to let users run the project from the **Catalog** menu, just copy the `microservices-project.yaml` file into the `.argo` directory of your repo and modify it.

 * **Automatically**
  	2. Create and activate a Policy template to trigger this workflow for every commit as shown in [Tutorial 1](./argo_tutorial_1_create_ci_workflow.md).

     After you've completed these steps, every time you make a commit in your repo, the Selenium test workflow is automatically triggered.

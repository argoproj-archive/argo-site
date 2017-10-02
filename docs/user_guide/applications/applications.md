# Building and Deploying Applications

Besides building code and running workflows, the real power of the Argo lies in building a containerized application and deploying it as a set of long-running microservices.

Before jumping into how applications and deployments work, let's define what they mean:

*   For the Argo platform, an **application** is composed of a single service, a microservice or a group of microservices. Each microservice in an application represents a deployment.
*   A **deployment** represents a microservice that is backed by a Docker container. For scalability purposes, a deployment may consist of multiple instances of a container.
*   A major difference between these two entities is that applications generally have a longer lifetime than an instance of a deployment. In this context, an application represents the necessary resources to provide a service while a deployment represents the implementation of that service.

To illustrate these concepts, the following diagram shows an application consisting of

*   Two deployments: a web server deployment and a database deployment.
*   The web server deployment has 2 instances running
*   The database server deployment has 1 instance running

 ![](../../../images/applications_deployments_volume_diagram_argo2.png)


You can view all applications that are available for deployment and their statuses on Argo:

*   Go to **Navigation bar** > **Applications**.

    This view displays the status of the application, whether it is running, stopped, terminated, or has generated an error.

    This view also displays information about the last time the application was deployed or restarted.

*   Click the name of the application to view details about the application (such as the number of deployments for an app, the number of instances for a deployment that are running).
*   Click ![](../../../images/3_vertical_dots_25x26_GREEN.png) on the name of the app and select **View Spending** to see the current cost of running the application for a specific time period.

In some cases, you may want to deploy and manage long-running services that are independent of a specific workflow. To identify each deployment, you assign it a name in the deployment type of YAML template. For configuration details, see [Deployment Template](./../../yaml/deployment_template.md).

# Monitoring and Scaling Deployments

*   To monitor the deployment of an app, click **APPLICATIONS**, click the name of the app you want to monitor, and then click the name of the deployment that is attached to the app.

 This view shows whether a deployment is active or not, how many instances of the deployment are running, the spending details for the deployment. From this view, you can also start, stop, and scale the number of instances for your deployments easily.

 From this view, you can also see the configured internal and external routes for a deployment template under the **END POINTS** section.

 * **EXTERNAL ROUTES** allow a deployment to be accessed outside of the Argo.

 * **INTERNAL ROUTES** allow a deployment to be accessed by other deployments and jobs running within the same Argo. Internal routes are typically used to allow multiple microservices that are a part of the same application to communicate with each other. For example, suppose that you had an application that consists of a web app front end and a database backend. The network connection between these two deployments can be an internal route.

  If you want to change the value of the routes, edit the YAML file for your deployment template. For details, see [Deployment Template](./../../yaml/deployment_template.md).

*   To scale the number of instances for a deployment, click the "plus" or "minus" sign under **INSTANCES** or enter a new number. Click **CONFIRM** to accept the change. Or click **CANCEL** to back out of the change.

To access the logs or console for an instance, click ![](../../../images/3_vertical_dots_25x26_GREEN.png) for the instance, and select:

*   **LOGS** to view the logs for the instance.
*   **CONSOLE** to access the instance and enter custom commands for managing the instance. Click **EXECUTE** to perform the commands.


# Rolling Updates for a Deployed Application

To avoid downtime of a running application, Argo allows you to update or rollback your application one pod at a time. To use this feature, you'll need to perform two tasks:

*   Configure your deployment YAML template to add a new section named "`strategy`" and two fields (`max_surge` and `max_unavailable`).

*   Use the Argo Web UI to initiate the rolling update on a specified deployment.

## Configuring a Deployment Template for a Rolling Update

In the Deployment YAML template, you'll need to add the following configuration information:

*   A new section named "`strategy`" with the keys "`type`" and "`rolling_update`".
*   Two new fields to control the rate of rolling updates:
    *   `max_surge` – maximum number of additional pods to create during a rolling update.
    *   `max_unavailable` – maximum number of pods that can be unavailable during a rolling update.

For example, if you want to take down a pod first and then bring up a new pod, then you would set `max_surge=0` and `max_unavailable=1`. This configuration means no additional pods are added during the upgrade and there will be one pod unavailable during the upgrade.

However, if you want to create a new pod first before you tear down the old pod, then you could set `max_surge=1` and `max_unavailable=0`. This configuration means one new pod is added during the upgrade and before the old pod is torn down--there is only one pod that is unavailable during the upgrade.

NOTE: A configuration setting of `max_surge=0` and `max_unavailable=0` is not allowed. In other words, you cannot have a update state where no additional pods can be added and no pods can be unavailable—in this state, Argo cannot execute a rolling update. If you do not specify any value for these fields, Argo sets these fields to their defaults (`max_surge =1` and `max_unavailable =1`).

Here's an example of a YAML template for a rolling update:

```
---
type: deployment
name: smtp-server
application:
  name: "email"
deployment:
  name: "email-server"
scale:
  min: 3
strategy:
# Specify the rolling update
  type: rolling_update
  rolling_update:
    max_unavailable: 0
    max_surge: 1
external_routes:
- name: "email-server"
  dns_prefix: "%%dns_prefix%%"
  dns_domain: "%%dns_domain%%"
  target_port: 80
  redirect_http_to_https: true
  ip_white_list:
  - 0.0.0.0/0
containers:
- email:
    template: email-server-container
inputs:
  parameters:
    version:
    dns_prefix:
    dns_domain:
```

## Performing a Rolling Update

1.  Go to **Applications** and click the application you want to perform a rolling update. (You'll see the view of the app with its deployments and instances of those deployments.)

2.  Choose one of these options:

    1. To perform a rolling update to the **latest commit** of your application, click ![](../../../images/clear_3_dots_23x23.png) for the deployment you want and click **Redeploy**.
    2. To perform a rolling update to roll back to a **specific revision** of your application, click the icon for the specific deployment. (You'll see the deployment details pane.)
     Under **RECENT REVISION**, click ![](../../../images/clear_3_dots_23x23.png) for the revision you want and select **Redeploy**.
3.  Enter the input parameters that your workflow requires and click **Submit** to launch the rolling update.

    The job (aka workflow) launches to perform the rolling update to either the most recent commit or a recent revision of a deployment.

The rolling update executes and has a status of "SUCCESS" when it completed successfully.

## Viewing the Logs for a Deployment

There are two ways you can view or download the logs for a deployment:

*   For a current deployment, click an instance for the deployment and select **Logs**.
*   For a past deployment, click a deployment and select **VIEW REVISION HISTORY**. Click the revision you want and click **ARTIFACTS** to select the logs you want to view before clicking the download icon.

## Conditions for Performing Rolling Updates

There are restrictions on when you can perform a rolling update:

*   You cannot change external routes while performing a rolling update.
*   You cannot do a rolling update if a volume is attached to a deployment.
*   You cannot do a rolling update to change the types of fixtures that are used.

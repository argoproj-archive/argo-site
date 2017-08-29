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

![](../docs/images/applications_deployments_volume_diagram_argo.png)

![](../docs/images/applications_deployments_volume_diagram_1000x615.png)

From the Applications tab, you can view all applications that are available for deployment on your Argo.

Here's how you view the status of an active application:

*   Go to Applications.

    This view displays the status of the application, whether it is running, stopped, terminated, or has generated an error.

    This view also displays information about the last time the application was deployed or restarted.

*   Click the name of the application to view details about the application.
*   Click SPENDING to view how much has been spent running the application for a specific time period.

In some cases, you may want to deploy and manage long-running services that are independent of a specific workflow. To identify each deployment, you assign it a name in the deployment type of YAML template. For configuration details, see [Creating a Deployment as a Long Running Service](#/docs;doc=%2F..%2Fyaml%2Fex_create_deploy_long_run_service_coretemplate_notused.md).

# Monitoring and Scaling Deployments

*   From APPLICATIONS view, click **DEPLOYMENTS** to view whether a deployment is active or not and how many instances of a deployment are running.
*   From DEPLOYMENTS, you can start, stop, and scale your deployments easily. You can also terminate or stop an instance from the dropdown menu.

*   Click the name of the deployment to get a summary of details, including the spending details for the deployment.
*   To scale the number of instances for a deployment, click **EDIT SCALE** and select a new number. Click **CONFIRM** to accept the change. Or click **CANCEL** to back out of the change.

While viewing the deployment details, click Instances to see the unique identifier for each instance of the deployment and whether the instance is still running or is terminated. For each instance displayed, you can

*   Click **LOGS** to view the logs for the instance.
*   Click **CONSOLE** to access the instance and enter custom commands for managing the instance. Click **EXECUTE** to perform the commands.

From the Endpoints view, you can also see the internal and external routes for a deployment template.

**EXTERNAL ROUTES** allow a deployment to be accessed outside of the Argo.

**INTERNAL ROUTES** allow a deployment to be accessed by other deployments and jobs running within the same Argo. Internal routes are typically used to allow multiple microservices that are a part of the same application to communicate with each other. For example, suppose that you had an application that consists of a web app front end and a database backend. The network connection between these two deployments can be an internal route.

For details about configuring the routes, see [Creating a Deployment as a Long Running Service](#/docs;doc=%2F..%2Fyaml%2Fex_create_deploy_long_run_service_coretemplate_notused.md).

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

1.  Go to Applications and click an individual application.

2.  Choose one of these options:

    1.  To perform a rolling update to the **latest commit** of your application, click ![](../docs/images/clear_3_dots_23x23.png) for the deployment you want and click Redeploy.
    2.  To perform a rolling update to roll back to a **specific revision** of your application, click the specific deployment. Then click ![](../docs/images/clear_3_dots_23x23.png) for the revision you want and select Rollback.
3.  Enter the input parameters that your workflow requires and click Submit to launch the rolling update.

    The job (aka workflow) is launched to perform the rolling update to either the most recent commit or a past deployment.

The rolling update executes and has a status of SUCCESS when completed successfully.

## Viewing the Logs for a Deployment

There are two ways you can view the logs for a deployment:

*   For a current deployment, click an instance for the deployment and select Logs.
*   For a past deployment, click a deployment and select a revision or View Revision History. Click Artifacts and select the logs you want to view before clicking the download icon.

## Conditions for Performing Rolling Updates

There are restrictions on when you can perform a rolling update:

*   -You cannot change external routes while performing a rolling update
*   -You cannot do a rolling update if a volume is attached to a deployment
*   -You cannot do a rolling update to change the types of fixtures that are used

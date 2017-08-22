# Building and Deploying Applications

Besides building code and running workflows, the real power of the <span class="GeneralApplatix Platform Name">Argo</span> lies in building a containerized application and deploying it as a set of long-running microservices.

Look at these links for details about how the <span class="GeneralApplatix Cluster Console">Argo Web UI</span> lets you

*   [View the available applications on your <span class="GeneralKubernetes Cluster with Argo">Argo</span>](#)
*   [View the number of deployments that an application is running](#/docs;doc=deployments_notused.md)
*   [Stop or terminate a running container in your application](#/docs;doc=deployments_notused.md).
*   [Start, stop or scale the number of deployments](#/docs;doc=deployments_notused.md)
*   <madcap:conditionaltext data-mc-conditions="General.Not for Print">[Creating a Deployment as a Long Running Service](#/docs;doc=%2F..%2Fyaml%2Fex_create_deploy_long_run_service_coretemplate_notused.md)</madcap:conditionaltext>

# What are Applications and Deployments?

Before jumping into how applications and deployments work, let's spell out what they mean:

*   For the <span class="GeneralApplatix Platform Name">Argo</span> platform, an **application** is composed of a single service, a microservice or a group of microservices. Each microservice in an application represents a deployment.
*   A **deployment** represents a microservice that is backed by a Docker container. For scalability purposes, a deployment may consist of multiple instances of a container.
*   A major difference between these two entities is that applications generally have a longer lifetime than an instance of a deployment. In this context, an application represents the necessary resources to provide a service while a deployment represents the implementation of that service.

To illustrate these concepts, the following diagram shows an application consisting of

*   Two deployments: a web server deployment and a database deployment.
*   The web server deployment has 2 instances running
*   The database server deployment has 1 instance running

![](../docs/images/applications_deployments_volume_diagram_1000x615.png)

From the <span class="UI_element">Applications</span> tab, you can view all applications that are available for deployment on your <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

Here's how you view the status of an active application:

*   Go to <span class="UI_element">Applications</span>.

    This view displays the status of the application, whether it is running, stopped, terminated, or has generated an error.

    This view also displays information about the last time the application was deployed or restarted.

*   Click the name of the application to view details about the application.
*   Click <span class="UI_element">SPENDING</span> to view how much has been spent running the application for a specific time period.

In some cases, you may want to deploy and manage long-running services that are independent of a specific workflow. To identify each deployment, you assign it a name in the deployment type of <span class="GeneralYAML template">YAML template</span>. For configuration details, see <madcap:conditionaltext data-mc-conditions="General.Not for Print">[Creating a Deployment as a Long Running Service](#/docs;doc=%2F..%2Fyaml%2Fex_create_deploy_long_run_service_coretemplate_notused.md)</madcap:conditionaltext>.

# Monitoring and Scaling Deployments

*   From <span class="UI_element">APPLICATIONS</span> view, click **DEPLOYMENTS** to view whether a deployment is active or not and how many instances of a deployment are running.
*   From <span class="UI_element">DEPLOYMENTS</span>, you can start, stop, and scale your deployments easily. You can also terminate or stop an instance from the dropdown menu.

*   Click the name of the deployment to get a summary of details, including the spending details for the deployment.
*   To scale the number of instances for a deployment, click **EDIT SCALE** and select a new number. Click **CONFIRM** to accept the change. Or click **CANCEL** to back out of the change.

While viewing the deployment details, click <span class="UI_element">Instances</span> to see the unique identifier for each instance of the deployment and whether the instance is still running or is terminated. For each instance displayed, you can

*   Click **LOGS** to view the logs for the instance.
*   Click **CONSOLE** to access the instance and enter custom commands for managing the instance. Click **EXECUTE** to perform the commands.

From the <span class="UI_element">Endpoints</span> view, you can also see the internal and external routes for a deployment template.

**EXTERNAL ROUTES** allow a deployment to be accessed outside of the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

**INTERNAL ROUTES** allow a deployment to be accessed by other deployments and jobs running within the same <span class="GeneralKubernetes Cluster with Argo">Argo</span>. Internal routes are typically used to allow multiple microservices that are a part of the same application to communicate with each other. For example, suppose that you had an application that consists of a web app front end and a database backend. The network connection between these two deployments can be an internal route.

For details about configuring the routes, see <madcap:conditionaltext data-mc-conditions="General.Not for Print">[Creating a Deployment as a Long Running Service](#/docs;doc=%2F..%2Fyaml%2Fex_create_deploy_long_run_service_coretemplate_notused.md)</madcap:conditionaltext>.
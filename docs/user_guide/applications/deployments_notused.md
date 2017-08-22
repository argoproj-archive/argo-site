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
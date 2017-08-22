# Rolling Updates for a Deployed Application

To avoid downtime of a running application, <span class="GeneralApplatix Platform Name">Argo</span> allows you to update or rollback your application one pod at a time. To use this feature, you'll need to perform two tasks:

*   Configure your deployment <span class="GeneralYAML template">YAML template</span> to add a new section named "`strategy`" and two fields (`max_surge` and `max_unavailable`).

*   Use the <span class="GeneralApplatix Cluster Console">Argo Web UI</span> to initiate the rolling update on a specified deployment.

## Configuring a Deployment Template for a Rolling Update

In the Deployment <span class="GeneralYAML template">YAML template</span>, you'll need to add the following configuration information:

*   A new section named "`strategy`" with the keys "`type`" and "`rolling_update`".
*   Two new fields to control the rate of rolling updates:
    *   `max_surge` – maximum number of additional pods to create during a rolling update.
    *   `max_unavailable` – maximum number of pods that can be unavailable during a rolling update.

For example, if you want to take down a pod first and then bring up a new pod, then you would set `max_surge=0` and `max_unavailable=1`. This configuration means no additional pods are added during the upgrade and there will be one pod unavailable during the upgrade.

However, if you want to create a new pod first before you tear down the old pod, then you could set `max_surge=1` and `max_unavailable=0`. This configuration means one new pod is added during the upgrade and before the old pod is torn down--there is only one pod that is unavailable during the upgrade.

NOTE: A configuration setting of `max_surge=0` and `max_unavailable=0` is not allowed. In other words, you cannot have a update state where no additional pods can be added and no pods can be unavailable—in this state, <span class="GeneralApplatix Platform Name">Argo</span> cannot execute a rolling update. If you do not specify any value for these fields, <span class="GeneralApplatix Platform Name">Argo</span> sets these fields to their defaults (`max_surge =1` and `max_unavailable =1`).

Here's an example of a <span class="GeneralYAML template">YAML template</span> for a rolling update:

<pre xml:space="preserve" xmlns="">---
type: deployment
name: smtp-server
application:
  name: "email"
deployment:
  name: "email-server"
scale:
  min: 3
strategy:</pre>

<pre xml:space="preserve" xmlns=""># Specify the rolling update
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
    dns_domain:</pre>

## Performing a Rolling Update

1.  Go to <span class="UI_element">Applications</span> and click an individual application.

2.  Choose one of these options:

    1.  To perform a rolling update to the **latest commit** of your application, click ![](resources/images/clear_3_dots_23x23.png) for the deployment you want and click <span class="UI_element">Redeploy</span>.
    2.  To perform a rolling update to roll back to a **specific revision** of your application, click the specific deployment. Then click ![](resources/images/clear_3_dots_23x23.png) for the revision you want and select <span class="UI_element">Rollback</span>.
3.  Enter the input parameters that your workflow requires and click <span class="UI_element">Submit</span> to launch the rolling update.

    The job (aka workflow) is launched to perform the rolling update to either the most recent commit or a past deployment.

The rolling update executes and has a status of SUCCESS when completed successfully.

## Viewing the Logs for a Deployment

There are two ways you can view the logs for a deployment:

*   For a current deployment, click an instance for the deployment and select <span class="UI_element">Logs</span>.
*   For a past deployment, click a deployment and select a revision or <span class="UI_element">View Revision History</span>. Click <span class="UI_element">Artifacts</span> and select the logs you want to view before clicking the download icon.

## Conditions for Performing Rolling Updates

There are restrictions on when you can perform a rolling update:

*   -You cannot change external routes while performing a rolling update
*   -You cannot do a rolling update if a volume is attached to a deployment
*   -You cannot do a rolling update to change the types of fixtures that are used
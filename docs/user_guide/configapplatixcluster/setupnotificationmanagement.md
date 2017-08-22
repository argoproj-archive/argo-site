# Setting Up Notification Management

The <span class="GeneralApplatix Platform Name">Argo</span> sends notification messages with severity levels about events that occur within the Applatix system. These messages help you monitor and troubleshoot issues that arise while using the system. Notification messages can also be triggered as a result of automated job policies that you enable.

Administrators can configure the notification rules as to who receives certain types of notifications.

## Event Messages

<table style="width: 100%;" xmlns=""><colgroup><col style="width: 239px;"> <col></colgroup>

<tbody>

<tr>

<td>Type of Message</td>

<td>Description</td>

</tr>

<tr>

<td>System</td>

<td>Includes event messages from the core Applatix system.</td>

</tr>

<tr>

<td>Configuration</td>

<td>Messages related to the configuriation of the Applatix system (such as SCM connections, Container registries, Artifact repositories, User permissions, Single Sign-On, Alerts, Artifact Retention Policy, and DNS domains.</td>

</tr>

<tr>

<td>Job</td>

<td>Messages related to running a job</td>

</tr>

<tr>

<td>Deployment</td>

<td>Messages related to deploying long-running applications.</td>

</tr>

<tr>

<td>Spending</td>

<td>Messages related to spending and cost management.</td>

</tr>

</tbody>

</table>

## Severity Levels

<table style="width: 100%;" xmlns=""><colgroup><col style="width: 239px;"> <col></colgroup>

<tbody>

<tr>

<td>Levels</td>

<td>Description</td>

</tr>

<tr>

<td>CRITICAL</td>

<td>System require immediate attention. The system may not be operational.</td>

</tr>

<tr>

<td>WARNING</td>

<td>System is operational, but requires attention to fix a problem or to avoid a more serious problem in the future.</td>

</tr>

<tr>

<td>INFO</td>

<td>Informational message. System is fully operational.</td>

</tr>

</tbody>

</table>

<div class="MCDropDown MCDropDown_Open dropDown" xmlns=""><span class="MCDropDownHead dropDownHead">[![Closed](../../../Skins/Default/Stylesheets/Images/transparent.gif)To configure a new notification rule for users:](javascript:void(0);)</span>

<div class="MCDropDownBody dropDownBody">

1.  Click Configurations > Notification Management.

2.  Click **+**.

3.  Enter a name for the Notification rule you want to create.
4.  (Optional) By default, the new rule is enabled after you create it. If you want to disable this rule, click **ENABLE RULE**. (It toggles back to **DISABLE RULE**.)
5.  Select any type of event messages you want the recipients to receive. Click **APPLY**.
6.  Select any severity level of event messages you want the recipients to receive. Click **APPLY**.

7.  Click **NEXT** to accept your selections.

8.  Click **+ADD USERS**. (This adds users from your internal organization directory)

    This dialog lists the valid internal users that can be added.

    It also lists the current users who have administrative or developer access privileges to the Cluster.

9.  Select the Applatix users you want and click **ADD**.
10.  (Optional) To add recipients who are not Applatix users, enter their email addresses under **Email Users and Groups**.
11.  (Optional) If you want to send out Notifications through Slack, enter the name of the Slack channels that you want the notifications to be sent.
12.  Click **SUBMIT** if you are satisfied with your notification settings.

To modify a notification rule, click ![](../docs/images/pencil_4_editing.png)for the rule you want to modify.

</div>

</div>

## <a name="UsingPolicies2TriggerNotificationMessage"></a>Using Policies to Trigger a Notification Message

You can enable a policy to automatically run workflows. When you create a policy, you can configure a notification rule to send out an event message when a job succeeds or fails. From the **Configurations** > **System Settings** > **Notification Management** screen, you can view the policies with notification rules.

Just click the name of the policy to see the specific policy details, including **NOTIFICATION** details.

For instructions on how to define a policy, see [Automating Workflows Using Policies](#/docs;doc=%2F..%2Fyaml%2Fex_create_policy_4_workflow.md).

Additionally, you can also write a policy that alerts users as to when certain events happen on the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

Look at these links to learn how to:

*   [Create a policy that triggers a workflow or event notification](#/docs;doc=%2F..%2Fyaml%2Fex_create_policy_4_workflow.md)
*   [View details about who gets notified when a policy is enabled](#).
*   [View a policy for event notification.](#UsingPolicies2TriggerNotificationMessage)
*   [Setting Up Notification Management](#)
*   [Configure which message type and the severity level of the message that a user receives](#)
*   [Configure a notification system to send event messages from the <span class="GeneralApplatix System">Argo</span>](#/docs;doc=setupalertnotificationnotused.md)

# Configure Systems for Sending Notification Messages

Choose the system for sending out notification messages to your users:

*   SMTP - Enter the configuration information for your server.
*   Slack - To enable Slack with Applatix, you must configure both systems to communicate with each other.

## SMTP

1.  Click **Configurations** > **Notifications > Setting Up Alert Notifications**.

    ![](../docs/images/configurations_setup_alert_notification_1stview_1249x504.png)

2.  Click **SMTP** and **+**.

    ![](../docs/images/configurations_setup_alert_notification_configdialog_1255x815.png)

3.  Enter information for the following fields:
    *   NICKNAME for server
    *   HOST NAME for server (such as email-smtp.us-west-2.amazonaws.com for an SMTP server)
    *   ADMIN ADDRESS (such as admin@company.com)
    *   PORT (Default for SMTP is 587)
    *   TIMEOUT (in seconds)
4.  (Optional) Check **TLS** (Transport Layer Security) to encrypt all email and to use a secure connection.
5.  (Optional) Check **USE AUTH** if the server requires authentication. If checked, you are required to enter a username and password.
6.  (Optional) Click **TEST** to test the connection to the server (highly recommended).
7.  Click **CONNECT**.

To disconnect an existing server, click the name of the server and click **DISCONNECT**.

## Slack

NOTE: Your Slack team administrator must perform these procedure to enable Slack to receive event notification messages from Applatix.

1.  Go to [https://api.slack.com/](https://api.slack.com/).

    ![](../docs/images/1_start_1099x317.png)

2.  Click **Start Building**.

    ![](../docs/images/2_create-app_920x410.png)

3.  Enter your app name and select your Development Slack Team.
4.  Click **Create App**.

    ![](../docs/images/3_features_562x573.png)

5.  Click **OAuth & Permissions**.
6.  Under Select Permission Scopes, select these 4 permissions:

    *   Channels - `channels:read`
    *   Chat - `chat:write:bot`
    *   Users - `users:read`
    *   Users - `users:read:email`

    ![](../docs/images/4_oauth-permissions_788x872.png)

7.  Click **Save Changes**.

    ![](../docs/images/5_install-app_815x501.png)

8.  Click **Install App to Team**.

    ![](../docs/images/6_authorize_761x733.png)

9.  Click **Authorize** to complete this process.

    ![](../docs/images/7_oauth-token_919x645.png)

10.  Copy the generated OAuth token (You use this token in the next step for configuring Applatix for Slack.
11.  (<span class="GeneralApplatix Cluster Console">Argo Web UI</span>) Go to Configurations > Setup Alert Notifications, and click Slack icon.

    ![](../docs/images/configuration_setup_alert_notifications_1stview.png)

12.  (<span class="GeneralApplatix Cluster Console">Argo Web UI</span>) Under ENTER OAUTH TOKEN, paste the OAuth token that Slack generated.

    ![](../docs/images/configurations_setup_alert_notification_config_slack.png)

13.  (Optional) Click **TEST** if you want to test the connection to the server before activating it.
14.  Click **CONNECT**.
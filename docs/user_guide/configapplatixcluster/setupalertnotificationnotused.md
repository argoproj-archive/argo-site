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
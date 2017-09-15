# Connect to Issue Tracking System

To make it easy to file issues against a job, application or deployment, Argo integrates with issue tracking systems such as JIRA so you can create issues from Argo. You can also set up webhooks for Argo so any updates to the already integrated JIRA issue are automatically forwarded to Argo. Here's the procedure to integrate with an issue tracking system:

1.  Click **Configurations** > **Connect Issue Tracking System**.

2.  Click the logo for your issue tracking system.
3.  Enter the URL for accessing your issue tracking system
4.  (Optional) Enter the host name of webhook server
5.  Enter Username for issue tracking system
6.  Enter Password or app password for issue tracking system
7.  Click **Test** to ping the connection.
8.  Under **Add Projects**, select the projects you want to add issues to.
9.  Click **Connect**.

10.  If satisfied with changes, click **DONE**.

After you configure your issue tracking system with Argo, your issue tracking system shows that the webhook is set up to notify Argo of any changes to an issue as this screenshot shows:

![](../../../images/issue_tracker_jira_admin_webhook_status_1030x436.png)

If you want to disconnect the issue tracking system, click **Disconnect**. When prompted, click **YES**.

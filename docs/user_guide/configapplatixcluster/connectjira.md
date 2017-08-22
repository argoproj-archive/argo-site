# Connect to Issue Tracking System

To make it easy to file issues against a job, application or deployment, <span class="GeneralApplatix Platform Name">Argo</span> integrates with issue tracking systems such as JIRA so you can create issues from <span class="GeneralApplatix Platform Name">Argo</span>. You can also set up webhooks for <span class="GeneralApplatix Platform Name">Argo</span> so any updates to the already integrated JIRA issue are automatically forwarded to <span class="GeneralApplatix Platform Name">Argo</span>. Here's the procedure to integrate with an issue tracking system:

1.  Click <span class="UI_element">Configurations</span>> <span class="UI_element">Connect Issue Tracking System</span>.

2.  Click the logo for your issue tracking system.
3.  Enter the URL for accessing your issue tracking system
4.  (Optional) Enter the host name of webhook server
5.  Enter <span class="UI_element">Username</span> for issue tracking system
6.  Enter <span class="UI_element">Password</span> or <span class="UI_element">app password</span> for issue tracking system
7.  Click <span class="UI_element">Test</span> to ping the connection.
8.  Under <span class="UI_element">Add Projects</span>, select the projects you want to add issues to.
9.  Click <span class="UI_element">Connect</span>.

10.  If satisfied with changes, click <span class="UI_element">DONE</span>.

After you configure your issue tracking system with <span class="GeneralApplatix Platform Name">Argo</span>, your issue tracking system shows that the webhook is set up to notify <span class="GeneralApplatix Platform Name">Argo</span> of any changes to an issue as this screenshot shows:

![](../docs/images/issue_tracker_jira_admin_webhook_status_1030x436.png)

If you want to disconnect the issue tracking system, click <span class="UI_element">Disconnect</span>. When prompted, click <span class="UI_element">YES</span>.
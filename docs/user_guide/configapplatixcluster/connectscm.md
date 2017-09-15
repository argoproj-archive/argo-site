# Connect Source Control to Argo

Out of the box, Argo supports the following source code management (SCM) systems:

*   BitBucket
*   GitHub
*   Git
*   CodeCommit

Here's how you connect Argo with an SCM system.

1.  Click **Configurations** > **Integrations** > **Connect Source Control Management System**.

2.  Click the SCM system you want to integrate.
3.  Click **+**.

4.  Enter Username and password and the URL for the SCM repo.
5.  (Bitbucket and GitHub only) Check **USE WEBHOOKS** to enable webhooks.

    NOTE: Using webhooks enables you to trigger workflows based on certain events such as push or pull requests. The webhooks also allow Argo to report job status back to Bitbucket and GitHub for display in their GUI.

6.  Click **CONNECT**.

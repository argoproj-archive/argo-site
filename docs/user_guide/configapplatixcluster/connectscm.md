# Connect Source Control to Argo

Out of the box, Argo supports the following source code management (SCM) systems:

* BitBucket
* GitHub
* Git
* CodeCommit
* GitLab

Here's how you connect Argo with an SCM system.

1.  Click **Navigation bar** >  **Administration** >  **Integrations** > **Source Control Management Systems**.
2.  Click the icon for the SCM system you want to integrate.
3.  Enter Username and password and the URL for the SCM repo.
<!--Waiting for response from Michael M. because Argo Web UI doesn't show CodeCommit supporting webhooks--only BitBucket and GitHub has this option from the SCM integration page-->
4.  (Bitbucket and GitHub only) Check **USE WEBHOOKS** to enable webhooks.
    NOTE: Using webhooks enables you to trigger workflows based on certain events such as push or pull requests. The webhooks also allow Argo to report job status back to Bitbucket and GitHub for display in their GUI.
6.  Click **CONNECT**.
7. Add the URLs for the repositories you want Argo to connect to.
8.  Click **DONE**.

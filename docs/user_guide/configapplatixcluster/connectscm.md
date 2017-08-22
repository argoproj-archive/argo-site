# Connect Source Control to <span class="GeneralApplatix Platform Name">Argo</span>

Out of the box, Applatix supports the following source code management (SCM) systems:

*   BitBucket
*   GitHub
*   Git
*   CodeCommit

Here's how you connect <span class="GeneralApplatix Platform Name">Argo</span> with an SCM system.

1.  Click <span class="UI_element">Configurations</span> > <span class="UI_element">Integrations</span> > <span class="UI_element">Connect Source Control Management System</span>.

2.  Click the SCM system you want to integrate with (Bitbucket, GitHub, Git, or CodeCommit).
3.  Click **+**.

4.  Enter Username and password for the repo.
5.  (CodeCommit only) Configure the following items:

    1.  Create a user for access to CodeCommit.
    2.  Create an access key for the user.
    3.  Enter the <span class="UI_element">AWS Access Key ID</span> and corresponding <span class="UI_element">AWS Secret Access Key</span>.
6.  Enter the URL for the SCM repo you want to connect under **ADD REPOSITORIES**. Or if you already have repos in your SCM system, you can select a repo from the dropdown menu that displays.
7.  (Bitbucket and GitHub only) Check **USE WEBHOOKS** to enable webhooks.

    NOTE: Using webhooks enables you to trigger workflows based on certain events such as push or pull requests. The webhooks also allow <span class="GeneralApplatix Platform Name">Argo</span> to report job status back to Bitbucket and GitHub for display in their GUI.

8.  Click **CONNECT**.

To update information for a repository, click![](../docs/images/pencil_4_editing.png)and make your changes. Click **DONE** to exit this dialog.

To disconnect a repository, click ![](../docs/images/pencil_4_editing.png)and click **DISCONNECT**.
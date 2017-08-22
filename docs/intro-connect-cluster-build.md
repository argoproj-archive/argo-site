# Configure <span class="GeneralKubernetes Cluster with Argo">Argo</span> to Build and Run Code

Before you can run code on <span class="GeneralKubernetes Cluster with Argo">Argo</span> as a workflow or deployed application, you must connect <span class="GeneralApplatix Platform Name">Argo</span> to

*   A source code repository (which contains the code for your <span class="GeneralYAML template">YAML template</span>s and applications)
*   A public Docker registry (which stores the container images you'll run as workflows)

## Connect <span class="GeneralApplatix Platform Name">Argo</span> to Source Control

Out of the box, <span class="GeneralApplatix Platform Name">Argo</span> supports the following source code management (SCM) systems:

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

To update information for a repository, click![](resources/images/pencil_4_editing.png)and make your changes. Click **DONE** to exit this dialog.

To disconnect a repository, click ![](resources/images/pencil_4_editing.png)and click **DISCONNECT**.

## Connect Docker Hub or Your Private Docker Registry to <span class="GeneralApplatix Platform Name">Argo</span>

After connecting to your source control management system, you'll also connect <span class="GeneralApplatix Platform Name">Argo</span> to your public Docker registries (such as DockerHub or your own private Docker registry). Here's the procedure:

1.  Click <span class="UI_element">Configurations</span> > <span class="UI_element">Connect Docker Hub or Your Registry</span>.

2.  Select the container registry (Docker Hub or Private Registry) where the images reside.
3.  Enter your username and password (or personal access token)
4.  4. Enter hostname for private registry.

5.  (Optional) Click **TEST** to check the connection before you integrate Applatix to the registry.
6.  Click **CONNECT**.

To disconnect a registry, click ![](resources/images/pencil_4_editing.png)and click **DISCONNECT**.

## Next Step:

Now that you've connected <span class="GeneralApplatix Platform Name">Argo</span> to your source code repo and the container registry for your images, the next step is to work through the <span class="GeneralApplatix Platform Name">Argo</span> [Tutorials](#/docs;doc=yaml%2Fusing_the_yaml_dsl.md). In the process, you'll learn how to build and run containerized CI/CD workflows, stateful and stateless apps on <span class="GeneralApplatix Platform Name">Argo</span>.
# Using Catalog to Run Workflows and Applications

Argo provides a Catalog of pre-configured workflows and applications. You can run them "as is" or use them as "building blocks" to create more complex workflows and apps.

From Catalog, you can directly create and execute jobs for :

*   Workflows (such as Continuous Integration, testing automation, or Continuous Deployment) – These are the building blocks for creating higher-order workflows that perform jobs. You can also run the individually as a workflow. For details about creating a workflow, see [Creating a Workflow](../../yaml/workflow_templates.md).

*   Applications (such as WordPress, Claudia) – These are full-fledged applications that can be used with no additional configuration.
*   Application Components (such as MySQL and PostgreSQL) – These items can be integrated with other applications and other components to create a more complex application.

Here's the procedure for running a workflow or application from Catalog:

NOTE: This procedure also includes an extra step for an approval workflow that requires a response from the intended recipient. You'll run a workflow using the Argo Catalog, which is a visual interface for launching workflows and apps. Here are the steps for using Catalog to run a workflow that uses email approval:

1.  Click **Catalog**.

2.  For the workflows on the **top** row, click the workflow or app you want to execute.
3.  For the workflows on the **bottom** row, click the category name and then click the workflow or app you want to execute.
4.  Click the green button and choose RUN, TEST, or BUILD. (NOTE: The options vary by workflow and application.)

5.  Check the values for the workflow parameters to ensure the inputs are correct.
6.  (Optional) Click TEMPLATE to see a visual representation of the workflow steps and the source YAML code for the workflow.

7.  Click **SUBMIT** to execute the job.

    The Console displays "Successfully created a job for a Commit".

8.  (Optional) Depending on the workflow, you may be asked to perform a step to complete the workflow (such as an email approval)

    When a job successfully completes, the Workflow screen displays a green circle for the last container that was run:

    The Argo also notifies you that the Job was successful:

## Customizing the Workflows

All workflows in the Catalog can be modified. To obtain the code in the YAML templates, go to the [Argo App Store repo](https://github.com/argoproj/appstore) on GitHub.

Under the `.argo` directory, clone the YAML templates to create your custom workflows and applications. Make sure the cloned YAML templates are located in the `.argo` directory of your repo — that is where Argo looks for the YAML templates to run.

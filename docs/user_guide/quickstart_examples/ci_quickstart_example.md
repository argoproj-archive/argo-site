# CI_QuickStart_Example

Run a Continuous Integration (CI) workflow with approval step.

This workflow executes five steps.

• Checkout code given a repo and commit

• Build the checked out code

• Run five tests in parallel

• Send notification for approval and wait for the specified timeout

• Once approved, release artifacts

Prerequisites:

For this workflow, you must configure

*   the SMTP server to enable the email approval step to complete successfully.
*   DNS Domain must be set up. See for instructions
*   Set up security group for ELB

1.  Go to <span class="UI_element">Catalog</span> and select "CI Workflow".

    ![](../docs/images/ci_workflow_approval_catalog_623x292.png)

2.  Click <span class="UI_element">Run</span>. ("Review workflow parameters" dialog displays)

    ![](../docs/images/ci_workflow_approval_review_parameters_catalog_624x293.png)

3.  In <span class="UI_element">REQUIRED_APPROVALS</span>, enter your email address so that you are the recipient of the Approval email;

    NOTE: This is only for the purpose of this example; typically you enter the name of the person who needs to approve this build..

4.  Click <span class="UI_element">Submit</span>. (Applatix launches the job and the Timeline > Overview displays the Docker containers for each step in the workflow.).

    ![](../docs/images/ci_workflow_approval_job_kicked_off_catalog_630x295.png)

5.  At the Approval Step, you’ll receive an email requesting you to approve the build and CI. Click <span class="UI_element">Approve</span> to continue the workflow.

    ![](../docs/images/ci_workflow_approval_email_approval_catalog_454x417.png)

The Applatix console displays a message that the email approval was received by Applatix.

![](../docs/images/ci_workflow_approvall_201_response_submitted_successfully_catalog_270x57.png)

When the workflow completes, the Applatix console displays the "Task Succeed" message. The Timeline > Overview now shows that the job for the Docker container completed successfully.![](../docs/images/ci_workflow_approval_task_success_catalog_486x306.png)

And the <span class="UI_element">Jobs</span> view also shows that the workflow succeeded.

![](../docs/images/ci_workflow_approval_job_success_catalog_553x131.png)

Bravo! You’ve successfully completed your first workflow for building and testing the running of Docker containers for a CI workflow.

NOTE: If you want to look at all the source files for the application, go to [https://github.com/Applatix/example-dind](https://github.com/Applatix/example-dind) and look under the `.applatix` directory for the YAML files.

Next Step: Run [Deployment_QuickStart_Example1](#/docs;doc=deployment_quickstart_example1.md).
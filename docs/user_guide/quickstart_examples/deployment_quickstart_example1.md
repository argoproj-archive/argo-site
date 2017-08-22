# Deployment_QuickStart_Example1

Prerequisites

DNS Domain must be set up. See for instructions

SMTP server must be set up to send email approvals to recipients

Set up security group for ELB

1.  Go to <span class="UI_element">Catalog</span> > <span class="UI_element">Demo</span> and select "Docker in Docker".

    ![](../docs/images/catalog_demo_docker_in_docker_4_deploy_container_basic_demo1_603x282.png)

2.  Click ![](../docs/images/configurations_manage_system_settings_encryptiontool_icon_33x24.png) and select <span class="UI_element">Encryption Tool</span>.

    ![](../docs/images/encrypt_secret_copy_dialog_618x290.png)

3.  Select the repository named “https://github.com/Applatix/example-dind” (which is the location of the YAML templates for this application in <span class="GeneralApplatix Platform Name">Argo</span>'s GitHub repo).
4.  Under <span class="UI_element">Secret</span>, enter the value for the username of your Docker registry. (This is the first secret to encrypt.)
5.  Click <span class="UI_element">Encrypt</span>. (Displays the encrypted secret)
6.  Click <span class="UI_element">Copy</span> and paste it into a text file (you’ll use this secret when reviewing the workflow parameters before you run the Docker container).
7.  Click <span class="UI_element">Done</span> for entering the value for this secret.
8.  Repeat Steps 4 to 7 for the password of your Docker registry. (This is the second secret to encrypt.).
9.  Click <span class="UI_element">Build and Deploy V1</span> image. ("Review workflow parameters" dialog displays)

    ![](../docs/images/review_workflow_parameters_docker_in_docker_4_deploy_container_basic_demo1_778x365.png)

10.  Copy the encrypted secrets from your text file and paste them respectively into the <span class="UI_element">DOCKER_PASSWORD</span> and <span class="UI_element">DOCKER_USERNAME</span> fields.
11.  In <span class="UI_element">REQUIRED_APPROVALS</span>, enter your email address as the approver.
12.  Click <span class="UI_element">Submit</span>. (Applatix launches the job and the Timeline > Overview displays the Docker containers for each step in the workflow.).

    ![](../docs/images/successfully_created_job_for_ommit_782x367.png)

13.  When the <span class="UI_element">Approval</span> container pauses in the workflow, check for an Approval email sent from Applatix.

    ![](../docs/images/docker-in-docker_approval_email_477x488.png)

14.  Click <span class="UI_element">Approve</span> to complete the required approval.

The Timeline > Overview now shows that the job for the Docker container completed successfully.

![](../docs/images/ci_workflow_approval_task_success_catalog_856x538.png)

Bravo! You’ve successfully completed your first workflow built and tested the running of Docker containers for a CI workflow..

NOTE: If you want to look at all the source files for the application, go to https://github.com/Applatix/example-dind and look under the .applatix directory for the YAML files.

node.js application.
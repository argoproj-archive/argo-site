# <span class="GeneralApplatix Platform Name">Argo</span> YAML Tutorial

This tutorial takes you through the creation of YAML templates for workflows and deployments of containerized apps running at scale in <span class="GeneralApplatix Platform Name">Argo</span>. The following examples show how to run Docker containers in an <span class="GeneralKubernetes Cluster with Argo">Argo</span>, how to automate the running of workflows and deployments, and how to use other resources that are external to the <span class="GeneralKubernetes Cluster with Argo">Argo</span>. Here’s what you’ll be creating:

*   [Building Hello World! Using a Docker Container](#/docs;doc=ex_building_hello_world.md)

*   [Running a Docker Container in Argofor Hello World!](#/docs;doc=ex_running_hello_world.md)

*   [Building a Container that Checks Out Code](#/docs;doc=ex_check_out_code_coretemplate_notused.md)

*   [Creating a Workflow](#/docs;doc=ex_create_workflow_notused.md)

*   [Automating Workflows Using Policies](#/docs;doc=ex_create_policy_4_workflow.md)

*   [Publishing a Workflow or Application in Catalog](#/docs;doc=ex_publish_workflow_app_coretemplatenotused.md)

*   [Creating a Continuous Integration Workflow](#/docs;doc=ex_create_ci_workflow_notused.md)
*   [Running Nested Workflows to Execute and Record a Selenium Test](#/docs;doc=ex_seleniumnestedworkflows_notused.md)

*   [Creating a Managed Fixture for Workflows and Apps](#/docs;doc=ex_create_managed_fixtures.md)
*   [Adding a Volume as Storage for Deployment](#/docs;doc=ex_add_volume_deployment.md)
*   [Adding an Internal Elastic Load Balancer](#/docs;doc=ex_adding_a_private_elastic_load_balancer.md)  

NOTE: Many of the examples in this tutorial are available on the Applatix GitHub account at [https://github.com/Applatix](https://github.com/Applatix) as this screenshot shows:

![](docs/images/applatix_dsl_guide_release_2.2_draft1/applatix_dsl_guide_release_2.2_draft_461x215.png)

You’ll see a list of repositories such as hello-world.

![](docs/images/applatix_dsl_guide_release_2.2_draft1/applatix_dsl_guide_release_2.2_draft_1_469x125.png)

Check the YAML files that are used to run on the Applatix cluster under .applatix folder in the repo.

Additional documentation and additional tools (such as the <span class="GeneralApplatix Platform Name">Argo</span> YAML syntax checker) are also available from the "Quick Setup" menu from the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.

![](docs/images/ax_console_quicksetup_dialog_yaml_checker_449x311.png)
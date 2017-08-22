<table xmlns="">

<tbody>

<tr>

<td>

![/Users/mukulikak/Documents/Applatix/docs/Applatix_Logo_normal.png](docs/images/applatix_dsl_guide_release_2.2_draft1/yaml_tutorial_and_reference_235x80.png)

YAML TUTORIAL AND REFERENCE GUIDE

May 2017

</td>

<td></td>

</tr>

</tbody>

</table>

Contents

<div class="MCTocProxy_0" xmlns="">

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[What is Argo?](#/docs;doc=%2Fa_introduction_topics%2Fwhat_is_argo.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Using Argo](#/docs;doc=%2Fa_introduction_topics%2Fhow_to_use_applatix.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Quick_Start](#/docs;doc=%2Fquickstart%2Fintro_applatix_quick_start.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Configure Argo to Build and Run Code](#/docs;doc=%2Fintro-connect-cluster-build.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Upgrading Argo](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fupgrade_ax_cluster.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorials](#/docs;doc=using_the_yaml_dsl.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorial 1: Create CI Workflow](#/docs;doc=argo_tutorial_1_create_ci_workflow.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorial 2: Build Docker Image and Deploy Workflow using Docker-in-Docker (DinD) on Kubernetes](#/docs;doc=argo_tutorial_2_create_docker_image_build_workflow.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorial 3: Deploy a Stateless App](#/docs;doc=argo_tutorial_3_deploy_stateless_mlb_app.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorial 4: Deploy a Stateful App](#/docs;doc=argo_tutorial_4_deploy_stateful_odoo_app_volume.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorial 5: Deploy Stateful App with AWS RDS](#/docs;doc=argo_tutorial_5_deploy_stateful_odoo_app_rds.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorial 6: Running Nested Workflows](#/docs;doc=argo_tutorial_6_execute_selenium_tests.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Tutorial 7: Deploy Microservices-based App](#/docs;doc=argo_tutorial_7_deploy_microservices_sockshop_app.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[User Guide](#/docs;doc=%2Fa_introduction_topics%2Foverview.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Starting a Job](#/docs;doc=%2Fuser_guide%2Ftimeline%2Fcreate_job-viewhistory.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Creating a Policy that Triggers a Workflow](#/docs;doc=ex_create_policy_4_workflow.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Running Applications and Deployments](#/docs;doc=%2Fuser_guide%2Fapplications%2Fapplications.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Running Stateful Applications](#/docs;doc=%2Fintro-run_stateful_apps_volumes_fixtures.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Create Managed Fixtures](#/docs;doc=ex_create_managed_fixtures.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Using Managed Fixtures](#/docs;doc=%2Fuser_guide%2Finfrastructure%2Fusing_fixtures.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Adding Volumes for Deployment](#/docs;doc=ex_add_volume_deployment.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Monitoring, Governance, and Spend](#/docs;doc=%2Fintro-monitor_gov_spend.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Cashboard](#/docs;doc=%2Fuser_guide%2Fdashboards%2Fcashboard.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Hosts](#/docs;doc=%2Fuser_guide%2Fdashboards%2Fhosts.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Metrics](#/docs;doc=%2Fuser_guide%2Fdashboards%2Fmetrics.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Running Workflows/Apps in Catalog](#/docs;doc=%2Fuser_guide%2Fcatalog%2Fdeploycatalogapp.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Configure System Settings](#/docs;doc=%2Fintro-set_system_security_settings.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Managing Users and Permissions for the Applatix Cluster](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fmanageuserpermissions.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Configuring System Settings](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fmanagesystemsettings.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Configuring Single Sign-On](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fsetupsso.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Configure Domains](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fmanagedomains.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Connecting an Artifact Repository to Argo](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fconnectartifactrepo.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Setting Up Notifications](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fsetupnotificationmanagement.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Connect to Issue Tracking System](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fconnectjira.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Rolling Updates for Apps](#/docs;doc=%2Fapp_rolling_update.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Adding an Internal Elastic Load Balancer](#/docs;doc=ex_adding_a_private_elastic_load_balancer.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[About Argo Configuration Parameters](#/docs;doc=%2Fa_introduction_topics%2Fabout_the_cluster_configuration_parameters.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Updating Argo](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fupgrade_ax_cluster.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Check Your Amazon Resources for Argo](#/docs;doc=%2Fa_introduction_topics%2Frequired_amazon_resources.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Release Notes](#/docs;doc=%2Freleasenotes%2Frelease_notes_argo.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[FAQs](#/docs;doc=%2Fd_more_information%2Ffaqs.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[YAML Reference](#/docs;doc=using_the_yaml_dsl.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Applatix YAML DSL Reference](#/docs;doc=dsl_reference_intro.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Container and Workflow Templates](#/docs;doc=container_workflow_templates.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Policy Templates](#/docs;doc=policy_templates.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Deployment Template](#/docs;doc=deployment_template.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Project Templates](#/docs;doc=project_templates.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Adding a Volume as Storage for Deployment](#/docs;doc=ex_add_volume_deployment.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Managed Fixture Templates](#/docs;doc=managed_fixture_templates.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Creating a Deployment as a Long Running ServiceCORETEMPLATE](#/docs;doc=ex_create_deploy_long_run_service_coretemplate_notused.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Building a Container that Checks Out CodeCORETEMPLATE](#/docs;doc=ex_check_out_code_coretemplate_notused.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Publishing a Workflow or Application in CatalogCORETEMPLATE](#/docs;doc=ex_publish_workflow_app_coretemplatenotused.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

<table style="width: 100%;" cellspacing="0" cellpadding="0" class="GenTOCTable1"><colgroup><col style="width: 0pt;"> <col> <col style="width: 10pt;"></colgroup>

<tbody>

<tr>

<td class="mcReset"></td>

<td class="GenTOCText1">[Using Special Values for Parameters](#/docs;doc=special_parameters_values.md)</td>

<td class="GenTOCPageText1"><madcap:xref style="mc-format: '{page}';" class="TOCPageNumber" data-mc-xref-target=""></madcap:xref></td>

</tr>

</tbody>

</table>

</div>
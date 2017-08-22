# Argo Release Notes 1.0 <madcap:conditionaltext data-mc-conditions="General.Version224">v2.2</madcap:conditionaltext> <madcap:conditionaltext data-mc-conditions="General.Version231">v2.3</madcap:conditionaltext>

This release note describes the new features and enhancements to the Argo workflow engine.

## New Features and Enhancements

### 2.3.1

#### Rolling Updates

Rolling updates enable you to update or rollback the version of your deployed application without downtime. To configure your deployments for rolling updates, see [Rolling Updates for a Deployed Application](#/docs;doc=%2Fapp_rolling_update.md).

### 2.2.4

#### Bulk Actions

From the <span class="UI_element">Applications</span> or <span class="UI_element">Timelines</span> tab, you can launch multiple Jobs, Applications, or Deployments with a single click .

*   Click <span class="UI_element">Bulk Actions</span> and select the Jobs, Applications, or Deployments tab.
*   Check off each row to perform the Bulk Action.
*   At the bottom of the screen, click the action to take for Applications and Deployments (<span class="UI_element">START</span>, <span class="UI_element">STOP</span>, or <span class="UI_element">TERMINATE</span>).or for jobs (<span class="UI_element">CANCEL</span> or <span class="UI_element">RESUBMIT</span>).

#### Health Check for Kubernetes Master

To ensure that the Kubernetes Master is in an operational state, <span class="GeneralApplatix Platform Name">Argo</span> has added a health check to determine if the Master is still alive. If the Master is not alive, then <span class="GeneralApplatix Platform Name">Argo</span> terminates the Master and restarts it.

### 2.2.1

#### Managed Fixtures

When you run a workflow or deploy an app, you might need to access a resource that is external to your <span class="NewSetApplatix Cluster">Argo Cluster</span>, such as a pool of virtual machines (VMs), databases, other REST-based services, etc. To manage and access these external resources, <span class="GeneralApplatix Platform Name">Argo</span> provides “<span class="GeneralManaged Fixture">managed fixture</span>s”. A <span class="GeneralManaged Fixture">managed fixture</span> allows <span class="GeneralApplatix Platform Name">Argo</span> to perform life-cycle management of these external resources such as creating and deleting instances, loading data, or any other custom action. In a <span class="GeneralManaged Fixture">managed fixture</span>, attributes are used to distinguish instances that come from different <span class="GeneralManaged Fixture">managed fixture</span> classes. Actions are workflows that you can perform on a <span class="GeneralManaged Fixture">managed fixture</span>, (such as creating a <span class="GeneralManaged Fixture">managed fixture</span> for an external database)

If you are upgrading your Cluster to Release 2.2, there are some differences as to how you create fixtures:

*   Static fixtures are no longer supported. Managed fixtures replace static fixtures. To keep using fixtures in your existing workflows or apps, you must replace the static fixtures with <span class="GeneralManaged Fixture">managed fixture</span>s. Applatix does not support backward compatibility for static fixtures.
*   Categories for fixtures are no longer supported. They have been replaced by "classes" of fixtures. A class represents a type of fixture, such as a virtual machine (VM) is a class of fixtures or a Person is a class of fixtures. Each class has attributes, which distinguish the members of each class. You create an Instance of a fixture from the class of the fixture.
*   Use a <span class="GeneralYAML template">YAML template</span> of type "fixture" to define a class of <span class="GeneralManaged Fixture">managed fixture</span>. Previous to Release 2.2, "static" fixtures were defined in a "fixtures" section of a workflow <span class="GeneralYAML template">YAML template</span> or from the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>. The fixtures section in the <span class="GeneralYAML template">YAML template</span> and the <span class="GeneralApplatix Cluster Console">Argo Web UI</span> are now obsolete.
*   Define a <span class="GeneralManaged Fixture">managed fixture</span>'s attributes and actions in the <span class="GeneralYAML template">YAML template</span> of type "fixture". Previous to Release 2.2, attributes for a fixture were defined in the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>. The <span class="GeneralApplatix Cluster Console">Argo Web UI</span> no longer supports adding attributes.
*   Choose a class of <span class="GeneralManaged Fixture">managed fixture</span>s from the <span class="GeneralApplatix Cluster Console">Argo Web UI</span> for creating an instance of the <span class="GeneralManaged Fixture">managed fixture</span>. The Console displays the available fixture classes that you created <span class="GeneralYAML template">YAML template</span>s for.

For details about creating <span class="GeneralManaged Fixture">managed fixture</span>s, see <madcap:conditionaltext data-mc-conditions="General.Not for Print">[Creating a Managed Fixture for Workflows and Apps](#/docs;doc=%2Fyaml%2Fex_create_managed_fixtures.md).</madcap:conditionaltext>

#### Internal Load Balancer for <span class="Generalprivate network">VPC</span>

<span class="GeneralApplatix Platform Name">Argo</span> provides an Internal Elastic Load Balancer (ELB) to enable the routing of traffic to the cluster using private IP addresses. To create an Internal ELB, you must

*   Run the `AX_CREATE_PRIVATE_ELBWORKFLOW` template
*   Add a new field named "`visibility`" in the `external_routes` section of your deployment <span class="GeneralYAML template">YAML template</span>.
*   Set the value of the `visibility` field to either "`world`" (accessible to all traffic external to the VPC) or  
    "`organization`" (accessible only to traffic internal to the VPC).

For details about editing this <span class="GeneralYAML template">YAML template</span>, see<madcap:conditionaltext data-mc-conditions="General.Not for Print"><madcap:conditionaltext data-mc-conditions="General.Not for Print">[Adding an Internal Elastic Load Balancer](#/docs;doc=%2Fyaml%2Fex_adding_a_private_elastic_load_balancer.md)</madcap:conditionaltext> and <madcap:conditionaltext data-mc-conditions="General.Not for Print">[Deployment Template](#/docs;doc=%2Fyaml%2Fdeployment_template.md)</madcap:conditionaltext></madcap:conditionaltext>

#### Integration with Issue Tracking System

<span class="GeneralApplatix Platform Name">Argo</span> integrates with issue tracking systems such as JIRA. This feature makes it easy for you to file an issue and track it from <span class="GeneralApplatix Platform Name">Argo</span> against a job, application or deployment. This feature also lets you easily set up webhooks for the issue tracking system so any updates to an issue are automatically forwarded to <span class="GeneralApplatix Platform Name">Argo</span>. For details, see <madcap:conditionaltext data-mc-conditions="General.Not for Print">[Connect to Issue Tracking System](#/docs;doc=%2Fuser_guide%2Fconfigapplatixcluster%2Fconnectjira.md) and [Create an Issue for a Job, App, or Deployment](#/docs;doc=%2Fuser_guide%2Ftimeline%2Fcreatejiraissue_jobappdeployment.md).</madcap:conditionaltext>

## Known Issues

### 2.3.1

#### Cluster Installation Fails Due to S3 Bucket Issue

If this is your first time installing an <span class="NewSetApplatix Cluster">Argo Cluster</span>, in a rare case you might see an error message that the Cluster installation failed because "an S3 bucket does not exist". The error is due to a delay by the AWS service in detecting that an S3 bucket has been created. To resolve the issue, Applatix recommends you wait for a few minutes and reinstall the Cluster.

### 2.2.3

#### Upgrade Connection Error

When you upgrade your <span class="GeneralKubernetes Cluster with Argo">Argo</span> from 2.2.2 to 2.2.3, it may occasionally throw an error message "Connection refused". Applatix has observed that temporary network glitches may occur during a Cluster upgrade. After a few moments, the network resumes normal operation.

### 2.2.1

#### Old Daemonsets Not Removed

Because of a bug in Kubernetes, old daemonsets from the previous Cluster install may remain after you upgrade your Cluster. This bug can block you from completing your upgrade.

Please contact Applatix if your Cluster upgrade fails. <span class="GeneralApplatix Platform Name">Argo</span> will assist you in clearing out the outdated daemonset on your Cluster. After this is done, retry upgrading your Cluster.

#### Kubernetes Volume Deleted Unexpectedly

Due to a bug in Kubernetes, a Kubernetes volume can be deleted unexpectedly. However, the status of the persistent volume claim (PVC) does not reflect this change. This bug can cause a Cluster install to fail.

Please contact Applatix if your Cluster install fails. <span class="GeneralApplatix Platform Name">Argo</span> will assist you in clearing out the PVC on your Cluster. After this is done, retry installing your Cluster.
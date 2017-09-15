# CLI Reference

## <a name="EnvVars-CLIInstall"></a>Critical Environment Variables For Cluster Manager Container

Argo cluster management software should run inside cluster manager container. The cluster manager container is the source of truth of variable critical binaries, manifest files and config files. The following environment variables must be exported before running "argocluster" command: You can either pass them in when you execute "docker run", or you can export them after you are in the shell for the cluster manager container.

This is an example of setting environmental variables:

TBD

<table xmlns="">

<thead>

<tr>

<th>

Environment Variable Name

</th>

<th>

Description

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

ARGO_DIST_REGISTRY

</td>

<td>

Image registry URL for all argo micro services

</td>

</tr>

<tr>

<td>

ARGO_DIST_REGISTRY_SECRETS

</td>

<td>

Base64-encoded docker config file which contains login secrets to the specified registry. If you docker config contains such credentials, you can just do something such as "

export ARGO_DIST_REGISTRY_SECRETS=$(base64 -i ~/.docker/config)

"

</td>

</tr>

<tr>

<td>

AX_NAMESPACE

</td>

<td>

Image namespace for all Argo micro services

</td>

</tr>

<tr>

<td>

AX_VERSION

</td>

<td>

Image version for all Argo micro services

</td>

</tr>

</tbody>

</table>

## <a name="InstallCmdOptions"></a>Install

Installs an Argo cluster based on given configurations. After the cluster is installed, Argo generates an initial access credential and creates an Argo CLI configuration file, which is named as "<cluster-name>-<cluster-id>". Currently some important software, i.e. Kubernetes binaries, Kubernetes salt come with the cluster manager container from where user runs the install. User are free to set Argo service software namespace / version through exporting environment variables.

This is the basic command for installing Argo:

`argocluster install --cluster-name <CLUSTER_NAME>`

### Options

<table><colgroup><col style="width: 248pt;"> <col style="width: 353pt;"> <col style="width: 148pt;"></colgroup>

<tbody>

<tr style="height: 34pt;">

<th>Flag</th>

<th>Explanation</th>

<th>Default value</th>

</tr>

<tr style="height: 34pt;">

<td>

--cloud-placement

</td>

<td>

A valid placement in your cloud provider.

The AWS availability zone you want to place the Argo cluster.

</td>

<td>Default: "us-west-2a"</td>

</tr>

<tr style="height: 67pt;">

<td>

--cloud-profile

</td>

<td>

Cloud profile name. Specify a name if you do not want to use a default profile. Otherwise, specify it.

</td>

<td> </td>

</tr>

<tr style="height: 34pt;">

<td>

--cloud-provider

</td>

<td>

Cloud provider name, choose from "aws" or "gcp".  

</td>

<td>Default: "aws".</td>

</tr>

<tr style="height: 34pt;">

<td>

--cloud-region

</td>

<td>

A valid region in your cloud provider.

The AWS region you want to place the Argo cluster.

</td>

<td>Default: "us-west-2"</td>

</tr>

<tr style="height: 67pt;">

<td>

--cluster-autoscaling-scan-interval

</td>

<td>

A number in unit of seconds indicating how often our cluster autoscaler should scan for scaling.

</td>

<td>Default: 10</td>

</tr>

<tr style="height: 67pt;">

<td>

--cluster-id

</td>

<td>

A pre-generated cluster ID. This must be a UUID for AWS clusters. If this flag is not provided, a new UUID will be generated for cluster.

</td>

<td> </td>

</tr>

<tr style="height: 47pt;">

<td>

--cluster-name

</td>

<td>

<span class="span_1"><Required></span> Give cluster a name. Length of name should be between 2 and 64 characters.

The name you use to identify your Argo environment. This will also be used as your cluster name prefix.

</td>

<td>acme_dev_cluster-1</td>

</tr>

<tr style="height: 67pt;">

<td>

--cluster-size

</td>

<td>

<p>Argo supports pre-canned cluster sizes. Choose from "small", "medium", "large", "xlarge".

This is the size of the Argo cluster that you want.</p>

<p>NOTE: The number in parentheses indicates the number of node instances. For example, (2) indicates two node instances.</p>

<h3>STANDARD</h3>

<p>**SMALL** (Recommended for running proof-of-concept (POC) workloads).  
    Master node size: **m3.medium** (1)  
    Argo node size: **m3.large** (2)  
    User node size: **m3.large** (maximum 3)  </p>

<p>**MEDIUM** (Recommended if you only want to try out the Argo solution).  
    Master node size: **m3.large** (1)  
    Argo node size: **m3.large** (2)  
    User node size: **m3.large** (maximum 8) </p>
 <p>**LARGE** (Recommended if you want to use Argo for a small group)  
    Master node size: **r3.large** (1)  
    Argo node size: **m3.large** (3)  
    User node size: **m3.large** (maximum 17)</p>
<p>**XLARGE** (Recommended if you want to deploy Argo for moderate workload for a large group)  
    Master node size: **r3.2xlarge** (1)  
    Argo node size: **m3.2xlarge** (2)  
    User node size: **m3.2xlarge** (maximum 28)</p>

<h3>COMPUTE OPTIMIZED</h3>

<p>**SMALL**  
    Master node size: **m3.medium** (1)  
    Argo node size: **m3.large** (2)  
    User node size: **c3.2xlarge** (maximum 2)</p>
<p>**MEDIUM**
    Master node size: **m3.large** (1)  
    Argo node size: **m3.large** (2)  
    User node size: **c3.2xlarge** (maximum 5)</p>
<p>**LARGE**  
    Master node size: **r3.large** (1)  
    <span class="UI_element">Argo</span> node size: **m3.large** (3)  
    User node size: **c3.2xlarge** (maximum 10)</p>
<p>**XLARGE**  
    Master node size: **r3.xlarge** (1)  
    <span class="UI_element">Argo</span> node size: **m3.xlarge** (3)  
    User node size: **c3.2xlarge** (maximum 20)

</td>

<td>

Default: "small"

</td>

</tr>

<tr style="height: 67pt;">

<td>

--cluster-type

</td>

<td>

Currently Argo only supports pre-canned cluster types. Choose from "standard" or "compute".

Choose one from the following types of EC2 instances:
<ul>
   <li>Standard ("General Purpose")</li>
   <li>Compute Optimized</li>
</ul>
</td>

<td>

Default: "standard"

</td>

</tr>

<tr style="height: 67pt;">

<td>

--dry-run

</td>

<td>

If specified, the operation will not be actually executed. Some debugging information will be provided

</td>

<td> </td>

</tr>

<tr style="height: 34pt;">

<td>

--enable-sandbox

</td>

<td>

Run cluster under sandbox mode.

</td>

<td>Default: Not Set</td>

</tr>

<tr style="height: 100pt;">

<td>

--platform-bootstrap-config

</td>

<td>

A configuration file indicating how the Argo platform services should be handled during bootstrap and tear down operations.

</td>

<td>Default to the pre-canned platform bootstrap config inside the clustermanager container</td>

</tr>

<tr style="height: 83pt;">

<td>

--service-manifest-root

</td>

<td>

A directory contains Kubernetes YAML files of platform services to be installed onto the cluster.

</td>

<td>Default to the pre-canned services inside clustermanager container.</td>

</tr>

<tr style="height: 133pt;">

<td>

--silent, -s

</td>

<td>

Perform operation in silent mode. By default, you will be prompted with the configurations you need to enter, along with default if possible. If in silent mode, Argo automatically uses default values for all configurations that are not set explicitly.

</td>

<td> </td>

</tr>

<tr style="height: 50pt;">

<td>

--spot-instance-option

</td>

<td>

A pre-canned spot instance option. Choose from "none", "partial", "all".

</td>

<td>Default: "partial"</td>

</tr>

<tr style="height: 67pt;">

<td>

--subnet-mask-size

</td>

<td>

A subnet mask size specified for the cluster's subnet. Subnet mask size cannot be greater than 25.

</td>

<td>Default: 22</td>

</tr>

<tr style="height: 83pt;">

<td>

--support-object-store-name

</td>

<td>

An AWS bucket name where we upload cluster's system logs. If not provided, we will use the cluster's default bucket to store all system logs.

</td>

<td>Default: None</td>

</tr>

<tr style="height: 133pt;">

<td>

--trusted-cidrs

</td>

<td>

<p>A list of IPv4 CIDRs, separated by space, to be authorized to access the cluster. If the IP you used to access the cluster is not listed, it will be added to the list when we create the cluster, but removed from cluster's security groups after cluster is installed.</p>

<p>One or more IP ranges that can access the Argo cluster you create. Typically, you add the IP addresses that your company uses.</p>

<p>Multiple valid IP addresses in the Classless Inter-Domain Routing (CIDR) scheme. After you enter a CIDR, press `enter` to confirm.</p>

<p>TIP: Obtain a list of company-approved IP addresses that can be used as valid values for the Trusted CIDR field before you enter any value(s).</p>

</td>

<td>

1.1.1.1/32<br/>

2.2.2.2/32<br/>

3.3.3.0/24<br/>

Default: 0.0.0.0/0

</td>

</tr>

<tr style="height: 100pt;">

<td>

--vpc-cidr-base

</td>

<td>

<p>A /16 VPC CIDR base  (first 2 digits separated with ".", for example, "172.20") used to create new VPC. If there is a VPC ID provided through "--vpc-id", this flag will be ignored.</p>

<p>The private subnet IP range for the Argo cluster nodes in your Virtual Public Cloud (VPC).</p>
<ul>
  <li>Must be a /16 CIDR block</li>
  <li>Must be private IP address</li>
  <li>Cannot overlap 10.0.0.0/8</li>
</ul>
You can choose from the following ranges:
<ul>
  <li>172.16.0.0/16 ~ 172.31.0.0/16</li>
  <li>192.168.0.0/16</li>
</ul>
</td>

<td>

Default value is 172.20

Example: 172.25.0.0/16

</td>

</tr>

<tr style="height: 133pt;">

<td>

--vpc-id

</td>

<td>

<p>The VPC you want to install your cluster.</p>
<p>Argo highly recommends that you install the cluster in an new VPC for resource isolation/failure purposes. The provided VPC should be consistent with the region you specified. If set to None, a new VPC will be created.</p>

</td>

<td>Default: None</td>

</tr>

</tbody>

</table>

# <a name="UninstallCmdOptions"></a>Uninstall

Uninstalls a cluster and cleans up all cluster-related resources in the cloud provider based on the options you provide. Note that you may need to manually delete the S3 bucket as it is shared by all clusters in the account.

This is the basic command for uninstalling Argo:

 `$ argocluster uninstall --force-uninstall --cluster-name <_yourClusterName_>`

### Options

<table xmlns=""><colgroup><col style="width: 209px;"> <col></colgroup>

<thead>

<tr>

<th>

Flag

</th>

<th>

Explanation

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

--cluster-name

</td>

<td>

<Required> Name of the cluster to uninstall.

</td>

</tr>

<tr>

<td>

--cluster-id

</td>

<td>

Cluster ID of the cluster you want to uninstall. 

</td>

</tr>

<tr>

<td>

--cloud-provider

</td>

<td>

Cloud provider name of the cluster to uninstall, choose from "aws" or "gcp". Default: "aws".

</td>

</tr>

<tr>

<td>

--cloud-profile

</td>

<td>

Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

</td>

</tr>

<tr>

<td>

--dry-run

</td>

<td>

If specified, the operation will not be actually executed. Some debugging information will be printed

</td>

</tr>

<tr>

<td>

--silent, -s

</td>

<td>

Perform operation in silent mode. By default, you will be prompted with the configurations you need to enter, along with default if possible. If in silent mode, we will automatically use default values for all configurations that is not set explicitly.

</td>

</tr>

<tr>

<td>

--cloud-region

</td>

<td>

Region of the cluster to uninstall

</td>

</tr>

<tr>

<td>

--cloud-placement

</td>

<td>

Placement of the cluster to uninstall

</td>

</tr>

</tbody>

</table>

# <a name="UpgradeCmdOptions"></a>Upgrade

Upgrades a cluster to a target version of Argo. Currently some important software, i.e. Kubernetes binaries, Kubernetes salt come with the cluster manager container from where you runs the install. You can set the Argo service software namespace / version through exporting environment variables.

This is the basic command for upgrading your cluster:

`$ argocluster upgrade --cluster-name <_yourClusterName_>`

### Options

<table><colgroup><col style="width: 190px;"> <col></colgroup>

<thead>

<tr>

<th>

Flag

</th>

<th>

Explanation

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

--cluster-name

</td>

<td>

<Required> Name of the cluster to uninstall.

</td>

</tr>

<tr>

<td>

--cluster-id

</td>

<td>

<Required for force uninstall> Cluster ID of the cluster you want to uninstall. 

</td>

</tr>

<tr>

<td>

--cloud-provider

</td>

<td>

Cloud provider name of the cluster to uninstall, choose from "aws" or "gcp". Default: "aws".

</td>

</tr>

<tr>

<td>

--cloud-profile

</td>

<td>

Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

</td>

</tr>

<tr>

<td>

--dry-run

</td>

<td>

If specified, the operation will not be actually executed. Some debugging information will be printed

</td>

</tr>

<tr>

<td>

--silent, -s

</td>

<td>

Perform operation in silent mode. By default, you will be prompted with the configurations you need to enter, along with default if possible. If in silent mode, we will automatically use default values for all configurations that is not set explicitly.

</td>

</tr>

<tr>

<td>

--service-manifest-root

</td>

<td>

A directory contains Kubernetes yaml files of platform services to be installed onto the cluster. Default to the pre-canned services inside clustermanager container.

</td>

</tr>

<tr>

<td>

--platform-bootstrap-config

</td>

<td>

A config file indication how platform services should be handled during bootstrap and tear down. Default to the pre-canned platform bootstrap config inside clustermanager container

</td>

</tr>

<tr>

<td>

--force-upgrade

</td>

<td>

By default, we upgrade cluster if either cluster install version / kubernetes version / software version changes. As for software version, we always upgrade when the version is "latest". But one can always enforce upgrade routine by adding this flag.

</td>

</tr>

</tbody>

</table>

# <a name="PauseCmdOptions"></a>Pause

Tears down unnecessary resources from cloud provider, while making sure your cluster can recover to the state before it was paused. By pausing a cluster, you minimize the amount that the cloud provider charges, such as lessening the cost of persistent volumes or S3 object storage. 

This is the basic command for pausing a cluster:

`$ argocluster pause --cluster-name <_yourClusterName_>`

### Options

<table><colgroup><col style="width: 205px;"> <col></colgroup>

<thead>

<tr>

<th>

Flag

</th>

<th>

Explanation

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

--cluster-name

</td>

<td>

<Required> Name of the cluster to pause.

</td>

</tr>

<tr>

<td>

--cluster-id

</td>

<td>

Cluster ID of the cluster you want to pause. 

</td>

</tr>

<tr>

<td>

--cloud-provider

</td>

<td>

Cloud provider name of the cluster to uninstall, choose from "aws" or "gcp". Default: "aws".

</td>

</tr>

<tr>

<td>

--cloud-profile

</td>

<td>

Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

</td>

</tr>

<tr>

<td>

--dry-run

</td>

<td>

If specified, the operation will not be actually executed. Some debugging information will be printed

</td>

</tr>

<tr>

<td>

--silent, -s

</td>

<td>

Perform operation in silent mode. By default, you will be prompted with the configurations you need to enter, along with default if possible. If in silent mode, we will automatically use default values for all configurations that is not set explicitly.

</td>

</tr>

</tbody>

</table>

# <a name="ResumeCmdOptions"></a>Resume

Restores a paused cluster to its previous state before pausing. After resuming, the cluster has the same software version, node / network / security configurations, and all applications / jobs that were paused are restarted.

This is the basic command for resuming a cluster:

`$ argocluster resume --cluster-name <_yourClusterName_>`

## Restart

This is the basic command to restart Argo:

`$ argocluster restart [-h] [--cluster-name CLUSTER_NAME]`

### Options

<table><colgroup><col style="width: 166px;"> <col></colgroup>

<thead>

<tr>

<th>

Flag

</th>

<th>

Explanation

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

--cluster-name

</td>

<td>

<Required> Name of the cluster to restart.

</td>

</tr>

<tr>

<td>

--cluster-id

</td>

<td>

Cluster ID of the cluster you want to restart. 

</td>

</tr>

<tr>

<td>

--cloud-provider

</td>

<td>

Cloud provider name of the cluster to uninstall, choose from "aws" or "gcp". Default: "aws".

</td>

</tr>

<tr>

<td>

--cloud-profile

</td>

<td>

Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

</td>

</tr>

<tr>

<td>

--dry-run

</td>

<td>

If specified, the operation will not be actually executed. Some debugging information will be printed

</td>

</tr>

<tr>

<td>

--silent, -s

</td>

<td>

Perform operation in silent mode. By default, you will be prompted with the configurations you need to enter, along with default if possible. If in silent mode, we will automatically use default values for all configurations that is not set explicitly.

</td>

</tr>

</tbody>

</table>

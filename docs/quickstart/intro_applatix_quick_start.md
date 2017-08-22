# Quick Start with <span class="GeneralApplatix Platform Name">Argo</span>

Here's how you get started quickly with <span class="GeneralApplatix Platform Name">Argo</span>:

*   Pre-Step — [Check Your Amazon Resources for Argo](../a_introduction_topics/required_amazon_resources.htm#top)
*   Step 1: Set up AWS for <span class="GeneralApplatix Platform Name">Argo</span>
*   Step 2:  Installing <span class="GeneralApplatix Platform Name">Argo</span> In Your AWS Account

## Step 1: Setting Up AWS to Enable <span class="GeneralApplatix Platform Name">Argo</span>

To ensure the security of the <span class="GeneralKubernetes Cluster with Argo">Argo</span> running in AWS, the <span class="GeneralApplatix Platform Name">Argo</span> solution requires that you create a policy that allows <span class="GeneralApplatix Platform Name">Argo</span> to install in your AWS account. Amazon recommends creating this policy as the best security practice for 3rd-party software running in AWS.

Here are the steps:

### Create a Policy:

*   Go to your AWS console and select <span class="UI_element">IAM</span> (Identity And Management) service.
*   Select <span class="UI_element">Policies</span> from left side bar and click <span class="UI_element">Create Policy</span>.
*   Select <span class="UI_element">Create Your Own Policy</span>.  NOTE: You can skip Step 2 "Set Permissions".

*   Specify a Policy Name (such as "ArgoManagement") and a Description (such as "Allow <span class="GeneralApplatix Platform Name">Argo</span> to install and update their software").

*   Copy the following policy text:

    <pre>{
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "s3:*",
            "ec2:*",
            "autoscaling:*",
            "cloudwatch:*",
            "elasticloadbalancing:*",
            "iam:AddRoleToInstanceProfile",
            "iam:CreateInstanceProfile",
            "iam:CreateRole",
            "iam:DeleteInstanceProfile",
            "iam:DeleteRole",
            "iam:DeleteRolePolicy",
            "iam:GetInstanceProfile",
            "iam:GetRole",
            "iam:GetRolePolicy",
            "iam:ListInstanceProfilesForRole",
            "iam:ListRolePolicies",
            "iam:ListRoles",
            "iam:PassRole",
            "iam:PutRolePolicy",
            "iam:RemoveRoleFromInstanceProfile",
            "iam:UploadServerCertificate",
            "iam:DeleteServerCertificate",
            "iam:GetServerCertificate"
          ],
          "Resource": "*"
        }
      ]
    }</pre>

    *   Paste the text into <span class="UI_element">Policy Document</span> and click <span class="UI_element">Create Policy</span>.

        The Review Policy panel in AWS will look similar to the following screenshot:

        ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Policy2.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_1_386x328.png)

## Step 2: Installing <span class="GeneralApplatix Platform Name">Argo</span> In Your AWS Account

After your Argo account manager has created your Argo account, you'll install <span class="GeneralApplatix Platform Name">Argo</span> on Amazon Web Services (AWS) using the command line. At the end of this step, you can start using Applatix in your AWS account.

[Calvin Notes]

# assume all users are on *nix machines; from windows, must SSH into a Linux machine

# only SSH into a Linux machine /Calvin possibly SSH into a dev machine that's running Linux??? (NO MORE CROSS ACCOUNT ROLE-COMMUNITY USERS HAVE THEIR OWN INDIVIDUAL

# User responsible for installing Docker client on their system

# User responsible for installing the client for the AWS CLI

# User responsible for installing Kubernetes on their system

# argoctl is the argo cluster operations manager (just like kubectl for K8s)

# user needs to set only a few required flags, such as trusted CIDRs; user takes rest of the default values for each flag

Setup (Mac ONLY)

We will provide a bash script for user to run for all pre-setups. The script will do the following:

Ensure user has docker with proper version (we might want to enforce 1.12+)

Ensure user has a aws cli installed and configured (GCP is not supported now)

Ensure user has ~/.kube directory for kubernetes credentials

Ensure user has a directory for argoctl credentials

Configure environments for docker

There will be enough comment inside the script to tell them what these environment variables mean

Of course we will try our best to provide defaults

Pull axclustermanager (Name TBD) container

Run bash inside the container

User will be brought into a container that is ready to execute `argocluster`

Currently when we want to do it internally, do the following to finish the setup:

ip-10-0-1-12:~/ws1/prod/tests/pressure_kubernetes (hz-mac-ttt104-1d01b148-77af-11e7-ba6e-0242ac11000c)  kcluster

Going to use harry:latest with customer ID cc07b86b-6b6b-4dd6-9b55-b68d05fd1f8e

Pulling image get.applatix.io/harry/axclustermanager:latest

latest: Pulling from harry/axclustermanager

Digest: sha256:2c77c976b6be101f975e201212fc84fbce8c4c5adf6690f7ddd6500ca81ccb12

Status: Image is up to date for get.applatix.io/harry/axclustermanager:latest

root@moby:/#

root@moby:/#

root@moby:/# export ARGO_DIST_REGISTRY_SECRETS=ewoJImF1dGhzIjogewoJCSJkb2NrZXIuYXBwbGF0aXgubmV0IjogewoJCQkiYXV0aCI6ICJZWGhrWlhZNk5HeDZiek5NY1haamJWUjMiCgkJfQoJfQp9Cg==

root@moby:/# export ARGO_DEV_REGISTRY=docker.applatix.net

root@moby:/# export ARGO_DIST_REGISTRY=docker.applatix.net

root@moby:/#

root@moby:/#

## Install

Command

<pre xmlns="">root@moby:/# argocluster install -h</pre>

<pre xmlns="">usage: argocluster install [-h] [--cluster-name CLUSTER_NAME]</pre>

<pre xmlns="">[--cluster-id CLUSTER_ID]</pre>

<pre xmlns="">[--cloud-provider CLOUD_PROVIDER]</pre>

<pre xmlns="">[--cloud-profile CLOUD_PROFILE] [--dry-run]</pre>

<pre xmlns="">[--cluster-size CLUSTER_SIZE]</pre>

<pre xmlns="">[--cluster-type CLUSTER_TYPE]</pre>

<pre xmlns="">[--cloud-region CLOUD_REGION]</pre>

<pre xmlns="">[--cloud-placement CLOUD_PLACEMENT]</pre>

<pre xmlns="">[--vpc-id VPC_ID] [--vpc-cidr-base VPC_CIDR_BASE]</pre>

<pre xmlns="">[--subnet-mask-size SUBNET_MASK_SIZE]</pre>

<pre xmlns="">[--trusted-cidrs TRUSTED_CIDRS [TRUSTED_CIDRS ...]]</pre>

<pre xmlns="">[--user-on-demand-nodes USER_ON_DEMAND_NODES]</pre>

<pre xmlns="">[--spot-instance-option SPOT_INSTANCE_OPTION]</pre>

<pre xmlns="">[--service-manifest-root SERVICE_MANIFEST_ROOT]</pre>

<pre xmlns="">[--platform-bootstrap-config PLATFORM_BOOTSTRAP_CONFIG]</pre>

<pre xmlns="">[--cluster-autoscaling-scan-internval CLUSTER_AUTOSCALING_SCAN_INTERNVAL]</pre>

<pre xmlns="">[--enable-sandbox]</pre>

<pre xmlns="">[--support-log-bucket-name SUPPORT_LOG_BUCKET_NAME]</pre>

<pre xmlns="">[--software-version-info SOFTWARE_VERSION_INFO]</pre>

<pre xmlns="">optional arguments:</pre>

<pre xmlns="">-h, --help            show this help message and exit</pre>

<pre xmlns="">--cluster-name CLUSTER_NAME</pre>

<pre xmlns="">Target Argo cluster name</pre>

<pre xmlns="">--cluster-id CLUSTER_ID</pre>

<pre xmlns="">A pre-generated cluster id</pre>

<pre xmlns="">--cloud-provider CLOUD_PROVIDER</pre>

<pre xmlns="">Cloud type: aws or gcp</pre>

<pre xmlns="">--cloud-profile CLOUD_PROFILE</pre>

<pre xmlns="">Cloud profile name</pre>

<pre xmlns="">--dry-run             Dry run operation</pre>

<pre xmlns="">--cluster-size CLUSTER_SIZE</pre>

<pre xmlns="">Pre-canned cluster types: mvc, small, medium, large,</pre>

<pre xmlns="">xlarge</pre>

<pre xmlns="">--cluster-type CLUSTER_TYPE</pre>

<pre xmlns="">Pre-canned cluster types: standard or compute</pre>

<pre xmlns="">--cloud-region CLOUD_REGION</pre>

<pre xmlns="">A valid cloud region</pre>

<pre xmlns="">--cloud-placement CLOUD_PLACEMENT</pre>

<pre xmlns="">A valid cloud placement</pre>

<pre xmlns="">--vpc-id VPC_ID       Specify a valid VPC id if cluster is to be created in</pre>

<pre xmlns="">existing VPC. If not specified, a new VPC will be</pre>

<pre xmlns="">created</pre>

<pre xmlns="">--vpc-cidr-base VPC_CIDR_BASE</pre>

<pre xmlns="">A /16 vpc cidr block prefix for new VPC. i.e. if you</pre>

<pre xmlns="">want vpc cidr to be 192.168.0.0/16, enter "192.168"</pre>

<pre xmlns="">--subnet-mask-size SUBNET_MASK_SIZE</pre>

<pre xmlns="">Subnet size, must be smaller than 25</pre>

<pre xmlns="">--trusted-cidrs TRUSTED_CIDRS [TRUSTED_CIDRS ...]</pre>

<pre xmlns="">A list of IP cidrs allowed to access cluster.</pre>

<pre xmlns="">--user-on-demand-nodes USER_ON_DEMAND_NODES</pre>

<pre xmlns="">Number of on-demand nodes to use for user autoscaling</pre>

<pre xml:space="preserve" xmlns="">group</pre>

<pre xml:space="preserve" xmlns=""># Default is zero. "user" refers to "user nodes" that will be autoscaled</pre>

<pre xmlns="">--spot-instance-option SPOT_INSTANCE_OPTION</pre>

<pre xmlns="">Spot instance option: choose from none, partial, and</pre>

<pre xmlns="">all</pre>

<pre xmlns="">--service-manifest-root SERVICE_MANIFEST_ROOT</pre>

<pre xml:space="preserve" xmlns="">Root directory for all Argo service manifests</pre>

<pre xml:space="preserve" xmlns=""># for developers to use if they are not satisfied with the default directory or during an upgrade (need to specify two directories--one that holds existing version, the other for new upgrade version)</pre>

<pre xmlns="">--platform-bootstrap-config PLATFORM_BOOTSTRAP_CONFIG</pre>

<pre xmlns="">Config file indicating how plaform should be booted up</pre>

<pre xmlns="">--cluster-autoscaling-scan-internval CLUSTER_AUTOSCALING_SCAN_INTERNVAL</pre>

<pre xml:space="preserve" xmlns="">Cluster will scan for autoscaling every given seconds</pre>

<pre xml:space="preserve" xmlns=""># Default cannot be less than 1\. Referring to the Argo cluster running in AWS.</pre>

<pre xml:space="preserve" xmlns="">--enable-sandbox      Install this cluster as a sandbox</pre>

<pre xml:space="preserve" xmlns=""># for internal use only--like using Applatix Playground</pre>

<pre xmlns="">--support-log-bucket-name SUPPORT_LOG_BUCKET_NAME</pre>

<pre xmlns="">Name of bucket from cloud provider we want to upload</pre>

<pre xmlns="">Argo system logs</pre>

<pre xmlns="">--software-version-info SOFTWARE_VERSION_INFO</pre>

<pre xmlns="">A file indicating software configuration. Currently</pre>

<pre xml:space="preserve" xmlns="">NOT used.</pre>

<pre xml:space="preserve" xmlns="">#TBD</pre>

<pre xmlns="">root@moby:/#</pre>

### Options

Flag

Explanation

--cluster-name

<Required> Give cluster a name. Length of name should be between 2 and 64 characters.

# AWS provides the pre-generated cluster IDs

--cluster-id A pre-generated cluster ID. This must be a UUID for AWS clusters. If this flag is not provided, a new UUID will be generated for cluster.

--cloud-provider Cloud provider name, choose from "aws" or "gcp". Default: "aws".

--cloud-profile Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

--dry-run If specified, the operation will not be actually executed. Some debugging information will be provided

# for debugging purposes. No need to provide any value--just specify the flag itself to output debugging info.

--cluster-size Currently we only support pre-canned cluster sizes. Choose from "small", "medium", "large", "xlarge". Default: "small"

--cluster-type Currently we only support pre-canned cluster type. Choose from "standard", "compute". Default: "standard"

--cloud-region A valid region in your cloud provider. Default: "us-west-2"

--cloud-placement A valid placement in your cloud provider. Default: "us-west-2a"

--vpc-id The VPC you want to install your cluster. We highly recommend not to install in existing VPC for resource isolation / failure isolation purposes. The provided VPC should be consistent with the region you specified. If set to None, a new VPC will be created. Default: None

--vpc-cidr-base A /16 VPC CIDR base (first 2 digits separated with ".", for example, "172.20") used to create new VPC. If there is a VPC ID provided through "--vpc-id", this flag will be ignored. Default: "172.20"

--subnet-mask-size A subnet mask size specified for the cluster's subnet. Subnet mask size cannot be greater than 25\. Default: 22

--trusted-cidrs A list of IPv4 CIDRs, separated by space, to be authorized to access the cluster. If the IP you used to access the cluster is not listed, it will be added to the list when we create the cluster, but removed from cluster's security groups after cluster is installed. Default: 0.0.0.0/0

--user-on-demand-nodes

Number of on-demand nodes to use for user autoscaling group (TODO: we might remove this flag and see how minion manager goes on (Shri Javadekar) )

--spot-instance-option A pre-canned spot instance option. Choose from "none", "partial", "all". Default: "partial"

--service-manifest-root A directory contains Kubernetes yaml files of platform services to be installed onto the cluster. Default to the pre-canned services inside clustermanager container.

--platform-bootstrap-config A config file indication how platform services should be handled during bootstrap and tear down. Default to the pre-canned platform bootstrap config inside clustermanager container

--cluster-autoscaling-scan-internval A number in unit of seconds indicating how often our cluster autoscaler should scan for scaling. Default: 10

--enable-sandbox Run cluster under sandbox mode. Default: Not Set

--support-log-bucket-name

An AWS bucket name where we upload cluster's system logs. (TODO: it's not fully functioning now and Chengjie Liu is working on it) If not provided, we will use the cluster's default bucket to store all system logs. Default: None

--software-version-info A config file indicating software information about this cluster. This flag is currently NOT used as we still have dependencies to clustermanager container.

Uninstall

Command

root@moby:/# argocluster uninstall -h

usage: argocluster uninstall [-h] [--cluster-name CLUSTER_NAME]

[--cluster-id CLUSTER_ID]

[--cloud-provider CLOUD_PROVIDER]

[--cloud-profile CLOUD_PROFILE] [--dry-run]

[--cloud-region CLOUD_REGION]

[--cloud-placement CLOUD_PLACEMENT]

[--force-uninstall]

optional arguments:

-h, --help show this help message and exit

--cluster-name CLUSTER_NAME

Target Argo cluster name

--cluster-id CLUSTER_ID

A pre-generated cluster id

--cloud-provider CLOUD_PROVIDER

Cloud type: aws or gcp

--cloud-profile CLOUD_PROFILE

Cloud profile name

--dry-run Dry run operation

--cloud-region CLOUD_REGION

Cluster's region, used only when force uninstall

--cloud-placement CLOUD_PLACEMENT

Cluster's placement, used only when force uninstall

--force-uninstall Force (blindly) uninstall the cluster with best

efforts. Additional information of cluster is required

when this flag is set to True

root@moby:/#

Options

Flag

Explanation

--cluster-name

<Required> Name of the cluster to uninstall.

--cluster-id <Required for force uninstall> Cluster ID of the cluster you want to uninstall.

--cloud-provider Cloud provider name of the cluster to uninstall, choose from "aws" or "gcp". Default: "aws".

--cloud-profile Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

--dry-run If specified, the operation will not be actually executed. Some debugging information will be printed

--cloud-region <Required for force uninstall> Region of the cluster to uninstall

--cloud-placement <Required for force uninstall> Placement of the cluster to uninstall

Pause

Command

root@moby:/# argocluster pause -h

usage: argocluster pause [-h] [--cluster-name CLUSTER_NAME]

[--cluster-id CLUSTER_ID]

[--cloud-provider CLOUD_PROVIDER]

[--cloud-profile CLOUD_PROFILE] [--dry-run]

[--service-manifest-root SERVICE_MANIFEST_ROOT]

[--platform-bootstrap-config PLATFORM_BOOTSTRAP_CONFIG]

optional arguments:

-h, --help show this help message and exit

--cluster-name CLUSTER_NAME

Target Argo cluster name

--cluster-id CLUSTER_ID

A pre-generated cluster id

--cloud-provider CLOUD_PROVIDER

Cloud type: aws or gcp

--cloud-profile CLOUD_PROFILE

Cloud profile name

--dry-run Dry run operation

root@moby:/#

Options

Flag

Explanation

--cluster-name

<Required> Name of the cluster to pause.

--cluster-id Cluster ID of the cluster you want to pause.

--cloud-provider Cloud provider name of the cluster to uninstall, choose from "aws" or "gcp". Default: "aws".

--cloud-profile Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

--dry-run If specified, the operation will not be actually executed. Some debugging information will be printed

Restart

Command

root@moby:/# argocluster restart -h

usage: argocluster restart [-h] [--cluster-name CLUSTER_NAME]

[--cluster-id CLUSTER_ID]

[--cloud-provider CLOUD_PROVIDER]

[--cloud-profile CLOUD_PROFILE] [--dry-run]

[--service-manifest-root SERVICE_MANIFEST_ROOT]

[--platform-bootstrap-config PLATFORM_BOOTSTRAP_CONFIG]

optional arguments:

-h, --help show this help message and exit

--cluster-name CLUSTER_NAME

Target Argo cluster name

--cluster-id CLUSTER_ID

A pre-generated cluster id

--cloud-provider CLOUD_PROVIDER

Cloud type: aws or gcp

--cloud-profile CLOUD_PROFILE

Cloud profile name

--dry-run Dry run operation

root@moby:/#

Options

Flag

Explanation

--cluster-name

<Required> Name of the cluster to restart.

--cluster-id Cluster ID of the cluster you want to restart.

--cloud-provider Cloud provider name of the cluster to uninstall, choose from "aws" or "gcp". Default: "aws".

--cloud-profile Cloud profile name. If you have a default profile configured already, and you want to use the default profile, you don't have to specify it.

--dry-run If specified, the operation will not be actually executed. Some debugging information will be printed

Sample Commands To Try Out

# Install

$ argocluster install --cluster-name mukulika-is-awesome \

--cloud-provider aws \

--cloud-profile dev \

--cluster-size small \

--cluster-type standard \

--cloud-region us-west-2 \

--cloud-placement us-west-2b \

--vpc-id vpc-a9934cce \

--subnet-mask-size 24 \

--trusted-cidrs 54.149.149.230/32 76.126.244.190/32 104.10.248.90/32 54.200.77.5/32 \

--spot-instance-option all \

--cluster-autoscaling-scan-internval 60

# Other options

$ argocluster uninstall --cluster-name mukulika-is-awesome --cloud-profile dev

$ argocluster restart --cluster-name mukulika-is-awesome --cloud-profile dev

$ argocluster pause --cluster-name mukulika-is-awesome --cloud-profile dev

At this point, you are ready to use <span class="GeneralApplatix Platform Name">Argo</span> within AWS.

NOTE: To upgrade the <span class="GeneralApplatix Platform Name">Argo</span> to a newer version, enter ????????????.

## Next Step:

After you've installed your Kubernetes Cluster with <span class="GeneralApplatix Platform Name">Argo</span>, the next step is to [Configure Argo to Build and Run Code](#/docs;doc=%2Fintro-connect-cluster-build.md).
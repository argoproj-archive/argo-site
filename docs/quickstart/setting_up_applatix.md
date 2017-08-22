# Setting Up <span class="GeneralKubernetes Cluster with Argo">Argo</span> In Your AWS Account

After your <span class="GeneralApplatix Platform Name">Argo</span> account manager has created an Argo account for you, you can go to the <span class="GeneralApplatix Platform Name">Argo</span> SaaS portal to complete the setup of your account and install <span class="GeneralKubernetes Cluster with Argo">Argo</span> on Amazon Web Services (AWS). At the end of this process, you can start using <span class="GeneralApplatix Platform Name">Argo</span> in your AWS account.

### Step 1: Completing the Set Up of Your <span class="GeneralApplatix Platform Name">Argo</span> Account

From the email with setup instructions from <span class="GeneralApplatix Platform Name">Argo</span>, click on the link in the email to proceed. Or alternatively, navigate to [<span class="Hyperlink">https://portal.applatix.com</span>](https://portal.applatix.com).

Enter the requested information to complete the setup of your account.

NOTE: Items marked with " * " are mandatory.

![/Users/saradhi/Desktop/User Guide/Screenshots/Setup-Account.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/setting_up_applatix_in_your_561x311.png)

After you successfully complete registration, the software will guide you to create and configure an environment for installing the <span class="GeneralApplatix Platform Name">Argo</span> software in your AWS account.

### <a name="_Toc482371843"></a>Step 2: Installing a New Environment

In this step, you configure the environment in AWS that the <span class="GeneralKubernetes Cluster with Argo">Argo</span> cluster runs in. This involves setting the name of your cluster, the physical location of the cluster, the network IP addresses that are allowed to access the cluster, and (optionally) additional users who can access the cluster.

*   By default, the Environments tab is selected and it displays your current environments (NOTE: 1<sup>st</sup> time users will see a message “No Environments exist.” In this case, click “Create an Environment”.)

![](docs/images/applatix_quick_start_guide_final_release2.1_draft/setting_up_applatix_in_your_1_507x92.png)

*   Click the + button. (Install Your Environment page displays)

![](docs/images/applatix_quick_start_guide_final_release2.1_draft/setting_up_applatix_in_your_2_507x207.png)

*   In AWS and Cluster Details, enter or select the following information:

*   ENVIRONMENT NAME - The name of the new environment.

*   AWS REGION - The AWS Region you place the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

*   PLACEMENT - The AWS Availability Zone for the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

*   CREATE NEW VPC – Enter the subnet IP address for your Virtual Private Cloud (VPC) that the <span class="GeneralKubernetes Cluster with Argo">Argo</span> runs in.

*   USE EXISTING VPC – If you already have a VPC in a public cloud, then enter the ID for the VPC.

*   CHOOSE CONFIGURATION SIZE - The size of the cluster (Small, Medium, Large, and XLarge).

*   CHOOSE SPOT INSTANCE USAGE – Partial means spot instances are used only part of the time.

*   In Security Setup, enter the following information:

*   TRUST CIDR - The network IP addresses that are allowed to access your cluster

*   IAM ROLE - The Cross Account Role (which you created earlier) to use for accessing the <span class="GeneralKubernetes Cluster with Argo">Argo</span> in AWS.

*   When you are satisfied with your entries, click Install to proceed.

See the following table for details on the parameters.

<table xmlns="">

<thead>

<tr>

<th>

Parameter Name

</th>

<th>

Description

</th>

<th>

Format Requirement

</th>

<th>

Example

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

Environment Name

</td>

<td>

The name you use to identify your <span class="GeneralKubernetes Cluster with Argo">Argo</span> environment. This will also be used as your cluster name prefix.

</td>

<td>

*   Letters or numbers. Use "_" or "-" characters to represent spaces.
*   Minimum of 2 characters.
*   Maximum of 16 characters.
*   Regular expression for environment name:  
    [A-Za-z0-9]([-A-Za-z0-9_]*)?[A-Za-z0-9]$

</td>

<td>

ax_dev_cluster-1

</td>

</tr>

<tr>

<td>

AWS Region

</td>

<td>

The AWS region you want to place the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

</td>

<td>

Choose one from the dropdown list.

</td>

<td></td>

</tr>

<tr>

<td>

Placement

</td>

<td>

The AWS availability zone you want to place the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

</td>

<td>

Choose one from the dropdown list.

</td>

<td></td>

</tr>

<tr>

<td>

Choose Configuration Size

</td>

<td>

This is the size of the <span class="GeneralKubernetes Cluster with Argo">Argo</span> that you want.

</td>

<td>

Choose one from the following sizes of EC2 instances:

*   SMALL (scales to a maximum of 5 nodes. Recommended for running proof-of-concept (POC) workloads).  
    Master node size: m3.medium instance  
    Cluster node size:  
    m3.large instance  

*   MEDIUM (scales to a maximum of 10 nodes. Recommended if you only want to try out the <span class="GeneralApplatix Platform Name">Argo</span> solution).  
    Master node size:  
    m3.large Instance  
    Cluster node size:  
    m3.large instance  

*   LARGE (scales to a maximum of 20 nodes. Recommended if you want to use Argo for a small group)  
    Master node size: r3.large instance  
    Cluster node size:  
    m3.large  

*   XLARGE (scales to a maximum of 30 nodes. Recommended if you want to deploy <span class="GeneralApplatix Platform Name">Argo</span> for moderate workload for a large group)  
    Master node size: r3.2xlarge
*   Cluster node size:  
    m3.2xlarge

</td>

<td></td>

</tr>

<tr>

<td>

Subnet CIDR

</td>

<td>

The private subnet IP range for the <span class="GeneralKubernetes Cluster with Argo">Argo</span> nodes in your Virtual Public Cloud (VPC).

</td>

<td>

*   Must be a /16 CIDR block

*   Must be private IP address
*   Cannot overlap 10.0.0.0/8
*   Default value is 172.20
*   You can choose from the following ranges:

*   172.16.0.0/16 ~ 172.31.0.0/16
*   192.168.0.0/16

</td>

<td>

172.25.0.0/16

</td>

</tr>

<tr>

<td>

Trusted CIDR

</td>

<td>

One or more IP ranges that can access the <span class="GeneralKubernetes Cluster with Argo">Argo</span> you create. Typically, you add the IP addresses that your company uses.

</td>

<td>

Multiple valid IP addresses in the Classless Inter-Domain Routing (CIDR) scheme. After you enter a CIDR, press `enter` to confirm.

TIP: Obtain a list of company-approved IP addresses that can be used as valid values for the Trusted CIDR field before you enter any value(s).

Click Add CIDR to another IP address range that can access the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.

Click Add My IP to add the public IP address you are currently using to browse non-private network content.

NOTE: The Add My IP button is a convenient way to add the current public IP address to access the <span class="GeneralKubernetes Cluster with Argo">Argo</span>. However, this IP address might not work when accessing the cluster. Why?

1.  The IP address could come from an external network (such as your home network)
2.  The IP address could change (such as your company could use multiple public IP addresses and switch among them for load balancing). 

Because it’s difficult to change the IP addresses after they are entered, <span class="GeneralApplatix Platform Name">Argo</span> recommends that you first check for the list of company-approved IP addresses and those that are external to the company.

</td>

<td>

1.1.1.1/32

2.2.2.2/32

3.3.3.0/24

</td>

</tr>

<tr>

<td>

Trust Applatix Support

</td>

<td>

By checking this box, <span class="GeneralApplatix Platform Name">Argo</span> adds its company IP to your cluster security group, which allows <span class="GeneralApplatix Platform Name">Argo</span> to connect to your cluster for troubleshooting purposes.

</td>

<td>

Click the checkbox.

</td>

<td></td>

</tr>

<tr>

<td>

IAM Role

</td>

<td>

The Amazon Resource Name (ARN) of the cross account role you created to allow <span class="GeneralKubernetes Cluster with Argo">Argo</span> to install a cluster on your AWS account.

</td>

<td>

From AWS, you must copy the ARN value for the cross account role.

</td>

<td>

arn:aws:iam::123456789012:role/  
AllowPortalInstall

</td>

</tr>

</tbody>

</table>

*   Click "Environments" tab and you can find that the new environment is installing. You can click "Details" to view the cluster installation logs.

NOTE: Cluster creation can take up to 20 minutes. When the cluster is installed, you can access it by clicking the URL.

![](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_2_625x255.png)

At this point, you are ready to run jobs on your <span class="GeneralKubernetes Cluster with Argo">Argo</span> within AWS.

NOTE: To upgrade the <span class="GeneralKubernetes Cluster with Argo">Argo</span> to a newer version, click <span class="UI_element">UPGRADE</span>.
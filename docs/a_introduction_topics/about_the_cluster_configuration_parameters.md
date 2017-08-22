# About the <span class="GeneralApplatix Platform Name">Argo</span> Configuration Parameters

<table style="margin-left: 0;margin-right: auto;" xmlns=""><colgroup><col> <col> <col> <col></colgroup>

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

The name you use to identify your <span class="GeneralApplatix Platform Name">Argo</span> environment. This will also be used as your cluster name prefix.

</td>

<td>

*   Letters or numbers. Use "_" or "-" characters to represent spaces.
*   Minimum of 2 characters.
*   Maximum of 16 characters.
*   Regular expression for environment name:  
    `[A-Za-z0-9]([-A-Za-z0-9_]*)?[A-Za-z0-9]<td

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

The AWS region you want to place the <span class="GeneralApplatix Platform Name">Argo</span> cluster.

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

The AWS availability zone you want to place the <span class="GeneralApplatix Platform Name">Argo</span> cluster.

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

This is the size of the <span class="GeneralApplatix Platform Name">Argo</span> cluster that you want.

</td>

<td>

Choose one from the following <madcap:conditionaltext data-mc-conditions="General.Version224">types of</madcap:conditionaltext> EC2 instances:

*   <span class="UI_element">Standard</span> ("General Purpose")
*   <span class="UI_element">Compute Optimized</span>

NOTE: The number in parentheses indicates the number of node instances. For example, (2) indicates two node instances.

STANDARD

*   <span class="UI_element">SMALL</span> (Recommended for running proof-of-concept (POC) workloads).  
    **Master** node size: **m3.medium** (1)  
    <span class="UI_element"><span class="GeneralApplatix System">Argo</span></span> node size: **m3.large** (2)  
    <span class="UI_element">User</span> node size: **m3.large** (maximum 3)  

*   <span class="UI_element">MEDIUM</span> (Recommended if you only want to try out the Applatix solution).  
    **Master** node size: **m3.large** (1)  
    <span style="font-weight: bold;" class="GeneralApplatix System">Argo</span> node size: **m3.large** (2)  
    <span class="UI_element">User</span> node size: **m3.large** (maximum 8)  

*   <span class="UI_element">LARGE</span> (Recommended if you want to use Applatix for a small group)  
    <span class="UI_element">Master</span> node size: **r3.large** (1)  
    <span style="font-weight: bold;" class="GeneralApplatix System">Argo</span> node size: **m3.large** (3)  
    <span class="UI_element">User</span> node size: **m3.large** (maximum 17)
*   <span class="UI_element">XLARGE</span> (Recommended if you want to deploy Applatix for moderate workload for a large group)  
    <span class="UI_element">Master</span> node size: **r3.2xlarge** (1)  
    <span style="font-weight: bold;" class="GeneralApplatix System">Argo</span> node size: **m3.2xlarge** (2)  
    <span class="UI_element">User</span> node size: **m3.2xlarge** (maximum 28)

COMPUTE OPTIMIZED

*   <span class="UI_element">SMALL</span>  
    <span class="UI_element">Master</span> node size: **m3.medium** (1)  
    <span class="UI_element"><span class="GeneralApplatix System">Argo</span></span> node size: **m3.large** (2)  
    <span class="UI_element">User</span> node size: **c3.2xlarge** (maximum 2)
*   <span class="UI_element">MEDIUM</span>  
    <span class="UI_element">Master</span> node size: **m3.large** (1)  
    <span class="UI_element"><span class="GeneralApplatix System">Argo</span></span> node size: **m3.large** (2)  
    <span class="UI_element">User</span> node size: **c3.2xlarge** (maximum 5)
*   <span class="UI_element">LARGE</span>  
    <span class="UI_element">Master</span> node size: **r3.large** (1)  
    <span class="UI_element"><span class="GeneralApplatix System">Argo</span></span> node size: **m3.large** (3)  
    <span class="UI_element">User</span> node size: **c3.2xlarge** (maximum 10)
*   <span class="UI_element">XLARGE</span>  
    <span class="UI_element">Master</span> node size: **r3.xlarge** (1)  
    <span class="UI_element"><span class="GeneralApplatix System">Argo</span></span> node size: **m3.xlarge** (3)  
    <span class="UI_element">User</span> node size: **c3.2xlarge** (maximum 20)

</td>

<td></td>

</tr>

<tr>

<td>

Subnet CIDR

</td>

<td>

The private subnet IP range for the <span class="GeneralApplatix Platform Name">Argo</span> cluster nodes in your Virtual Public Cloud (VPC).

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

One or more IP ranges that can access the <span class="GeneralApplatix Platform Name">Argo</span> cluster you create. Typically, you add the IP addresses that your company uses.

</td>

<td>

Multiple valid IP addresses in the Classless Inter-Domain Routing (CIDR) scheme. After you enter a CIDR, press `enter` to confirm.

TIP: Obtain a list of company-approved IP addresses that can be used as valid values for the Trusted CIDR field before you enter any value(s).

Click <span class="UI_element">Add CIDR</span> to another IP address range that can access the <span class="GeneralApplatix Platform Name">Argo</span> cluster.

Click <span class="UI_element">Add My IP</span> to add the public IP address you are currently using to browse non-private network content.

NOTE: The Add My IP button is a convenient way to add the current public IP address to access the Applatix cluster. However, this IP address might not work when accessing the cluster because

1.  The IP address could come from an external network (such as your home network)
2.  The IP address could change (such as your company could use multiple public IP addresses and switch among them for load balancing). 

Because it’s difficult to change the IP addresses after they are entered, Applatix recommends that you first check for the list of company-approved IP addresses and those that are external to the company.

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

By checking this box, Applatix adds its company IP to your cluster security group, which allows Applatix to connect to your cluster for troubleshooting purposes.

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

The Amazon Resource Name (ARN) of the cross account role you created to allow Applatix to install a cluster on your AWS account.

</td>

<td>

From AWS, you must copy the ARN value for the cross account role.

</td>

<td>

arn:aws:iam::  
123456789012:role/  
AllowPortalInstall

</td>

</tr>

</tbody>

</table>
# FAQs

Q. When my test fails, I can't don't see any failure messages in my logs.

A. You need to identify where in the process of running a job the failure occurred. From the Jobs view in the Timeline of the Argo Web UI, look for the left-most container or workflow that has a red circle. This indicates the part of the process that failed. For example, if the deployment step shows a red circle and there are no error messages in that log, this means the failure occurred earlier in the process. In this case, you could check an earlier step, such as the workflow logs to see what part of the YAML code failed.

Q. My YAML code failed on one of the parameters.

A. Your YAML code was grabbing something that wasn't created. Argo has YAML checker to verify that the YAML code is valid.

Q. How does Argo manage artifacts that are produced by a job?

A. There are two ways Argo manages artifacts. Internally, the Argo system manages artifacts for you. Use the internal system when you only need to use them for an application? Create names for the artifact and you can reference them in any workflow or job. The other method is to use an external storage system to manage your artifacts. This is useful when you need to distribute binary files. Argo is pre-integrated with the Nexus Repository for storing artifacts.

Q. How do I find out how much usage the Kubernetes cluster is using versus Argo cluster in the AWS system?

A. Use the Argo Claudia application to learn where your resources are being consumed in AWS. For each AWS account, you have groups that you can view. Claudia allows you to create custom groups so you can view more specific subsets of the AWS cost and usage. You can view data as recent as the last few minutes instead of having to wait 12 hours before the next AWS report is available.

Q. Why should I run spot instances versus on-demand? Aren't spot instances more costly to run?

A. The proper use of spot instances in AWS can dramatically reduce your spend on running instances. (How do you do this?)

Q. My workflow is failing and I'm getting this log message "`ax_gzip_ax: stdout: Cannot allocate memory`". How can I fix this?

A. For this type of message, Argo recommends that you increase the `mem_mib` setting in the corresponding container template.

<a name="MinResourceType4AWS"></a>Q. What are the minimum resource requirements for Argo if I'm running it on AWS?

A. You must have a Virtual Private Cloud (VPC) with a subnet that can access a NAT gateway. (The creator instance will need to download the software to install.) Along with the VPC, you must provision the resource types listed in the following table:

NOTE: For EC2 Instance Type, choose either **STANDARD** or **COMPUTE OPTIMIZED**.

<table>
     <col style="width: 412px;" />
     <col />
     <thead>
         <tr>
             <th>
                 <p>Resource Type</p>
             </th>
             <th>
                 <p>Count</p>
             </th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>
                 <p>Elastic IP</p>
             </td>
             <td>
                 <p>1</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>Virtual Private Cloud (VPC)</p>
             </td>
             <td>
                 <p>1</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>S3 Buckets</p>
             </td>
             <td>
                 <p>2</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>EC2 Instance Type: STANDARD</p>
                 <p>Cluster Size: SMALL<br /><b>Master</b> node size: m3.medium</p>
                 <p><b>System</b> node size: m3.large</p>
                 <p><b>User</b> node size: m3.large</p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p>1</p>
                 <p>2</p>
                 <p>1</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>EC2 Instance Type: STANDARD</p>
                 <p>Cluster Size:  MEDIUM<br /></p>
                 <p><b>Master</b> node size: m3.large </p>
                 <p><b> System</b> node size: m3.large</p>
                 <p><b>User</b> node size: m3.large</p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p>1</p>
                 <p>2</p>
                 <p>1</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>EC2 Instance Type: STANDARD</p>
                 <p>Cluster Size: LARGE</p>
                 <p><b>Master</b> node size: r3.large</p>
                 <p><b> System</b> node size: m3.large</p>
                 <p><b>User</b> node size: m3.large </p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p>1</p>
                 <p>3</p>
                 <p>1</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>EC2 Instance Type: STANDARD</p>
                 <p>Cluster Size: XLARGE</p>
                 <p><b>Master</b> node size: r3.2xlarge</p>
                 <p><b> System</b> node size: m3.2xlarge</p>
                 <p><b>User</b> node size: m3.2xlarge</p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p>1</p>
                 <p>2</p>
                 <p>1</p>
             </td>
         </tr>
         <tr MadCap:conditions="General.Version224">
             <td>
                 <p>EC2 Instance Type: COMPUTE OPTIMIZED</p>
                 <p>
Cluster Size: SMALL </p>
                 <p><b>Master</b> node size: m3.medium
</p>
                 <p><b> System</b> node size: m3.large</p>
                 <p><b>User</b> node size: c3.2xlarge </p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p>1</p>
                 <p> 2</p>
                 <p>1</p>
             </td>
         </tr>
         <tr MadCap:conditions="General.Version224">
             <td>
                 <p>

EC2 Instance Type:  COMPUTE OPTIMIZED</p>
                 <p>Cluster Size: MEDIUM </p>
                 <p><b>Master</b> node size: m3.large
</p>
                 <p><b> System</b> node size: m3.large </p>
                 <p><b>User</b> node size: c3.2xlarge
</p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p>1</p>
                 <p>2</p>
                 <p>1</p>
             </td>
         </tr>
         <tr MadCap:conditions="General.Version224">
             <td>
                 <p>EC2 Instance Type:  COMPUTE OPTIMIZED
</p>
                 <p>Cluster Size: LARGE</p>
                 <p><b>Master</b>node size: r3.large</p>
                 <p><b> System</b> node size: m3.large</p>
                 <p><b>User</b> node size: c3.2xlarge</p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p> 1</p>
                 <p> 3</p>
                 <p>1</p>
             </td>
         </tr>
         <tr MadCap:conditions="General.Version224">
             <td>
                 <p>EC2 Instance Type: COMPUTE OPTIMIZED</p>
                 <p>Cluster Size:  

XLARGE</p>
                 <p><b>Master</b> node size: r3.xlarge</p>
                 <p><b> System</b> node size: m3.xlarge</p>
                 <p><b>User</b> node size: c3.2xlarge </p>
             </td>
             <td>
                 <p>&#160;</p>
                 <p>&#160;</p>
                 <p> 1</p>
                 <p> 3
</p>
                 <p>1</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>Auto Scaling Group</p>
             </td>
             <td>
                 <p>3</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>Launch Configuration</p>
             </td>
             <td>
                 <p>3</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>Elastic Load Balancer<b>\*</b><br /></p>
             </td>
             <td>
                 <p>2</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>Server certificates stored in an AWS account<b>\*\*</b></p>
             </td>
             <td>1</td>
         </tr>
         <tr>
             <td colspan="2">
                 <p><b>\*</b> If you are using webhooks, add 1 more Elastic Load Balancer.</p>
                 <p><b>\*\*</b> To check the number of server certificates you are currently using on AWS, you can use the AWS Command-Line Interface (CLI) to access this information. For instructions, see the <a href="https://aws.amazon.com/documentation/cli/">AWS CLI documenation</a>. The default AWS maximum quota for server certificates is 20. If you have reached the limit for this entity, you can submit a request to AWS to increase your quota or you can remove any existing server certificates. For instructions on increasing your quota, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Limits</a>.</p>
             </td>
         </tr>
     </tbody>
 </table>

 Argo will autoscale the Cluster with additional instances to meet an increased workload.

 To view your resource limits, click the **Limits** tab on your AWS EC2 page.

 ![AWS_Limits_page](./../../images/check_your_amazon_resources_380x232.png)

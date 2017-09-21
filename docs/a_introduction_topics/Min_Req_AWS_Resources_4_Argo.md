# Prerequisites for Argo to Run on AWS

<a name="MinResourceType4AWS"></a>To enable Argo to run in AWS, you must meet the following minimum AWS resource requirements:

* A Virtual Private Cloud (VPC) with a subnet that can access a NAT gateway. (The creator instance will need to download the software to install.)
* You must provision the resource types listed in the following table:

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
                 <p>Elastic Load Balancer<b> &#42;</b><br/></p>
             </td>
             <td>
                 <p>2</p>
             </td>
         </tr>
         <tr>
             <td>
                 <p>Server certificates stored in an AWS account<b> &#42;&#42;</b></p>
             </td>
             <td>1</td>
         </tr>
         <tr>
             <td colspan="2">
                 <p><b>&#42;</b> If you are using webhooks, add 1 more Elastic Load Balancer.</p>
                 <p><b>&#42;&#42;</b> To check the number of server certificates you are currently using on AWS, you can use the AWS Command-Line Interface (CLI) to access this information. For instructions, see the <a href="https://aws.amazon.com/documentation/cli/">AWS CLI documenation</a>. The default AWS maximum quota for server certificates is 20. If you have reached the limit for this entity, you can submit a request to AWS to increase your quota or you can remove any existing server certificates. For instructions on increasing your quota, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Limits</a>.</p>
             </td>
         </tr>
     </tbody>
 </table>

 Argo will autoscale the Cluster with additional instances to meet an increased workload.

 To view your resource limits, click the **Limits** tab on your AWS EC2 page.

 ![AWS_Limits_page](./../../images/check_your_amazon_resources_380x232.png)

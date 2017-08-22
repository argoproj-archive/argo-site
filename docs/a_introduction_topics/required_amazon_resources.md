# <a name="top"></a>Check Your Amazon Resources for <span class="GeneralApplatix Platform Name">Argo</span>

To enable an <span class="GeneralKubernetes Cluster with Argo">Argo</span> to run in AWS, you must meet the following requirements:

*   A Virtual Private Cloud (VPC) with a subnet that can access a NAT gateway. The creator instance will need to download the software to install.
*   The minimum resource quota requirements for each Applatix cluster (environment) you run in AWS

    NOTE: For EC2 instances, you choose either the Standard type or the Compute Optimized type.

    <table><colgroup><col style="width: 412px;"> <col></colgroup>

    <thead>

    <tr>

    <th>

    Resource Type

    </th>

    <th>

    Count

    </th>

    </tr>

    </thead>

    <tbody>

    <tr>

    <td>

    Elastic IP

    </td>

    <td>

    1

    </td>

    </tr>

    <tr>

    <td>

    Virtual Private Cloud (VPC)

    </td>

    <td>

    1

    </td>

    </tr>

    <tr>

    <td>

    S3 Buckets

    </td>

    <td>

    2

    </td>

    </tr>

    <tr>

    <td>

    EC2 Instance Type: STANDARD

    Cluster Size: SMALL  
    **Master** node size: m3.medium

    **Applatix System** node size: m3.large

    **User** node size: m3.large

    </td>

    <td>

    1

    2

    1

    </td>

    </tr>

    <tr>

    <td>

    EC2 Instance Type: STANDARD

    Cluster Size: MEDIUM  

    **Master** node size: m3.large

    **Applatix System** node size: m3.large

    **User** node size: m3.large

    </td>

    <td>

    1

    2

    1

    </td>

    </tr>

    <tr>

    <td>

    EC2 Instance Type: STANDARD

    Cluster Size: LARGE

    **Master** node size: r3.large

    **Applatix System** node size: m3.large

    **User** node size: m3.large

    </td>

    <td>

    1

    3

    1

    </td>

    </tr>

    <tr>

    <td>

    EC2 Instance Type: STANDARD

    Cluster Size: XLARGE

    **Master** node size: r3.2xlarge

    **Applatix System** node size: m3.2xlarge

    **User** node size: m3.2xlarge

    </td>

    <td>

    1

    2

    1

    </td>

    </tr>

    <tr data-mc-conditions="General.Version224">

    <td>

    EC2 Instance Type: COMPUTE OPTIMIZED

    Cluster Size: SMALL

    **Master** node size: m3.medium

    **Applatix System** node size: m3.large

    **User** node size: c3.2xlarge

    </td>

    <td>

    1

    2

    1

    </td>

    </tr>

    <tr data-mc-conditions="General.Version224">

    <td>

    EC2 Instance Type: COMPUTE OPTIMIZED

    Cluster Size: MEDIUM

    **Master** node size: m3.large

    **Applatix System** node size: m3.large

    **User** node size: c3.2xlarge

    </td>

    <td>

    1

    2

    1

    </td>

    </tr>

    <tr data-mc-conditions="General.Version224">

    <td>

    EC2 Instance Type: COMPUTE OPTIMIZED

    Cluster Size: LARGE

    **Master**node size: r3.large

    **Applatix System** node size: m3.large

    **User** node size: c3.2xlarge

    </td>

    <td>

    1

    3

    1

    </td>

    </tr>

    <tr data-mc-conditions="General.Version224">

    <td>

    EC2 Instance Type: COMPUTE OPTIMIZED

    Cluster Size: XLARGE

    **Master** node size: r3.xlarge

    **Applatix System** node size: m3.xlarge

    **User** node size: c3.2xlarge

    </td>

    <td>

    1

    3

    1

    </td>

    </tr>

    <tr>

    <td>

    Auto Scaling Group

    </td>

    <td>

    3

    </td>

    </tr>

    <tr>

    <td>

    Launch Configuration

    </td>

    <td>

    3

    </td>

    </tr>

    <tr>

    <td>

    Elastic Load Balancer*****  

    </td>

    <td>

    2

    </td>

    </tr>

    <tr>

    <td>

    Server certificates stored in an AWS account******

    </td>

    <td>1</td>

    </tr>

    <tr>

    <td colspan="2">

    ***** If you are using webhooks, add 1 more Elastic Load Balancer.

    ****** To check the number of server certificates you are currently using on AWS, you can use the AWS Command-Line Interface (CLI) to access this information. For instructions, see the [AWS CLI documenation](https://aws.amazon.com/documentation/cli/). The default AWS maximum quota for server certificates is 20\. If you have reached the limit for this entity, you can submit a request to AWS to increase your quota or you can remove any existing server certificates. For instructions on increasing your quota, see [AWS Service Limits](http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html).

    </td>

    </tr>

    </tbody>

    </table>

Applatix will autoscale the Cluster with additional instances to meet an increased workload.

To view your resource limits, click the <span class="UI_element">Limits</span> tab on your AWS EC2 page.

![](docs/images/applatix_quick_start_guide_final_release2.1_draft/check_your_amazon_resources_380x232.png)
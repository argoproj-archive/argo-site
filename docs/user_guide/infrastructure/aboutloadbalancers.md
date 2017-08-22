# Using Load Balancers with <span class="GeneralApplatix Platform Name">Argo</span>

When you create an <span class="GeneralKubernetes Cluster with Argo">Argo</span>, , <span class="GeneralApplatix Platform Name">Argo</span> sets up a Load balancer that is available from the public Internet. (referred as the "External ELB"). This Load balancer is the entry point for all external traffic to the <span class="GeneralKubernetes Cluster with Argo">Argo</span>. For example, when you integrate <span class="GeneralApplatix Platform Name">Argo</span> with any external system such as an artifact repository, issue tracking system (JIRA), event notification system (Slack or email), all the traffic accesses the <span class="GeneralKubernetes Cluster with Argo">Argo</span> through this External ELB.

The External ELB inherits the IP addresses that were entered as Trusted CIDRs in the <span class="GeneralApplatix SaaS Portal">Argo Portal</span>. The ELB listens on port 80 (HTTP) and port 443 (HTTPS). To add or delete CIDR addresses, see [Modifying the Trusted CIDRs for Accessing Load Balancers](#Modifyin).

While Applatix provides a self-signed certificate for port 443, <span class="GeneralApplatix Platform Name">Argo</span> recommends that you replace this certificate with a wildcard certificate for the subnet that your <span class="GeneralKubernetes Cluster with Argo">Argo</span> uses. For details, see [Replacing the ELB Security Certificate for HTTPS Access](#Replacin).

If your deployment specifies external_routes, this means the deployment is accessible from the public Internet using the External ELB.

After you complete the following tasks, you can use the Load Balancer with your <span class="GeneralKubernetes Cluster with Argo">Argo</span> to receive traffic from the appropriate deployments.

## <a name="FindingExternalELB"></a>Finding Your External ELB

Log into your AWS Console and go to <span class="UI_element">EC2</span> > <span class="UI_element">Load Balancers</span> > <span class="UI_element">Tags</span> . Look for the Load Balancer associated with your Cluster that has these tags:

TIP: The easiest way to locate your Cluster's Load Balancers is to look at its creation date.

*   <span class="UI_element">KubernetesCluster</span> `your_cluster_Id` (such as myApplatixCluster-81cf2621-fe98-40a7-add8-d68bec87e663)
*   <span class="UI_element">InternalElb</span> `false`

TIP: The easiest way to locate your Cluster's Load Balancers is to look at its creation date.

This is your External ELB.

![](../docs/images/aws_external_elb_tags_514x416.png)

NOTE: To set up a load balancer that is only accessible from applications within a <span class="Generalprivate network">VPC</span> that the <span class="GeneralKubernetes Cluster with Argo">Argo</span> is connected to, see [Adding an Internal Elastic Load Balancer](#/docs;doc=%2F..%2Fyaml%2Fex_adding_a_private_elastic_load_balancer.md).

## <a name="Modifyin"></a>Modifying the Trusted CIDRs for Accessing Load Balancers

1.  Go to <span class="UI_element">EC2</span> > <span class="UI_element">Load Balancers</span> > <span class="UI_element">Description</span>.

    ![](../docs/images/aws_ec2_security_groups_external_elb_558x468.png)

2.  Scroll down to <span class="UI_element">Security</span> under <span class="UI_element">Source Security Group</span> and click the link that starts with `sg-xxxxxxx`.
3.  Select the desired Security Group and click <span class="UI_element">Inbound Rules</span>.

    ![](../docs/images/aws_ec2_security_groups_external_elb_2ndscreen_414x432.png)

4.  Click <span class="UI_element">Edit</span>.
5.  Make your changes or click <span class="UI_element">Add another rule</span>.

    NOTE: Make sure that the protocols are set to HTTP or HTTPS. Applications running in the <span class="GeneralKubernetes Cluster with Argo">Argo</span> do not use the SSH protocol. Traffic is not routed to applications or deployments if you use SSH.

6.  Click <span class="UI_element">Save</span>.

## <a name="Replacin"></a>Replacing the ELB Security Certificate for HTTPS Access

1.  Go to <span class="UI_element">EC2</span> > <span class="UI_element">Load Balancers</span> > <span class="UI_element">Listeners</span>.

    ![](../docs/images/aws_ec2_security_groups_external_elb_listenerscreen_543x440.png)

2.  Under <span class="UI_element">HTTPS</span>, <span class="UI_element">SSL Certificate</span>, click <span class="UI_element">Change</span>.

    ![](../docs/images/aws_ec2_security_groups_external_elb_selectcertdialog_484x321.png)

3.  Select one of the three options (such as to upload a new certificate, select <span class="UI_element">Upload a new SSL certificate to AWS Identity and Access Management (IAM)</span>).
4.  Enter your certificate information.
5.  Click <span class="UI_element">Save</span>.

NOTE: Make sure that your edits to the Listener section do **not** affect or modify the <span class="UI_element">Instance Port</span>. The <span class="GeneralKubernetes Cluster with Argo">Argo</span> assigns this port number for listening to inbound traffic. If your edits cause this port number to change, the Cluster cannot receive the inbound traffic.
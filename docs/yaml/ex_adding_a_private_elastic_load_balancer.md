# Adding an Internal Elastic Load Balancer

When you create an Argo Cluster, Argo automatically:

*   Sets up an External Elastic load balancer (External ELB) that sits outside of Cluster but within the AWS VPC. The External ELB routes all traffic from the Internet to the apps inside your Argo Cluster (which are running as containers on EC2 instances).
*   Applies the Trusted CIDR IP addresses you entered in the Argo SaaS portal as inbound rules to the External ELB's security group.

To access applications running on the cluster using private IPs without traversing the Internet, you can create an Internal Elastic Load Balancer (Internal ELB). An internal ELB works just like an external ELB except that it can only be accessed internally using private IPs and not from the Internet. The Internal ELB sits inside the Cluster and sends any requests from the same VPC or subnet to the Cluster.

<!--![](docs/images/internal_load_balancer.png)-->

By default all apps deployed in Argo cluster will be accessed through External ELB.

However, if you want to deploy apps in Argo cluster and want to access them through the internal ELB, then you must run a workflow YAML template called "`ax_private_elb_creator_workflow`", which sets the tag Internal ELB to `true`.

Here's the procedure to create an Internal ELB that is accessible to your deployed apps outside or inside your Argo:

1.  (AWS) Under **EC2**, check that the "Trusted CIDR" addresses in your Security Groups are correct for accessing your Argo Cluster.
2.  (AWS) Under Load Balancer, select a pre-configured internal load balancer that has the tags KubernetesCluster and InternalELB.

    ![ec2_load_balancer_settings](./../../images/ec2_load_balancer_clustername-id_ilb_tag.png)

3.  (AWS) Under Load Balancer > Tags, check that the Internal ELB field is set to `false`(which is the default).
4.  (Argo) From Templates, run the `ax_private_elb_creator_workflow` template. When the workflow completes, it creates an Internal ELB.

5.  (AWS) Under Load Balancer > Tags, check that the Internal ELB field is now set to `true`.

    NOTE: Check that the Kubernetes tag for the Load balancer is the same tag as the Kubernetes tag in the Argo cluster.

    Also check that the security group is the same as the Argo's security group.

    ![](./../../images/aws_ec2_security_groups_internal_elb_setting_743x502.png)

6.  (Argo) In the deployment YAML template go to the `external_routes` section and make these changes:

    *   Add a new field named `visibility`.
    *   Set the value of the `visibility` to "`organization`" (accessible only to traffic internal to the VPC -"private") or leave it at the default "`world`" (accessible to all traffic external to the VPC - "public").

    Here are the YAML code snippets for pointing your deployment to an Internal ELB for public or private visibility:

    Public Deployment

    ```
type: deployment
    name: webserver-template
    deployment:
      name: public-http
    scale:
      min: 1
    external_routes:
    - name: webapp
      dns_prefix: public
      target_port: 80
      ip_white_list:
      - 0.0.0.0/0
      **visibility: world**
```

    Private Deployment

    ```
type: service_template
    subtype: deployment
    name: webserver-template
    deployment:
      name: private-http
    scale:
      min: 1
    external_routes:
    - name: webapp
      dns_prefix: private
      target_port: 80
      ip_white_list:
      - 0.0.0.0/0
      **visibility: organization**
```

At this point, your applications that are outside of the Argo can now communicate with the apps inside the Cluster on the same VPC.

For more details about editing the YAML templates, see [Deployment Template](./deployment_template.md).

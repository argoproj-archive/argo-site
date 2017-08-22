# Adding an Internal Elastic Load Balancer

When you create an <span class="GeneralApplatix Platform Name">Argo</span> Cluster, <span class="GeneralApplatix Platform Name">Argo</span> automatically:

*   Sets up an External Elastic load balancer (External ELB) that sits outside of Cluster but within the AWS VPC. The External ELB routes all traffic from the Internet to the apps inside your <span class="NewSetApplatix Cluster">Argo Cluster</span> (which are running as containers on EC2 instances).
*   Applies the Trusted CIDR IP addresses you entered in the <span class="GeneralApplatix Platform Name">Argo</span> SaaS portal as inbound rules to the External ELB's security group.

To access applications running on the cluster using private IPs without traversing the Internet, you can create an Internal Elastic Load Balancer (Internal ELB). An internal ELB works just like an external ELB except that it can only be accessed internally using private IPs and not from the Internet.

As the following diagram shows, the Internal ELB sits inside the Cluster and sends any requests from the same VPC or subnet to the Cluster.

![](docs/images/internal_load_balancer.png)

By default all apps deployed in Applatix cluster will be accessed through External ELB.

However, if you want to deploy apps in Applatix cluster and want to access them through the internal ELB, then you must run a workflow <span class="GeneralYAML template">YAML template</span> called "`ax_private_elb_creator_workflow`", which sets the tag <span class="UI_element">Internal ELB</span> to `true`.

Here's the procedure to create an Internal ELB that is accessible to your deployed apps outside or inside your <span class="GeneralKubernetes Cluster with Argo">Argo</span>:

1.  (AWS) Under <span class="UI_element">EC2</span>, check that the "Trusted CIDR" addresses in your <span class="UI_element">Security Groups</span> are correct for accessing your <span class="NewSetApplatix Cluster">Argo Cluster</span>. For details, see [Using Load Balancers with Argo](#/docs;doc=%2Fuser_guide%2Finfrastructure%2Faboutloadbalancers.md)
2.  (AWS) Under <span class="UI_element">Load Balancer</span>, select a pre-configured internal load balancer that has the tags KubernetesCluster and InternalELB. See [Finding Your External ELB](../user_guide/infrastructure/aboutloadbalancers.htm#FindingExternalELB) for details.

    ![](docs/images/ec2_load_balancer_clustername-id_ilb_tag.png)

3.  (AWS) Under <span class="UI_element">Load Balancer</span> > <span class="UI_element">Tags</span>, check that the <span class="UI_element">Internal ELB</span> field is set to `false`(which is the default).
4.  (<span class="GeneralApplatix Platform Name">Argo</span>) From <span class="UI_element">Templates</span>, run the `ax_private_elb_creator_workflow` template. When the workflow completes, it creates an Internal ELB.

5.  (AWS) Under <span class="UI_element">Load Balancer</span> > <span class="UI_element">Tags</span>, check that the <span class="UI_element">Internal ELB</span> field is now set to `true`.

    NOTE: Check that the Kubernetes tag for the Load balancer is the same tag as the Kubernetes tag in the <span class="GeneralApplatix Platform Name">Argo</span> cluster.

    Also check that the security group is the same as the <span class="GeneralKubernetes Cluster with Argo">Argo</span>'s security group.

    ![](docs/images/aws_ec2_security_groups_internal_elb_setting_743x502.png)

6.  (<span class="GeneralApplatix Platform Name">Argo</span>) In the deployment <span class="GeneralYAML template">YAML template</span> go to the `external_routes` section and make these changes:

    *   Add a new field named `visibility`.
    *   Set the value of the `visibility` to "`organization`" (accessible only to traffic internal to the VPC -"private") or leave it at the default "`world`" (accesible to all traffic external to the VPC - "public").

    Here are the YAML code snippets for pointing your deployment to an Internal ELB for public or private visibility:

    Public Deployment

    <pre>type: deployment
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
      **visibility: world**</pre>

    Private Deployment

    <pre>type: service_template
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
      **visibility: organization** </pre>

At this point, your applications that are outside of the <span class="GeneralKubernetes Cluster with Argo">Argo</span> can now communicate with the apps inside the Cluster on the same VPC.

*   For more details about editing the <span class="GeneralYAML Tutorial">Argo YAML Tutorial and Reference</span>, see [Deployment Template](#/docs;doc=deployment_template.md).
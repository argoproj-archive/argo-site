# Deployment Template

A deployment template is the orchestration spec for a long-running service. It includes the additional sections to provide the information about the route, scale, etc. All names used in this template must comply with the following pattern: `^([a-z0-9]([-a-z0-9]*[a-z0-9])?)$`

#### Common Name and Type

*   name: the unique name of the object.

*   type: deployment.

*   description: optional, describes the object for the benefit of the users.

<div xmlns="">

type: deployment

name: apache-example

description: apache deployment example

</div>

#### application

Application is the group concept of deployments. With the same application, deployments could use an internal route to communicate with each other.

*   name: the unique name of the object.

<div xmlns="">

application:

  name: "%%appname%%"

</div>

#### deployment

Unique deployment name is required.

*   name: the unique name of the object.

<div xmlns="">

deployment:

  name: "%%deployname%%"

</div>

#### external_routes

External Route is the route for deployment to be exposed to the internet.

*   name: the unique name of the object within application.

*   dns_prefix: the DNS name prefix to the domain. The default is {RouteName}-{DeploymentName}-{ApplicationName}.

*   dns_domain: the DNS domain. The domain needs to be managed by AWS Route 53\. The cluster domain configuration should be updated before using any domain.

*   target_port: the instance port to be exposed.

*   redirect_http_to_https: indicate whether to redirect all the http traffic to https.

*   ip_white_list: the whitelisted CIDR addresses for security control.
*   visibility: indicates whether the deployment is accessible to the "world" (accesible to all traffic external to the VPC) or "organization" (accessible only to traffic internal to the VPC)

<div xmlns="">

external_routes:

  - name: "web-external"

    dns_prefix: "apache"

    dns_domain: "app.<span class="GeneralApplatix Platform Name">Argo</span>.net"

    target_port: 80

    redirect_http_to_https: true

    ip_white_list:

      - 0.0.0.0/0

    visibility: organization

</div>

#### internal_routes

Internal Route is the route for deployment to be exposed within the cluster.

*   name: the unique name of the object within application.

*   ports: the list of ports to be exposed.

*   name: the unique port name within the deployment.

*   port: the incoming port. (Other deployment can reach this deployment with this port number.)

*   target_port: the internal port to be exposed.

<div xmlns="">

internal_routes:

  - name: "web-internal"

    ports:

      - name: http

        port: 80

        target_port: 80

</div>

#### scale

Scale section is describing the number of replicas/instances for the deployment. A load balancer will be created automatically to load balance among instances when route is configured.  

<div xmlns="">

scale:

  min: 2

</div>

#### containers

Containers to be included in the deployment. The type of YAML template must be “container”. The container script should ensure it is long running, otherwise the container will be rescheduled every time it finishes. Currently, <span class="GeneralApplatix Platform Name">Argo</span> <span style="color: #ff0000;">supports only one container in single deployment instance.</span>  

<div xmlns="">

containers:

  - server:

      template: deployment-container

      parameters:

        PROBE_CMD: sh -c 'ls -l /src'

</div>

#### termination_policy

Both time and spending limit could be specified for the deployment by filling up the termination policy section.  

<div xmlns="">

termination_policy:

  time_seconds: 43200

  spending_cents: 100

</div>
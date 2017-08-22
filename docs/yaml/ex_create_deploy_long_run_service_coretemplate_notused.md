# Creating a Deployment as a Long Running Service

Running a workflow is very useful, but sometimes you also want to deploy and manage long-running services independent of a specific workflow. This is the purpose of the deployment template.

An application defines a namespace that may consist of multiple deployments. Each deployment may be deployed and upgraded independently. In this example, myapp only has one deployment. The services section defines exposed ports. The external services are exposed on the Internet. A DNS name and load balancer will be configured automatically for the deployment. A list of CIDRs allowed access to the service can also be specified. Lastly, we specify the container template that implements the deployment. If desired, liveness or readiness probes can also be specified.

The following example shows how you write the code for a containerized app (an Apache Web Server) that is deployed as a long-running service that is accessible to applications outside of Cluster's private network:

<div class="yaml" xmlns="">

---

type: deployment

name: apache-example

description: apache deployment example

inputs:

  parameters:

    code:

      default: "%%session.artifacts%%"

    appname:

      default: "test-app"

    deployname:

      default: "test-deploy"

application:

  name: "%%appname%%"

deployment:

  name: "%%deployname%%"

scale:

  min: 2

external_routes:

  - name: "web-external"

    dns_prefix: "apache"

    dns_domain: "app.applatix.net"

    target_port: 80

    redirect_http_to_https: true

    ip_white_list:

      - 0.0.0.0/0

    visibility: world

internal_routes:

  - name: "web-internal"

    ports:

      - name: http

        port: 80

        target_port: 80

containers:

  - server:

      template: deployment-container

      parameters:

        PROBE_CMD: sh -c 'ls -l /src'

termination_policy:

  time_seconds: "43200"

  spending_cents: "100"

---

type: container

name: deployment-container

container:

  resources:

    mem_mib: 750

    cpu_cores: 0.3

  image: "httpd:latest"

  docker_options:

  readiness_probe:

    exec:

      command: "%%PROBE_CMD%%"

    initial_delay_seconds: 30

    timeout_seconds: 5

  liveness_probe:

    exec:

      command: "%%PROBE_CMD%%"

    initial_delay_seconds: 30

    timeout_seconds: 5

inputs:

  artifacts:

    - from: "%%code%%"

      path: "/src"

  parameters:

    code:

    PROBE_CMD:

      default: sh -c 'ls -l /src'

labels:

  "release": "M7"

</div>

Notice that the code contains two types of YAML templates:

*   A deployment template, which defines the parameters of a deployment.

*   A corresponding container template, which specifies the implementation of the deployment.

The deployment template has the following sections:

*   The inputs section specifies the parameters that represent the long running service that is deployed.

*   An application defines a namespace that may consist of multiple deployments. Each deployment may be deployed and upgraded independent. In this example, test-app only has one deployment.

*   The scale section defines the number of instances that are used for this deployment.

*   The external_routes and internal routes sections define the exposed ports. The external_routes are the ports that are exposed on the Internet. A DNS name and load balancer will be configured automatically for the deployment. A list of CIDRs allowed access to the service can also be specified. The internal routes section defines the ports that exposed only within the cluster.

*   The containers section specifies the container for the application that will be deployed (in this example, it’s a server application, Apache.

*   The termination_policy defines the maximum length of time and budget cost that the long running service stays alive.

Lastly, you specify the corresponding container template that implements the deployment. This template has the following sections:

*   The resources section defines the memory and CPU that the container uses

*   The image section specifies the image to be used for the app.

*   If desired, you can specify liveness or readiness probes in the readiness_probe or liveness_probe sections.

*   The inputs section specifies the artifacts used in this workflow and the parameters for the input.

*   The labels section specifies the tags to identify the container.
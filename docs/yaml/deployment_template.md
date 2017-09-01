# Deployment Template

A deployment template is the orchestration spec for deploying a long-running service from a workflow. It is a wrapper on top of the Kubernetes deployment and service YAML. It includes the additional sections to provide the information about the route, scale, etc. All names used in this template must comply with the following pattern: `^([a-z0-9]([-a-z0-9]*[a-z0-9])?)$`

#### Common Name and Type

*   `type`: deployment
*   `version`: the Argo DSL version of the YAML template
*   `name`: the unique name of the deployment object
*   `description`: (Optional), describes the object for the benefit of the users.

```
type: deployment
version: 1
name: apache-example
description: apache deployment example
```

#### application_name

The unique name of the application, which is the group concept of deployments. With the same application, deployments can use an internal route to communicate with each other.

```
application_name: myapp
```

#### deployment_name

A unique name for the deployment name is required.

```
deployment_name: mydeployment
```

#### external_routes

External Route is the route for deployment to be exposed to the Internet.

*   `name`: the unique name of the external network object within an application.

*   `dns_prefix`: the DNS name prefix to the domain. The default is `{RouteName}-{DeploymentName}-{ApplicationName}`.]

*   `dns_domain`: the DNS domain. The domain needs to be managed by AWS Route 53\. The cluster domain configuration should be updated before using any domain. For details, see [Install Argo](./../quickstart/intro_argo_quick_start.md).

*   `target_port`: the instance port to be exposed.

*   `redirect_http_to_https`: indicates whether to redirect all the `http` traffic to `https`. Default is `true`.

*   `ip_white_list`: the whitelisted CIDR addresses for security control.
*   `visibility`: indicates whether the deployment is accessible to the "`world`" (accesible to all traffic external to the VPC) or "`organization`" (accessible only to traffic internal to the VPC)

```
external_routes:
  - name: "web-external"
    dns_prefix: "apache"
    dns_domain: "app.Argo.net"
    target_port: 80
    redirect_http_to_https: true
    ip_white_list:
      - 0.0.0.0/0
    visibility: organization
```

#### internal_routes

Internal Route is the route for deployment to be exposed within the cluster.

`name`: the unique name of the internal network object within application..

*   `ports`: the list of ports to be exposed.

*   `port`: the incoming port for the deployment. (Other deployments can reach this deployment using this port number.)

*   `target_port`: the internal port to be exposed.

```
internal_routes:
  - name: "web-internal"
    ports:
      - port: 80
        target_port: 80
```

#### scale

This section describes the number of replicas/instances to create for the deployment. When you configure the AWS 53 routes, AWS automatically creates a load balancer to balance the incoming load among the instances.  

```
scale:
  min: 2
```

#### containers

<!--need example with deployment with inlined container, deployment with container reference------------ -->

Containers to be included in the deployment. You can specify either an image for the container or the container template itself.

The container script should ensure it is long running, otherwise the container will be rescheduled every time it finishes. Currently, Argo supports only one container in a single deployment instance. These are the supported fields:

*   `<name>`: the unique name of the container.
*   `image`: the name of image used for the container.
*   `command`: the name of the command to run on the container
*   `template`: the name of the container template to run.
*   `arguments`; specifies the arguments to pass into the container when it runs

```
containers:                    # declares a container section of the YAML template
  userdb:                      # name of container
    image: postgres:9.6.1      # name of image for container
    command: ["postgresd"]     # command to run on the container
```

#### termination_policy

Specifies time and spending limit for the deployment. Optional. This section has these fields:

*   `time_seconds`: the maximum number of seconds before the deployment is terminated.

*   `spending_cents`: the maximum number of cents spent before the deployment is terminated.


```
termination_policy:
  time_seconds: 43200
  spending_cents: 100
```

## Example of Deployment

This deployment has a named volume attached to a web server container:

```
---
type: deployment
version: 1
name: test-deployment-with-named-volume
description: Deployment which requests a named volume
application_name: test-app
deployment_name: deployment-with-named-volume
external_routes:
- target_port: 80
  ip_white_list:
  - 0.0.0.0/0
volumes:
  data:
    name: "%%inputs.parameters.VOLUME_NAME%%"
containers:
# Name of the container, the YAML template that it uses,
# and the arguments for the container
  WEB:
    template: test-container-with-volume
    arguments:
      volumes.DATA: "%%volumes.data%%"
inputs:
  parameters:
    COMMIT:
      default: "%%session.commit%%"
    REPO:
      default: "%%session.repo%%"
    VOLUME_NAME:
      default: my-test-vol

---
type: container
version: 2
name: test-container-with-volume
image: nginx:latest
resources:
  cpu_cores: 0.05
  mem_mib: 32
inputs:
  volumes:
    DATA:
      mount_path: /data
```

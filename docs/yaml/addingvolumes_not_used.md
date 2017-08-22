# Adding a Volume

When a long-running deployment executes, it may need storage for persisting data. Applatix Platform provides volumes to enable the storage of data. There are two types of volumes that Applatix supports:

*   NAMED volumes persist independently of an application. The volume and its data persist even after an application terminates. NAMED volumes must be declared from the <span class="NewSetApplatix Cluster Console">Argo Web UI</span> (under Infrastructure > Volumes) before they can be referenced in a <span class="NewSetYAML template">YAML template</span>.
*   ANONYMOUS volumes are coupled to the application. When an application is created, the anonymous volume is automatically created. When the application is terminated, the anonymous is automatically terminated. Anonymous volumes are only declared in the <span class="NewSetYAML template">YAML template</span>.

## Required templates for volumes

You'll need to use two types of <span class="NewSetYAML template">YAML template</span>s to implement volumes:

*   Deployment - specifies a section named "Volumes", the name of the volume, the Storage class, and the size of the volume
*   Container - specifies the name of the container image used in a deployment (such as a database, web server) and references the name of the volume that is to be mounted on the <span class="NewSetApplatix Cluster">Argo Cluster</span>

The following pseudo-code shows the specific lines to add to support volumes in the two templates (Deployment and Container):

### Deployment Template

<pre xml:space="preserve" xmlns=""># section name</pre>

<pre xml:space="preserve" xmlns="">Volumes:</pre>

<pre xml:space="preserve" xmlns=""> # Reference to an anonymous volume for deployment</pre>

<pre xml:space="preserve" xmlns=""><reference_to_volume1>:</pre>

<pre xml:space="preserve" xmlns=""> # Storage_class is an Applatix keyword that refers to pre-configured storage provider </pre>

<pre xml:space="preserve" xmlns=""> # and its required parameters that Applatix supports. For example,  "ebs" or 
 # Elastic Block Storage (EBS) is the storage provider for AWS, "gp2" is a type of volume</pre>

<pre xml:space="preserve" xmlns=""> # that EBS has, and "ext4" is a type of file system that EBS uses</pre>

<pre xml:space="preserve" xmlns="">  **Storage_class:** <Applatix_reserved_name_4_class></pre>

<pre xml:space="preserve" xmlns="">  Size: xx GB</pre>

<pre xml:space="preserve" xmlns=""># Reference a named volume for deployment with the "name" reserved word </pre>

> <pre xml:space="preserve"> <reference_to_volume2>:</pre>

<pre xml:space="preserve" xmlns="">    name: <user_created_name></pre>

### Container Template

<pre xml:space="preserve" xmlns=""># Name of image for container</pre>

<pre xml:space="preserve" xmlns="">Image: <database_type or server_type> such as MySQL or HTTP server</pre>

<pre xml:space="preserve" xmlns="">#section name for mounting a volume to the <span class="NewSetApplatix Cluster">Argo Cluster</span></pre>

<pre xml:space="preserve" xmlns="">volume_mounts:</pre>

<pre xml:space="preserve" xmlns=""># Mount path for a volume (such as /var/log)</pre>

<pre xml:space="preserve" xmlns="">- mount-path: <location_to_mount_the_volume> </pre>

<pre xml:space="preserve" xmlns="">  volume: <reference_to_volume></pre>

## Code Example

The following code example shows the following:

*   uses a named volume to store persistent data
*   uses an anonymous volumes to store data for an application while it is running
*   attaches the volumes to an Apache HTTP server
*   uses a workflow to check out the code and deploy the container for the HTTP server

The code marked in **bold**is the volume-related code.

<pre xml:space="preserve" xmlns="">---
type: **container**
name: deployment-container-vol
container:
  resources:
    mem_mib: 512
    cpu_cores: 0.01
  image: "httpd:latest"
inputs:
  parameters:
    code:
    vol_data:
    vol_log:
</pre>

<pre style="font-weight: bold;" xml:space="preserve" xmlns=""># Mount the named volume (data-vol) at this path</pre>

<pre style="font-weight: bold;" xml:space="preserve" xmlns=""># Mount the anonymous volume (log-vol) at this path</pre>

<pre xml:space="preserve" xmlns="">volume_mounts:
  - mount_path: /ax/data
    volume: "%%vol_data%%"
  - mount_path: /ax/log
    volume: "%%vol_log%%"
---
type: **deployment**
name: deployment-example-vol
description: Deploying an Apache HTTP Web Server with named and anonymous volumes attached.
inputs:
  parameters:
    code:
      default: "%%session.artifacts%%"
    appname:
      default: "test-app"
    deployname:
      default: "test-deploy"
    domain:
      default: "app.company.com"
    data-volume:
application:
  name: "%%appname%%"
deployment:
  name: "%%deployname%%"
scale:
  min: 1
external_routes:
  - name: deploy-external
    dns_prefix:
    dns_domain: "%%domain%%"
    target_port: 80
    redirect_http_to_https: true
    ip_white_list:
      - 0.0.0.0/0
internal_routes:
  - name: deploy-internal
    ports:
      - name: http
        port: 80
        target_port: 80
volumes:</pre>

<pre xml:space="preserve" xmlns="">**# Named volume is "data-vol"**</pre>

<pre xml:space="preserve" xmlns="">  data-vol:
    name: "%%data-volume%%"</pre>

<pre style="font-weight: bold;" xml:space="preserve" xmlns=""># Anonymous volume is "log-vol"</pre>

<pre style="font-weight: bold;" xml:space="preserve" xmlns=""># "attached-gp" is an Applatix reserved name for a storage class </pre>

<pre xml:space="preserve" xmlns="">  log-vol:
    storage_class: attached-gp
    size_gb: 10
containers:
  - server:
      template: deployment-container-vol
      parameters:
        vol_log: "%%volumes.log-vol%%"
        vol_data: "%%volumes.data-vol%%"
termination_policy:
  time_seconds: "43200"
  spending_cents: "100"

---
type: **workflow**
name: deployment-workflow-vol
inputs:
  parameters:
    commit:
      default: "%%session.commit%%"
    repo:
      default: "%%session.repo%%"
    appname:
      default: "test-app"
    domain:
      default: "applatix.net"
    data-volume:
steps:
  - checkout:
      template: axscm-checkout
  - deploy:
      template: deployment-example-vol
      parameters:
        code: "%%steps.checkout.code%%"
        deployname: "deploy"</pre>
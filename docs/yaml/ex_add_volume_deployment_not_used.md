## Adding a Volume to a Deployment

When a long-running deployment executes, it may need storage for persisting data. Applatix Platform provides volumes to enable the storage of data. There are two types of volumes that Applatix supports:

*   NAMED volumes persist independently of an application. The volume and its data persist even after an application terminates. NAMED volumes must be declared from the Applatix Console (under Infrastructure > Volumes) before they can be referenced in a YAML template.
*   ANONYMOUS volumes are coupled to the application. When an application is created, the anonymous volume is automatically created. When the application is terminated, the anonymous is automatically terminated. Anonymous volumes are only declared in the YAML templates.

### Required templates for volumes

You'll need to use two types of YAML templates to implement volumes:

*   Deployment - specifies a section named "Volumes", the name of the volume, the Storage class, and the size of the volume
*   Container - specifies the name of the container image used in a deployment (such as a database, web server) and references the name of the volume that is to be mounted on the Applatix Cluster

The following pseudo-code shows the specific lines to add to support volumes in the two templates (Deployment and Container):

<div style="margin-left: .5pt;margin-top: 1.5pt;width: 493pt;height: 463.5pt;visibility: visible;mso-wrap-style: square;mso-width-percent: 0;mso-height-percent: 0;mso-wrap-distance-left: 9pt;mso-wrap-distance-top: 3.6pt;mso-wrap-distance-right: 9pt;mso-wrap-distance-bottom: 3.6pt;mso-position-horizontal: absolute;mso-position-horizontal-relative: text;mso-position-vertical: absolute;mso-position-vertical-relative: text;mso-width-percent: 0;mso-height-percent: 0;mso-width-relative: margin;mso-height-relative: margin;v-text-anchor: top;background-color: #f2f2f2;" xmlns="">

<pre>DEPLOYMENT TEMPLATE</pre>

<pre># section name  
Volumes:</pre>

<pre> # Reference to an anonymous volume for deployment</pre>

<pre><reference_to_volume1>:</pre>

<pre> # Storage_class is an Applatix keyword that refers to pre-configured storage provider   
 # and its required parameters that Applatix supports. For example,  "ebs" or   
 # Elastic Block Storage (EBS) is the storage provider for AWS, "gp2" is a type of volume   
 # that EBS has, and "ext4" is a type of file system that EBS uses</pre>

<pre>  <span class="UI_element">Storage_class:</span> <Applatix_reserved_name_4_class>  
  Size: xx GB</pre>

<pre># Reference a named volume for deployment with the "name" reserved word </pre>

<reference_to_volume2>:  
      name: <user_created_name>

<pre>CONTAINER TEMPLATE</pre>

<pre># Name of image for container</pre>

<pre>Image: <database_type or server_type> such as MySQL or HTTP server</pre>

<pre>#section name for mounting a volume to the Applatix Cluster</pre>

<pre>volume_mounts:</pre>

<pre># Mount path for a volume (such as /var/log)</pre>

<pre>- mount-path: <location_to_mount_the_volume> </pre>

<pre>  volume: <reference_to_volume></pre>

</div>

## Code Example

The following code example shows the following:

*   uses a named volume to store persistent data
*   uses an anonymous volumes to store data for an application while it is running
*   attaches the volumes to an Apache HTTP server
*   uses a workflow to check out the code and deploy the container for the HTTP server

The code marked in bold is the volume-related code.

<div style="margin-left: 7pt;margin-top: 19.25pt;width: 442.5pt;height: 626.5pt;visibility: visible;mso-wrap-style: square;mso-width-percent: 0;mso-height-percent: 0;mso-wrap-distance-left: 9pt;mso-wrap-distance-top: 3.6pt;mso-wrap-distance-right: 9pt;mso-wrap-distance-bottom: 3.6pt;mso-position-horizontal: absolute;mso-position-horizontal-relative: text;mso-position-vertical: absolute;mso-position-vertical-relative: text;mso-width-percent: 0;mso-height-percent: 0;mso-width-relative: margin;mso-height-relative: margin;v-text-anchor: top;background-color: #d9d9d9;">

<pre>---  
 type: <span class="UI_element">container</span> name: deployment-container-vol  
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

# Mount the named volume (data-vol) at this path  
# Mount the anonymous volume (log-vol) at this path</pre>

<pre>volume_mounts:  
   - mount_path: /ax/data  
     volume: "%%vol_data%%"  
   - mount_path: /ax/log  
     volume: "%%vol_log%%"  

 ---  
 type: <span class="UI_element">deployment</span> name: deployment-example-vol  
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
         target_port: 80</pre>

</div>

<div style="margin-left: 2.5pt;margin-top: 0;width: 493pt;height: 558.5pt;visibility: visible;mso-wrap-style: square;mso-width-percent: 0;mso-height-percent: 0;mso-wrap-distance-left: 9pt;mso-wrap-distance-top: 3.6pt;mso-wrap-distance-right: 9pt;mso-wrap-distance-bottom: 3.6pt;mso-position-horizontal: absolute;mso-position-horizontal-relative: text;mso-position-vertical: absolute;mso-position-vertical-relative: text;mso-width-percent: 0;mso-height-percent: 0;mso-width-relative: margin;mso-height-relative: margin;v-text-anchor: top;background-color: #d9d9d9;">

<pre>volumes:</pre>

<span class="UI_element"># Named volume is "data-vol"</span>

<pre>   data-vol:  
     name: "%%data-volume%%"</pre>

<pre># Anonymous volume is "log-vol"  
# "attached-gp" is an Applatix reserved name for a storage class </pre>

   log-vol:  
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

<pre>---  
 type: <span class="UI_element">workflow</span> name: deployment-workflow-vol  
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

</div>
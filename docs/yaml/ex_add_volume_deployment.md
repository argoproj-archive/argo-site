# Adding a Volume as Storage for Deployment

When a long-running deployment executes, it may need storage for persisting data. Argo provides volumes to enable the storage of data. There are two types of volumes that Argo supports:

*   NAMED volumes persist independently of an application. The volume and its data persist even after an application terminates. NAMED volumes must be declared from the Argo Web UI before they can be referenced in a YAML template. Follow these steps to declare a NAMED volume

    1.  From the Argo Web UI, click **Infrastructure** > **Volumes** > **+**.
    2.  Click **SELECT** for the row the storage class you want for the new named volume.
    3.  Enter a name for the volume and the size of the volume (in Gibibytes).
    4.  Click **SAVE**.

        The newly-created volume is now visible on the main volumes page (Infrastructure > Volumes)

*   ANONYMOUS volumes are coupled to the application and is automatically deleted when an application terminates. Anonymous volumes are **only** declared in the YAML template and you must specify a `storage_class` for it and its required parameters. For details about the storage class, see [About Storage Classes for Volumes](#AboutStorageClass4Volumes).For details about declaring an anonymous volume, see [Code Example for An Anonymous Volume](#Code4DeclaringAnonymousVolume).

When creating a new volume, you must decide whether the volume is "named" or "anonymous".

## <a name="AboutStorageClass4Volumes"></a>About Storage Classes for Volumes

Argo provides pre-configured storage classes for volumes. A storage class is composed of specific characteristics:

*   **STORAGE PROVIDER NAME** - This is the name of the storage provider used for the volume, such as "`ebs`" or Elastic Block Storage (EBS) if you are using AWS.
*   **VOLUME TYPE** - The type of volume that the storage provider has, such as "gp2" for EBS. This is an example of a required parameter the for "ebs" storage provider.
*   **FILE SYSTEM** - The type of file system that the storage provider uses, such as "ext4" for EBS. This is an example of a required parameter for "ebs" storage provider.

## Required YAML Templates for Volumes

You'll need to use two types of YAML templates to implement volumes:

*   **Deployment** - specifies a section named "`volumes`", the name of the volume, the Storage class, and the size of the volume.
*   **Container** - specifies the name of the container image used in a deployment (such as a database, web server) and references the name of the volume that is to be mounted on the Argo Cluster

The following pseudo-code shows the specific lines to add to support for named and anonymous volumes in the two templates (Deployment and Container) and it uses a "referenced"container to mount a volume:

### Deployment Template
```
# section name
volumes:
# Reference a named volume for deployment with the "name" reserved word
  &lt;reference_to_named_volume&gt;:
    name: &lt;user_created_name_for_the_volume&gt;
# Reference to an anonymous volume for deployment
  &lt;reference_to_volume1&gt;:
    # Storage_class is an Argo keyword that refers to pre-configured
    # storage provider and its required parameters that Argo supports
    Storage_class: &lt;Argo_reserved_name_4_class&gt;
    Size: xx GB
```
### Container Template

```
# Name of image for container
image: &lt;database_type or server_type such as MySQL or HTTP server&gt;
resources:
  cpu_cores: &lt;number_of_cpu_cores&gt;
..mem_mib: &lt;size_of_memory&gt;
# inputs section that has the mount path for a volume (such as /var/log)
inputs:
  volumes:
    &lt;reference_to_volume&gt;
      mount_path: &lt;path_to_volume&gt;
```

## Code Example for Named Volume

The following code example shows the following:

*   references a named volume (`data`) to store persistent data.
*   references a container (`test-container`) with-a named volume (`my-test-vol`) attached.
*   the container has a mount_path of `/data` for the named volume.

The code marked in **bold** is the volume-related code.

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
  - 0.0.0.0/0 **volumes:
  data:
    name: "%%inputs.parameters.VOLUME_NAME%%"**
containers:
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
inputs: **volumes:
    DATA:
      mount_path: /data
```

## <a name="Code4DeclaringAnonymousVolume"></a>Code Example for An Anonymous Volume

The YAML code for declaring an anonymous volume for a deployment is exactly the same as for a named volume except for a couple of lines in the `volumes` section of the deployment template:

```
volumes:
  data: **storage_class: ssd
    size_gb: 1**
```

Notice that the value for the data volume is not a name, but a mapping to a `storage_class: ssd` and any of its required parameters (such as `size_gb`).

### To view details about a volume:

NOTE: Usage refers the current utilization of the volume.

1.  Click **Infrastructure** > **Volumes** > _name_of_the_volume_ to view details about the volume (STORAGE PROVIDER NAME, VOLUME TYPE, FILE SYSTEM)

2.  Click the name of the **VOLUME USERS** to view details about the deployment(s) that an application uses.

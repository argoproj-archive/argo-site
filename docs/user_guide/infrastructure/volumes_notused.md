# Adding Volumes as Storage for Deployments

When a long-running deployment executes, it may need storage for persisting data. <span class="GeneralApplatix Platform Name">Argo</span> provides volumes to enable the storage of data. There are two types of volumes that <span class="GeneralApplatix Platform Name">Argo</span> supports:

*   <span class="UI_element">NAMED</span> volumes persist independently of an application. The volume and its data persist even after an application terminates. NAMED volumes must be declared from the <span class="NewSetApplatix Cluster Console">Argo Web UI</span> (under <span class="UI_element">Infrastructure</span> > <span class="UI_element">Volumes</span>) before they can be referenced in a <span class="NewSetYAML template">YAML template</span>.
*   <span class="UI_element">ANONYMOUS</span> volumes are coupled to the application and is automatically deleted when an application terminates. Anonymous volumes are **only** declared in the <span class="NewSetYAML template">YAML template</span>.

For details about creating a volume in a deployment template or referencing a volume from a <span class="GeneralYAML template">YAML template</span>, see [Adding a Volume as Storage for Deployment](#/docs;doc=%2F..%2Fyaml%2Fex_add_volume_deployment.md).

## About Storage Classes for Volumes

Applatix provides pre-configured storage classes for volumes. A storage class is composed of specific characteristics:

*   **STORAGE PROVIDER NAME** - This is the name of the storage provider used for the volume, such as "ebs" or Elastic Block Storage (EBS) if you are using AWS.
*   **VOLUME TYPE** - The type of volume that the storage provider has, such as "gp2" for EBS.
*   **FILE SYSTEM** - The type of file system that the storage provider uses, such as "ext4" for EBS.

When creating a new volume, you must decide whether the volume is "named" or "anonymous". Here are the procedures for creating either type of volume.

### To create a Named volume:

1.  Click **Infrastructure** > **Volumes** > **+** from the <span class="GeneralApplatix Cluster Console">Argo Web UI</span>.

2.  Click **SELECT** for the row the storage class you want for the new named volume.

    ![](../docs/images/infrastructure_volumes_create_config_1177x498.png)

3.  Enter a name for the volume and the size of the volume (in Gibibytes).

    ![](../docs/images/infrastructure_volumes_create_properties.png)

4.  Click **SAVE**.

    The newly-created volume is now visible on the main volumes page (Infrastructure > Volumes)

### To create an Anonymous volume:

Specify an anonymous volume in the <span class="GeneralYAML template">YAML template</span> for your workflow. For details, see .

### To view details about a volume:

NOTE: Usage refers the current utilization of the volume.

1.  Click **Infrastructure** > **Volumes** > _name_of_the_volume_ to view details about the volume (STORAGE PROVIDER NAME, VOLUME TYPE, FILE SYSTEM)

    ![](../docs/images/infrastructure_volumes_usage_users.png)

2.  Click the name of the **VOLUME USERS** to view details about the deployment(s) that an application uses.

    ![](../docs/images/applications_deployed_details_spending.png)
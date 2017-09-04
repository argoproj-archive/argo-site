# Creating a Managed Fixture for Workflows and Apps

When you run a workflow or deploy an app, you might need to access a resource that is external to your Argo, such as a pool of virtual machines (VMs), databases, other REST-based services, etc. To manage and access these external resources, Argo provides “managed fixtures”. A managed fixture allows Argo to perform life-cycle management of these external resources like creating and deleting instances, loading data, or any other custom action.

Managed fixtures have attributes and actions. **Attributes** are used to distinguish instances that come from different managed fixture classes. **Actions** are workflows that you can perform on a managed fixture, (such as creating a managed fixture for an external database)

Fixtures also allow you to use policies to automatically manage resources such as auto-suspension or termination based on various metrics and conditions.

The process for creating fixtures for a workflow or application is:

1.  In the YAML template, define a fixture class for each distinct type of resource that you need. See [Creating a fixture class for a workflow](#CreateFixture) for an example.
2.  Go to the Argo Console for your cluster.
3.  Connect to the repo containing the YAML fixture class definition you created.

4.  Add the fixture class that you need to the repo. For details, see [To add a new fixture class to your repo branch](../user_guide/infrastructure/using_fixtures.md#AddFixtureClass2Repo)[Using Fixtures for Accessing External Resources](./../user_guide/infrastructure/using_fixtures.md).
5.  Create the instances of the fixture class. For details, see [To create an instance of a fixture class](../user_guide/infrastructure/using_fixtures.md#CreateInstanceFixtureClass).

## <a name="CreateFixture"></a>Creating a fixture class for a workflow

These are the tasks for creating a fixture class:

*   **Create** a YAML template for each fixture class.

    You'll declare a template that is of type "fixture".

*   **Add** the desired attributes and actions to the fixture class.

    See [YAML Code for managed fixture](#YAML)for an example of attributes and actions.

You are now ready to use this fixture class. See [Using Fixtures for Accessing External Resources](./../user_guide/infrastructure/using_fixtures.md) for details.

### About Attributes and Actions for a Fixture

Fixture class attributes and actions are totally configurable. You create the attributes and actions that your fixture requires. Here's an example of attributes and actions for an EC2 instance fixture:

### <a name="Attributes"></a>Attributes

<table style="border-left-style: solid;border-left-width: 1px;border-left-color: black;border-right-style: solid;border-right-width: 1px;border-right-color: black;border-top-style: solid;border-top-width: 1px;border-top-color: black;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: black;margin-left: 0;margin-right: auto;" xmlns=""><colgroup><col style="width: 220px;"> <col style="width: 296px;"> <col style="width: 192px;"></colgroup>

<tbody>

<tr>

<th>Attribute Name</th>

<th>Attribute Value</th>

<th>Description</th>

</tr>

<tr>

<td>`launch_configuration_name`</td>

<td>`string`</td>

<td>The launch configuration data that is used for configuring an EC2 instance</td>

</tr>

<tr>

<td>`flags`</td>

<td>`required` - indicates that the attribute is required for a fixture  
`array` - a list of items for a specific data type (such as a list of strings)</td>

<td>Indicates whether an attribute is required or optional</td>

</tr>

<tr>

<td>`tags`</td>

<td>array of strings</td>

<td>An array of strings Use tags to make it easy to search for a fixture or to reference a fixture from a workflow or container template.</td>

</tr>

<tr>

<td>`argo_cluster_affinity`</td>

<td>`managed` -. Allows access to the fixture from the Argo cluster. To see the default security settings, go to .[Configuring System Settings](./../user_guide/configapplatixcluster/managesystemsettings.md) under Access settings.  
`accessible` - provides limited access to EC2 instance.  
`isolated` - no default access to EC2 instance.</td>

<td>Pre-configured networking options that Argo provides.</td>

</tr>

<tr>

<td>`disable_nightly`</td>

<td>`bool`</td>

<td>Whether to disable instances that are not used at night. Helps save money when instances are not used.</td>

</tr>

</tbody>

</table>

### Actions

<table xmlns=""><colgroup><col style="width: 123px;"> <col style="width: 239px;"> <col style="width: 180px;"> <col style="width: 200px;"></colgroup>

<tbody>

<tr>

<th>Action Name</th>

<th>Required Mapping</th>

<th>Description</th>

<th>Example</th>

</tr>

<tr>

<td>`create`</td>

<td>`template`: The name of the workflow used to create an instance of the fixture class  
`parameters`: The key/value pairs to pass into the container  
</td>

<td>Call this action to create an instance of a fixture class.</td>

<td>Calling "test-fixture-action" template to create the fixture.  

```
create:
  template: test-fixture-action
  parameters:
    INSTANCE_TYPE: "%%fixture.instance_type%%"
    ACTION: create 
```

</td>

</tr>

<tr>

<td>`delete`</td>

<td>`template`  
`parameters`</td>

<td>Call this action to delete an instance of a fixture class.</td>

<td>Passing a cross-account role and extra arguments into the `ec2-fixture-action` container to run the delete action.  

```
delete:
  template: ec2-fixture-action
  parameters:
    MANAGEMENT_ROLE: "arn:aws:iam::111111111111:role/
```

```
managed-fixture-ec2-example"
    ACTION: delete
    EXTRA_ARGS: "--instance-id %%fixture.instance_id%%"
```

</td>

</tr>

</tbody>

</table>

### <a name="YAML"></a>YAML Code for managed fixture

The following sample code shows

*   a fixture template that declares the fixture class's attributes and actions for an EC2 instance.
*   a container template that creates a container for running an EC2 instance of the fixture class.

<div xmlns="">

```
---
type: fixture
name: ArgoManagedEC2Fixture
description: ec2 test fixture
# Declare the attributes for a EC2 fixture
# Available types of attributes are string, int, bool, float or array.
# The key "launch_configuration_name" is required to launch
# the EC2 fixture in the public cloud.
attributes:
  launch_configuration_name:
    type: string
    # The key "flags" can have one of two values:
    # "required", which means the fixture must have this attribute.
    # "array", which indicates a list of items with the same data type
    flags: required
    default: mf-ec2-demo
    options:
      - "mf-ec2-demo-nfs-server"
      - "mf-ec2-demo-nfs-client"
      - "mf-ec2-demo"
  role:
    type: string
    flags: required
    default: dev-vm
    options:
      - "nfs-server"
      - "nfs-client"
      - "dev-vm"
  aws_state:
    type: string
  instance_id:
    type: string
  instance_type:
    type: string
  key_name:
    type: string
  private_dns:
    type: string
  private_ip:
    type: string
  public_dns:
    type: string
  public_ip:
    type: string
  subnet_id:
    type: string
    default: "None"
  argo_cluster_affinity:
    type: string
    default: "managed"
    options:
      - "managed"
      - "accessible"
      - "isolated"

actions:
# Declare the action, the YAML template that uses the action,
# and parameter values passed to the container that runs the action
  create:
    template: ec2-fixture-action
    parameters:
      MANAGEMENT_ROLE: "arn:aws:iam::111111111111:role/managed-fixture-ec2-example"
      ACTION: create
      EXTRA_ARGS: "
        --name %%fixture.name%%
        --launch-configuration %%fixture.launch_configuration_name%%
        --argo-cluster-affinity %%fixture.argo_cluster_affinity%%
        --subnet-id %%fixture.subnet_id%%"
  delete:
    template: ec2-fixture-action
    parameters:
      MANAGEMENT_ROLE: "arn:aws:iam::111111111111:role/managed-fixture-ec2-example"
      ACTION: delete
      EXTRA_ARGS: "--instance-id %%fixture.instance_id%%"
  pause:
    template: ec2-fixture-action
    parameters:
      MANAGEMENT_ROLE: "arn:aws:iam::111111111111:role/managed-fixture-ec2-example"
      ACTION: pause
      EXTRA_ARGS: "--instance-id %%fixture.instance_id%%"
    on_success: disable
  restart:
    template: ec2-fixture-action
    parameters:
      MANAGEMENT_ROLE: "arn:aws:iam::111111111111:role/managed-fixture-ec2-example"
      ACTION: restart
      EXTRA_ARGS: "--instance-id %%fixture.instance_id%%"
    on_success: enable

---
type: container
name: ec2-fixture-action
resources:
  mem_mib: 64
  cpu_cores: 0.02
image: "get.argoproj.io/managed-fixture/mfctl:latest"
# axmfctl is the argo command for creating a fixture
# This command creates an EC2 instance of the fixture class
# by passing in the cross-account role and arguements for 
# the instance of the fixture class
command: ["axmfctl"]
args: ["ec2 %%ACTION%% --management-role %%MANAGEMENT_ROLE%% %%EXTRA_ARGS%%"]
inputs:
  parameters:
    ACTION:
    MANAGEMENT_ROLE:
    EXTRA_ARGS:
outputs:
  artifacts:
    attributes:
      path: /tmp/fix_attrs.json

```

</div>
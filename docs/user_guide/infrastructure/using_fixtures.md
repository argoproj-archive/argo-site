# Using Fixtures for Accessing External Resources

When you run a workflow or deploy an app, you may need to access a resource that is external to Argo, such as a pool of virtual machines (VMs), databases, EC2 instances, other REST-based services, etc. To handle these external resources, Argo provides the concept of “managed fixtures”.

A managed fixture allows Argo to perform life-cycle management of an external resource such as creating and deleting instances, loading data, or any other custom action. Managed fixtures are comprised of two elements:

* `attributes` - used to distinguish instances that come from different managed fixture classes.
* `actions`- represents workflows you can perform on a managed fixture (such as creating a managed fixture for an external database).

You can also use policies with fixtures to automatically manage resources such as auto-suspension or termination based on various metrics and conditions.

## How to Use Fixtures

The process for using fixtures in a workflow or app is

NOTE: Before you can use a fixture, you must have created a fixture class for it.  in a YAML template of `type: fixture`  For the steps to defineing the YAML template for fixtures, see [Creating a Managed Fixture for Workflows and Apps](./../../yaml/ex_create_managed_fixtures.md).

1.  Enable the fixture class which makes it available for Argo to use it at runtime. Go to **Navigation bar** > **Infrastructure** > **Fixtures** and select the fixture class you want to use and select the repo branch if you have multiple branches that contain this fixture class definition. Connect to the repo containing the YAML fixture class definition you created. For details, see [To enable a new fixture class from a repo branch](#AddFixtureClass2Repo).
2.  Create an instance of the fixture class. For more details, see [To create an instance of a fixture class](#CreateInstanceFixtureClass).

After you create an instance of the fixture class, the fixture instance is available for use in your workflows. Make sure you have also referenced the fixture in the appropriate workflow and container templates.

From the Console, you can manage the fixture instance by selecting the actions you want to perform on the instance. (The actions were defined in the YAML template for the fixture class.) For details, see [To select an action on an instance of a fixture class](#TakeActionOnInstance).

You can also monitor the usage of the fixture instance. To view details about the instance of the fixture, its attributes, and its job history, see [To monitor an instance of a fixture class](#MonitorFixtureInstance).

Going forward, if you decide later to remove a fixture class but your deployments still needs to use a fixture class, you can reassign another fixture class from a different repo branch to use. For details, see [To reassign a fixture class](#ReassignFixtureTemplate).

## <a name="AddFixtureClass2Repo"></a>To enable a new fixture class from a repo branch
<!--Waiting for Alex's response about "missing" icon for adding fixture class to repo branch 9-28-17-->
1.  Go to **Navigation bar** > **Infrastructure** > **Fixtures**. (The Console displays the existing fixtures that are available for workflows to use.)
2.  Click ![](../../../images/add_button_31x29.png) (Add a Fixture Class dialog displays)
3.  Click Select for the fixture class you want to add to the Cluster.
4.  Click the dropdown to select the repo branch having the fixture class definition.
5.  (Optional) Click View Attributes to review the attributes for the fixture class to be added.
6.  If satisfied with the selections, click SAVE.

The newly added YAML template appears on the Fixture Classes screen. The last step is to create an instance of the fixture class so a workflow or app can use it.

## <a name="CreateInstanceFixtureClass"></a>To create an instance of a fixture class

1.  Go to **Navigation bar** > **Infrastructure** > **Fixtures**. (The Console displays the existing fixtures that are available to use.)
2.  Click the fixture class you want (The instances for the Fixture Class displays)
3.  Right click ![](../../../images/3_vertical_dots_26x26.png) and select Create Instance.(Create New Fixture)
4.  Enter information for the attribute fields that the fixture requires.
5.  Click Create. The newly created instance of the fixture class displays in the view with all instances of a fixture class.

## <a name="TakeActionOnInstance"></a>To select an action on an instance of a fixture class

1.  Go to Infrastructure > Fixtures. (The Console displays the existing fixtures that are available to use.)
2.  Click the fixture class you want (The instances for the Fixture Class displays)
3.  Right click ![](../../../images/clear_3_dots_25x25.png) and select an action from the dropdown box. (

    NOTE: Depending upon the action selected, Argo may execute the action or you may be prompted to enter some information for required attributes before submitting the action.  

4.  Enter information for the attribute fields that the fixture requires.
5.  Click Create. The newly created instance of the fixture class displays in the view with all instances of a fixture class.

## <a name="MonitorFixtureInstance"></a>To monitor an instance of a fixture class

1.  Go to Infrastructure > Fixtures. (The Console displays the existing fixtures that are available to use.)
2.  Click the fixture class you want (The instances for the Fixture Class displays)
3.  Click the name of the instance you want to monitor.

    The view displays the Summary, Attributes, and Job History for the instance.

## <a name="ReassignFixtureTemplate"></a>To reassign a fixture class

1.  Go to Infrastructure > Fixtures. (The Console displays the existing fixtures that are available to use.)
2.  Click ![](../../../images/3_vertical_dots_25x26.png) for the fixture class you want to change and select Reassign (Reassign Fixture Template dialog displays)
3.  Click the repo branch you want the fixture class to be applied to.
4.  Click Save.(Create New Fixture)

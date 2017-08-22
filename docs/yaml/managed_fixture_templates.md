# Managed Fixture Templates

When you run a workflow or deploy an app, you might need to access a resource that is external to your <span class="GeneralKubernetes Cluster with Argo">Argo</span>, such as a pool of virtual machines (VMs), databases, other REST-based services, etc. To manage and access these external resources, <span class="GeneralApplatix Platform Name">Argo</span> provides “<span class="GeneralManaged Fixture">managed fixture</span>s”. A <span class="GeneralManaged Fixture">managed fixture</span> allows <span class="GeneralApplatix Platform Name">Argo</span> to perform life-cycle management of these external resources like creating and deleting instances, loading data, or any other custom action. In a <span class="GeneralManaged Fixture">managed fixture</span>, attributes are used to distinguish instances that come from different <span class="GeneralManaged Fixture">managed fixture</span> classes. Actions are workflows that you can perform on a <span class="GeneralManaged Fixture">managed fixture</span>, (such as creating a <span class="GeneralManaged Fixture">managed fixture</span> for an external database)

Fixtures also allow you to use policies to automatically manage resources such as auto-suspension or termination based on various metrics and conditions.

The process for using fixtures in a workflow or app is:

1.  In the <span class="GeneralYAML template">YAML template</span>, define a fixture class for each distinct type of resource that you need. See [Managed Fixture Templates](#CreateFixture) for an example.
2.  Go to the Applatix Console for your cluster.
3.  Connect to the repo containing the YAML fixture class definition you created.

4.  Add the fixture class that you need. See [Using Fixtures for Accessing External Resources](#/docs;doc=%2Fuser_guide%2Finfrastructure%2Fusing_fixtures.md).
5.  Create the instances of the fixture class. For details, see [Using Fixtures for Accessing External Resources](#/docs;doc=%2Fuser_guide%2Finfrastructure%2Fusing_fixtures.md).

To see an example of a <span class="GeneralYAML template">YAML template</span> that uses <span class="GeneralManaged Fixture">managed fixture</span>see [YAML Code for managed fixture](ex_create_managed_fixtures.htm#YAML)
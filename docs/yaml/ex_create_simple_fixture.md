# Create_Simple_Fixture

**Not** in Catalog

test-fixture (for internal testing only)

**In** Catalog:

Applatix Managed RDS Instance Fixture (ApplatixManagedRDSInstanceFixture)

Applatix Managed EC2 Instance Fixture (ApplatixManagedEC2Fixture)

Managed EC2-Simple Fixture (EC2Simple) -- shows you how to create a basic, simple fixture. The workflow launches fixture and tests the network to make sure the fixture is accessible. When you run this workflow from Catalog, it automates the process of clicking through the UI to create an instance of a fixture.

AWS Keyname - this is the name of the SSH keypair. Without this keypair name, the user cannot bash into the instance on the cluster.

AX Cluster password - this is the secret to access the cluster. You should encrypt this secret before you use it to access the cluster

AX Cluster username -

Count - the number of fixture instances to create in one batch (i.e. at one time) (This is the equivalent of a CLI command to create fixtures in batch mode). Minimum of 1/Maximum of 10\. (The script for this demo has been written for maximum of 10--user can rewrite it to whatever they want)

cli command axfxtctl??

instance type

"Create" container

test to ping fixture

private IP

public DNS

resolvable within the network
## Creating Stateful Objects or Accessing External Services using Fixtures in Workflows

Applatix supports two types of fixtures, dynamic and static.

In a workflow, it’s very useful to create stateful objects and services initialized with a known state. For example, your test workflow may require creating a Mongo database dynamically to store application state before running the tests.  Applatix supports this by allowing you to create dynamic fixtures.

Another example is an application or workflow that needs to access an external service like AWS RDS or an existing database such as MySQL. Applatix supports this by allowing you to create a static fixture.

The following code example uses dynamic and static fixtures.

<div xmlns="">

<pre>---
type: container
name: mongodb
description: MongoDB container
container:
  image: mongo:3.2.9
---
type: workflow
name: mongodb test
description: Load mongodb with some data and run tests

fixtures:
  -
    mongodb-dynamic:
      template: mongodb
    mongodb-static:
      category: MongoDB

steps:
  -
    load:
      template: mongodb-load
  parameters:
        mongodb_ip: %%fixtures.mongodb-dynamic.ip%%
        mongodb_data: mymontest-data
  -
#dynamic fixture test

    test-dynamic:
      template: mongodb-test
      parameters:
        mongodb_ip: %%fixtures.mongodb-dynamic.ip%%

#static fixture test
    test-static
      template: mongodb-test
      parameters:
        mongodb_ip: %%fixtures.mongodb-static.ip%%</pre>

</div>

As the example shows, a dynamic fixture is implemented as a container template using a mongodb container available on DockerHub. One of the great things about containers is that someone's likely already created one for most of the things you need! A dynamic fixture works a lot like a step in a workflow except that the system waits for the fixture to start before you run the rest of the workflow and you can access properties such as the IP address of the fixture.

In contrast, a static fixture is obtained from a preconfigured pool of fixtures called MongoDB. The system can ensure that each static fixture is used by only one workflow at a time.

The first step in the workflow loads the dynamic fixture with a dataset. The static fixture persists across workflows and is assumed to already contain any needed data.

The second step then runs tests on the dynamic and static fixtures in parallel.
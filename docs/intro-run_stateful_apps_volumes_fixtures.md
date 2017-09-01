# Running Stateful Apps Using Volumes or External Services as a Fixture

Beyond the basics of building, running, and deploying containerized applications with the Argo, there are many common situations you'll encounter while running containerized apps in the public cloud, such as

*   Applications may need to access services that run externally to the Argo.
*   Applications may need to maintain a certain state before a workflow runs.
*   An application may need storage for its data temporarily while the app runs. Or the data must persist independently of an application (so it can be used by other applications).

Look at these links learn about

*   [Using Fixtures for Accessing External Resources](./user_guide/infrastructure/using_fixtures.md)
*   [Adding a Volume as Storage for Deployment](./yaml/ex_add_volume_deployment.md)
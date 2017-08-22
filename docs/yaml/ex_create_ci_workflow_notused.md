# Creating a Continuous Integration Workflow

Let's look at a complete workflow for Continuous Integration/Continuous Deployment (CI/CD) from checkout to deployment.

The code example below shows the following sequence: 1) checkout the sources, 2) build the code, 3) run tests in parallel, 4) get approval and then 5) deploy the application.

<div xmlns="">

type: workflow

name: example-workflow

description: Example workflow

inputs:

  parameters:

    commit:

      default: "%%session.commit%%"

    repo:

      default: "%%session.repo%%"

steps:

-

  checkout:

    template: applatix-checkout

-

  build:

    template: example-build

    parameters:

      code: "%%steps.checkout.code%%"

-

  test1:

    template: example-test

    parameters:

      code: "%%steps.checkout.code%%"

      binary: "%%steps.build.binary%%"

      testcase: 1

  test2:

    template: example-test

    parameters:

      code: "%%steps.checkout.code%%"

      binary: "%%steps.build.binary%%"

      testcase: 2

-

  approve:

    template: axapproval

parameters:

  required_approvals: pat@abc.com

-

  deploy:

    template: example-deploy  

</div>

This example illustrates the following points:

*   The build step generates a container image that is pushed to a Docker registry. (The deployment step uses this image.)

*   The axapproval template is a standard template that Applatix provides.

*   The deploy step completes when the application finishes deploying. It does not wait for the application to finish running.

*   Rerunning the workflow redeploys the application. If an older version of the application is already running, it is upgraded to the new version.
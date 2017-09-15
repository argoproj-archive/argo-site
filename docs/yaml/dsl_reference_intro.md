# Argo YAML DSL Reference

Argo’s YAML Domain Specific Language (DSL) describes the specification to write Argo YAML template files. The reference information explains

*   the valid sections for each type of YAML template.

*   the types of inputs/outputs that a template accepts.

*   any special values that a parameter can take.

## About the Argo YAML Templates

The automation of the public cloud infrastructure is driven by YAML templates that are written in the Argo Domain Specific Language. (DSL). You write YAML templates for specifying workflows, deployments, and applications that run on Argo. The specifications in the YAML templates are treated like code and are hosted in source code management (SCM) systems with your application code.

Argo also provides a syntax and consistency checkers to validate the YAML definitions. The checkers are available for Linux, Apple MacOS, and Microsoft Windows operating systems and they can be downloaded directly from the Argo Console.

The Argo DSL provides six types of YAML templates:

*   [Container Template](./../yaml/container_templates.md) – for running a single container; you can specify its parameters (such as a Java build container, Selenium test container, or MySQL DB container)
*   [Workflow Template](./../yaml/workflow_templates.md) – for specifying the job to run; think of it as a “short-running app” because a job “terminates” when it is completed.(such as Continuous Integration or Continuous Deployment workflows). Can be run manually or triggered by a policy. Each step in a workflow can be a container or another workflow.
*   [Policy Templates](./../yaml/policy_templates.md) – for defining rules that trigger a job or notification. Policies are applied to other templates (such as a policy to automatically trigger jobs for every commit)
*   [Deployment Template](./../yaml/deployment_template.md) – for specifying a long-running service (such as a microservice or application). Can be run manually or triggered by a policy.
*   [Fixture Template](./../yaml/fixture_template.md)– for defining fixture classes that represent resources outside of the Argo. In order for a workflow or application to use these resources with Argo, you must define a fixture class. See [Creating a fixture class for a workflow](ex_create_managed_fixtures.md#CreateFixture) for an example.
*   [Project Templates](./../yaml/project_templates.md) – for defining apps or workflows that can be accessed in the Argo Catalog

Out of the box, Argo provides YAML templates as pre-configured, reusable workflows and applications in [Argo’s public GitHub repository (“repo”)](https://github.com/argoproj "Argo GitHub Repository"). This repo contains YAML templates for core microservices (such as checking out code from a Source Code Management system and an approval workflow) that can be used as "building blocks" for your own workflows and application s. You can clone them and modify the YAML templates to fit your needs.

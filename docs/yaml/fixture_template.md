# Fixture Template

A fixture template contains the following sections.

#### Common Name and Type

*   `type`: fixture
*   `version`: the Argo DSL version of the YAML template
*   `name`: the unique name of the object
*   `description`: (Optional), describes the object for the benefit of the users.

#### attributes

Note: The `flags`, `tags`, `argo_cluster_affinity`, and `disable_nightly` attributes are special Argo-defined attributes for a fixture. These Argo attributes help you distinguish multiple fixture instances that come from the same fixture class. (See [Attributes](ex_create_managed_fixtures.htm#Attributes) for an example of these Argo attributes and their required mappings.)

All other attributes you define for a fixture depends on what the fixture requires.

#### actions

Note: The `create` and `delete` actions are the "minimum" required actions for managing the lifecycle of a fixture. All other actions you define for a fixture depends on what actions your fixture requires.

#### Example of a Managed Fixture

This YAML template example shows the use of Argo-defined attributes (such as `flags`, `tags`, and `disable_nightly`) user-defined attributes, minimum-defined actions (`create` and `delete`), and user defined actions (such as `suspend`, `bad_attributes`, and `snapshot`).

```
---
type: fixture
version: 1
name: test-fixture
description: fixture for test purposes
attributes:
  instance_type:
    type: string
    flags: required
    options:
    - m3.medium
    - m3.large
    - m3.xlarge
    - m3.2xlarge
    default: m3.large
  memory_gib:
    type: int
    default: 4
  cpu_cores:
    type: int
    default: 1
    options: [1, 2, 4, 8]
  ip_address:
    type: string
  group:
    type: string
    flags: required
    options: [dev, qa, prod]
  tags:
    type: string
    flags: array
  disable_nightly:
    type: bool
actions:
  create:
    template: test-fixture-action
    arguments:
      parameters.INSTANCE_TYPE: "%%attributes.instance_type%%"
      parameters.ACTION: create    
  delete:
    template: test-fixture-action
    arguments:
      parameters.ACTION: delete
  suspend:
    template: test-fixture-action
    arguments:
      parameters.ACTION: suspend
    on_success: disable
  resume:
    template: test-fixture-action
    arguments:
      parameters.ACTION: resume
    on_success: enable
  upgrade:
    template: test-fixture-action
    arguments:
      parameters.ACTION: upgrade
      parameters.UPGRADE_VERSION:
  health_check_fail:
    template: test-fixture-action
    arguments:
      parameters.ACTION: fail
    on_failure: disable
  bad_attributes:
    template: test-fixture-action
    arguments:
      parameters.ACTION: success
      parameters.ATTRIBUTES: "{\"memory_gib\": \"foo\"}"
  snapshot:
    template: test-fixture-action
    arguments:
      parameters.ACTION: snapshot

---
type: container
version: 2
name: test-fixture-action
resources:
  mem_mib: 64
  cpu_cores: 0.02
image: debian:8.5
command: ["sh", "-c"]
args: ["echo 'performing action %%inputs.parameters.ACTION%% instance_type: %%inputs.parameters.INSTANCE_TYPE%%'; sleep 30; echo '%%inputs.parameters.ATTRIBUTES%%' > /tmp/fix_attrs.json; if [ %%inputs.parameters.ACTION%% = fail ] ; then exit 1; fi"]
inputs:
  parameters:
    ACTION:
    INSTANCE_TYPE:
      default: ""
    ATTRIBUTES:
      default: "{\"ip_address\": \"1.2.3.4\"}"
    UPGRADE_VERSION:
      default: ""
outputs:
  artifacts:
    attributes:
      path: /tmp/fix_attrs.json
```

#### Example of a Workflow that Uses a Fixture

This example shows a workflow that uses 2 fixtures from the same fixture class (`test-fixture`) but each instance of the fixture class is differentiated by the set of attributes they use (`fix1` has the attribute `instance_type: m3.large` and `fix2` has the attribute `group: qa`).

```
---
type: workflow
version: 2
name: test-workflow-fixture-request
description: Workflow which will utilize a fixture
inputs:
  parameters:
    COMMIT:
      default: "%%session.commit%%"
    REPO:
      default: "%%session.repo%%"
fixtures:
- fix1:
    class: test-fixture
    attributes:
      instance_type: m3.large
  fix2:
    class: test-fixture
    attributes:
      group: qa
steps:
- sleep:
    template: echo-and-sleep
    arguments:
      parameters.MESSAGE: "%%fixtures.fix1.name%% %%fixtures.fix2.name%%"

---
type: container
version: 2
name: echo-and-sleep
description: Does nothing but echo a supplied string and sleep
image: alpine:latest
command: [sh, -c]
args: ['echo %%inputs.parameters.MESSAGE%% && sleep %%inputs.parameters.SLEEP_SEC%%']
inputs:
  parameters:
    MESSAGE:
    SLEEP_SEC:
      default: 60

```

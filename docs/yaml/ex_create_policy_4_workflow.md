# Automating Workflows Using Policies

Now that you've seen how to manually start, stop, or terminate jobs as workflows, the next step is to automate when workflows get triggered. Argo uses policies to do this. You can also enable or disable a policy. For details, see [Viewing, Enabling and Disabling Policies](#enable-disable-policies).
<!--Add anchor to topic below for enabling/disabling policies -->

Additionally, you can also write a policy that alerts users as to when certain events happen on the Argo. For details, see [Using Policies to Trigger a Notification Message](../user_guide/configapplatixcluster/setupnotificationmanagement.md#UsingPolicies2TriggerNotificationMessage).

## About Policies

Policies are a set of rules that determine

*   when certain workflows should run
*   when notifications should be generated
*   whom the notifications should be sent to

Essentially, policies help you automate your operational processes. You define a policy using a YAML template. The policy template can specify when certain workflows or container templates should be run and when and to whom notifications should be generated based on the result of running the templates.

In the following example, the policy template specifies when to trigger a workflow named "`example-workflow-approval`", trigger the same workflow based on a cron job, and when notifications are sent based on several events:
```
---
type: policy
version: 1
name: example-workflow-policy
description: Trigger example-workflow on pushes, pull requests and as a cron job
template: example-workflow-approval
arguments:
  parameters.REQUIRED_APPROVALS: " "
  parameters.OPTIONAL_APPROVALS: " "
#  parameters.NUMBER_OF_OPTIONAL_APPROVALS_NEEDED: 0
#  parameters.TIMEOUT_IN_MINUTES: 10
notifications:
  -
    when:
      - on_start
      - on_success
      - on_failure
      - on_change
    whom:
      - committer
      - author
when:
  - event: on_push
  - event: on_pull_request
  - event: on_pull_request_merge
  - event: on_cron

    schedule: "*/15 * * * *"
    timezone: "US/Pacific"

---
type: policy
version: 1
name: example-workflow-policy-15mins
description: Trigger example-workflow every 15 minute
template: example-workflow-approval
arguments:
  parameters.REQUIRED_APPROVALS: " "
  parameters.OPTIONAL_APPROVALS: " "
#  parameters.NUMBER_OF_OPTIONAL_APPROVALS_NEEDED: 0
#  parameters.TIMEOUT_IN_MINUTES: 10
when:
  - event: on_cron
    schedule: "*/15 * * * *"
    timezone: "US/Pacific"

---
type: policy
version: 1    
name: example-workflow-policy-onpush
description: Trigger example-workflow on pushes
template: example-workflow-approval
arguments:
  parameters.REQUIRED_APPROVALS: " "
  parameters.OPTIONAL_APPROVALS: " "
#  parameters.NUMBER_OF_OPTIONAL_APPROVALS_NEEDED: 0
#  parameters.TIMEOUT_IN_MINUTES: 10
notifications:
  -
    when:
      - on_start
      - on_success
      - on_failure
    whom:
      - committer
  -
    when:
      - on_change
    whom:
      - author
when:
  - event: on_push
  - event: on_pull_request
  - event: on_pull_request_merge
```

<!--This info does not apply to YAML version 1 for Argo; thus it was removed) The `target_branch` is a regular expression filter that can be used to limit the policy to only certain branches. In this case, the policy applies to all branches.

The policy also specifies that notifications should be generated for failures and that the committer and author of the commit should be notified.-->



## Viewing, Enabling and Disabling Policies <a id="enable-disable-policies"></a>

To view the policy details, go to Navigation bar > **Policies**, and double-click the name of the policy you want to view.

To enable or disable a policy, click **Policies** > check the`<name_of_policy>` , and click **ENABLE** or **DISABLE** at the bottom of the screen.

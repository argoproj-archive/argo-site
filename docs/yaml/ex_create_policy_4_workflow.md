# Automating Workflows Using Policies

Now that you've seen how to manually start, stop, or terminate jobs as workflows, the next step is to automate when workflows get triggered. Argo uses policies to do this. You can also enable or disable a policy. For details, see [Viewing, Enabling and Disabling Policies](./../user_guide/policies/enable-disablepolicies_notused.md).
<!--Add anchor to topic below for enabling/disabling policies -->

Additionally, you can also write a policy that alerts users as to when certain events happen on the Argo. For details, see [Using Policies to Trigger a Notification Message](../user_guide/configapplatixcluster/setupnotificationmanagement.md#UsingPolicies2TriggerNotificationMessage).

## About Policies

Policies are a set of rules that determine

*   when certain workflows should run
*   when notifications should be generated
*   whom the notifications should be sent to

Essentially, policies help you automate your operational processes. You define a policy using a YAML template. The policy template can specify when certain workflows or container templates should be run and when and to whom notifications should be generated based on the result of running the templates. To define a policy, see "Creating a Policy that Triggers a Workflow" in the Argo YAML Tutorial and Reference.

In the following example, the policy template specifies when to trigger a workflow named "`golang check and build`" and when notifications are sent based on several events:

<div xmlns="">

```
---
```

```
type: policy
```

```
name: Sample Policy
```

```
description: Sample Policy to trigger golang example
```

```
template: golang check and build
```

```
parameters:
```

```
# parameters with "%%session.*%%" as default value can be fulfilled automatically,
```

```
# others need to be specified in this section
```

```
notifications:
```

```
# multiple notification can be specified
```

```
  -
```

```
    **when**:
```

```
      # options: on_start, on_success, on_failure, on_change
```

```
      - on_start
```

```
      - on_success
```

```
      - on_failure
```

```
    **whom**:
```

```
      # options: committer, author, email address, user label
```

```
      - committer
```

```
      - author
```

```
      - abc@company.com
```

```
  -
```

```
    **when**:
```

```
      - on_change
```

```
    whom:
```

```
      - abc@company.slack.com
```

```
**when**:
```

```
# multiple triggers can be specified
```

```
  -
```

```
    # options: on_push, on_pull_request, on_pull_request_merge, on_cron
```

```
    **event**: on_push
```

```
    target_branches:
```

```
      # target_branches are in regular expression format, eg. ".*" matches all branches
```

```
      - "master"
```

```
      - "dev.*"
```

```
  -
```

```
    **event**: on_pull_request
```

```
    target_branches:
```

```
      - ".*"
```

```
  -
```

```
    **event**: on_pull_request_merge
```

```
    target_branches:
```

```
      - ".*"
```

```
  -
```

```
    **event**: on_cron
```

```
    target_branches:
```

```
      - ".*"
```

```
    # cron expression
```

```
    # 0 1 * * *
```

```
    #   | | | | |
```

```
    #   | | | | |
```

```
    #   | | | | +---- Run every day of the week
```

```
    #   | | | +------ Run every month of the year
```

```
    #   | | +-------- Run every day of the month
```

```
    #   | +---------- Run at 1 Hour (1AM)
```

```
    #   +------------ Run at 0 Minute
```

```
    schedule: "0 */2 * * *"
```

```
    timezone: "US/Pacific"
```

```
labels:
```

```
  release: 1.0.2
```

```
  milestone: m6
```

</div>

In the code example, you see that the `golang check and build`, which you previously defined, should be run on push, pull-request and cron events. The `target_branch` is a regular expression filter that can be used to limit the policy to only certain branches. In this case, the policy applies to all branches.

The policy also specifies that notifications should be generated for failures and that the committer and author of the commit should be notified.

# Viewing, Enabling and Disabling Policies

To view the policy details, click Policies, and double-click the name of the policy you want to view.

To enable or disable a policy, click **Policies** > check the`<name_of_policy>` , and click **ENABLE** or **DISABLE** at the bottom of the screen.

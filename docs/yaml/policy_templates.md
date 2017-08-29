# Policy Templates

A policy template has the following sections.

#### Common Name and Type

*   `name`: the unique name of the policy object.
*   `type`: policy.
*   `version`: the Argo DSL version of the YAML template
*   `description`: (Optional). Describes the object for the benefit of the users.
*   `template`: the name of the policy template.

#### parameters

*   Parameters that are enclosed with “double percent characters” (such as `%%session.commit%%` or `%%session.repo%%` ) represent  
    special parameter values. (default values) that Argo automatically fulfills (based on session information), so you don't need to be specify the values here.
*   However, values for other parameters must be explicitly specified in this section to fulfill the template’s parameters section.

#### notifications

The `notification` section has two parts:

*   `when` specifies the list of _job events_ to notify, options: on_start, on_success, on_failure, on_change
*   `whom` specifies the list of _destinations_ to notify, options: committer, author, email address, user label

Multiple notifications can be specified.

#### when

The `when` section has different event types. For all events, `target_branches` are required and are in regular expression format

*   `on_push`: trigger on the SCM push event
*   `on_pull_request`: trigger on the pull request creation/update
*   `on_pull_request_merge`: trigger on the pull request merge
*   `on_cron`: trigger on the cron schedule; the key `schedule` is required, the key `timezone` is optional

```
---
type: policy
name: Argo Build Policy
description: Policy to trigger build for all events
template: Argo-CI
parameters:
  namespace: "staging"
  version: "latest"
  build_options: "--no-push"
notifications:
# options: on_start, on_success, on_failure, on_change
- when:
  - on_failure
  whom:
  # options: committer, author, &lt;email address&gt;, &lt;user label&gt;
  - committer
  - author
  - prod@slack
when:
# multiple triggers can be specified
# options: on_push, on_pull_request, on_pull_request_merge, on_cron
- event: on_push
- event: on_pull_request
- event: on_pull_request_merge
- event: on_cron
  # cron expression
  # 0 1 * * *
  # | | | | |
  # | | | | |
  # | | | | +---- Run every day of the week
  # | | | +------ Run every month of the year
  # | +---------- Run at 1 Hour (1AM)
  # +------------ Run at 0 Minute
  schedule: "0 * * * *"
  timezone: "US/Pacific"</pre>

## Enabling Policies in a Branch

To enable a policy template in a branch, the Argo Web UI (Navigation Bar > ... > Policies).

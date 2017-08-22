# Policy Templates

NOTE: To enable a policy template in a branch, follow these steps:

*   Make sure the policy that is specified in the code for when target_branches matches the branch name

*   Enable the policy from the Policies Page in the Applatix Console.

A policy template has the following sections.

#### Common Name and Type

*   name: the unique name of the object.

*   type: policy.

*   description: optional, describes the object for the benefit of the users.

*   template: the template name

<div xmlns="">

---

type: policy

name: Sample Policy

description: Sample Policy to trigger golang example

template: golang check and build

</div>

#### parameters

*   Parameters that are enclosed with “double percent characters” (such as %%session.commit%% or %%session.repo%% ) represent default values that Applatix automatically fulfills (based on session information), so you don't need to be specify the values here.

*   However, values for other parameters must be explicitly specified in this section to fulfill the template’s parameters section.

#### notifications

<div xmlns="">

notifications:

# multiple notification can be specified

  -

    when:

      # options: on_start, on_success, on_failure, on_change

      - on_start

      - on_success

      - on_failure

    whom:

      # options: committer, author, email address, user label

      - committer

      - author

      - abc@company.com

  -

    when:

      - on_change

    whom:

      - abc@company.slack.com

</div>

*   Notification is made of two parts

*   When specifies the list of job event to notify, options: on_start, on_success, on_failure, on_change

*   Whom specifies the list of destination to notify, options: committer, author, email address, user label

*   Multiple notifications can be specified

#### when

<div style="font-family: 'Courier New';" xmlns="">

when:

# multiple triggers can be specified

  -

    # options: on_push, on_pull_request, on_pull_request_merge, on_cron

    event: on_push

    target_branches:

      # target_branches are in regular expression format, eg. ".*" matches all branches

      - "master"

      - "dev.*"

  -

    event: on_pull_request

    target_branches:

      - ".*"

  -

    event: on_pull_request_merge

    target_branches:

      - ".*"

  -

    event: on_cron

    target_branches:

      - ".*"

    # cron expression

    # 0 1 * * *

    #   | | | | |

    #   | | | | |

    #   | | | | +---- Run every day of the week

    #   | | | +------ Run every month of the year

    #   | | +-------- Run every day of the month

    #   | +---------- Run at 1 Hour (1AM)

    #   +------------ Run at 0 Minute

    schedule: "0 */2 * * *"

    timezone: "US/Pacific"

</div>

*   when has different event types, for all event, target_branches are required and in regular expression format

*   on_push: trigger on the SCM push event

*   on_pull_request: trigger on the pull request creation/update

*   on_pull_request_merge: trigger on the pull request merge

*   on_cron: trigger on the cron schedule, schedule is required, timezone is optional
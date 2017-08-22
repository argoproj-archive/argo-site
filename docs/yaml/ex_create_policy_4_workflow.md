# Automating Workflows Using Policies

Edit this topic to merge content together

Now that you've seen how to manually start, stop, or terminate jobs as workflows, the next step is to automate when workflows get triggered. <span class="GeneralApplatix Platform Name">Argo</span> uses policies to do this. For details about creating policies, see <madcap:conditionaltext data-mc-conditions="General.Not for Print">[Automating Workflows Using Policies](#).</madcap:conditionaltext> for details. You can also enable or disable a policy. For details, see [Viewing, Enabling and Disabling Policies](#/docs;doc=%2Fuser_guide%2Fpolicies%2Fenable-disablepolicies_notused.md).

Additionally, you can also write a policy that alerts users as to when certain events happen on the <span class="GeneralKubernetes Cluster with Argo">Argo</span>. For details, see [Using Policies to Trigger a Notification Message](../user_guide/configapplatixcluster/setupnotificationmanagement.htm#UsingPolicies2TriggerNotificationMessage).

Policies are a set of rules that determine

*   when certain workflows should run
*   when notifications should be generated
*   whom the notifications should be sent to

Policies help you automate your operational processes. You define policies in a <span class="GeneralYAML template">YAML template</span>. To define a policy, see "Creating a Policy that Triggers a Workflow" in the <span class="GeneralYAML Tutorial">Argo YAML Tutorial and Reference</span>.

Now that you know how to create containers and workflow templates for <span class="GeneralApplatix Platform Name">Argo</span>, but how do you set up things to trigger automatically? The solution is policy templates.

The policy template can specify when certain workflows or container templates should be run and when and to whom notifications should be generated based on the result of running the templates.

In the following example, the policy template specifies when to trigger a workflow named golang check and build and when notifications are sent based on several events:

<div xmlns="">

<pre>---</pre>

<pre>type: policy</pre>

<pre>name: Sample Policy</pre>

<pre>description: Sample Policy to trigger golang example</pre>

<pre>template: golang check and build</pre>

<pre>parameters:</pre>

<pre># parameters with "%%session.*%%" as default value can be fulfilled automatically,</pre>

<pre xml:space="preserve"># others need to be specified in this section</pre>

<pre>notifications:</pre>

<pre># multiple notification can be specified</pre>

<pre>  -</pre>

<pre>    **when**:</pre>

<pre>      # options: on_start, on_success, on_failure, on_change </pre>

<pre>      - on_start</pre>

<pre>      - on_success</pre>

<pre>      - on_failure</pre>

<pre>    **whom**:</pre>

<pre>      # options: committer, author, email address, user label</pre>

<pre>      - committer</pre>

<pre>      - author</pre>

<pre>      - abc@company.com</pre>

<pre>  -</pre>

<pre>    **when**:</pre>

<pre>      - on_change</pre>

<pre>    whom:</pre>

<pre>      - abc@company.slack.com</pre>

<pre>**when**:</pre>

<pre># multiple triggers can be specified</pre>

<pre>  -</pre>

<pre>    # options: on_push, on_pull_request, on_pull_request_merge, on_cron</pre>

<pre>    **event**: on_push</pre>

<pre>    target_branches:</pre>

<pre>      # target_branches are in regular expression format, eg. ".*" matches all branches</pre>

<pre>      - "master"</pre>

<pre>      - "dev.*"</pre>

<pre>  -</pre>

<pre>    **event**: on_pull_request</pre>

<pre>    target_branches:</pre>

<pre>      - ".*"</pre>

<pre>  -</pre>

<pre>    **event**: on_pull_request_merge</pre>

<pre>    target_branches:</pre>

<pre>      - ".*"</pre>

<pre>  -</pre>

<pre>    **event**: on_cron</pre>

<pre>    target_branches:</pre>

<pre>      - ".*"</pre>

<pre>    # cron expression</pre>

<pre>    # 0 1 * * *</pre>

<pre>    #   | | | | |</pre>

<pre>    #   | | | | |</pre>

<pre>    #   | | | | +---- Run every day of the week</pre>

<pre>    #   | | | +------ Run every month of the year</pre>

<pre>    #   | | +-------- Run every day of the month</pre>

<pre>    #   | +---------- Run at 1 Hour (1AM)</pre>

<pre>    #   +------------ Run at 0 Minute</pre>

<pre>    schedule: "0 */2 * * *"</pre>

<pre>    timezone: "US/Pacific"</pre>

<pre>labels:</pre>

<pre>  release: 1.0.2</pre>

<pre>  milestone: m6</pre>

</div>

In the code example, you see that the golang check and build, which you previously defined, should be run on push, pull-request and cron events. The target_branch is a regular expression filter that can be used to limit the policy to only certain branches. In this case, the policy applies to all branches.

The policy also specifies that notifications should be generated for failures and that the committer and author of the commit should be notified.

# Viewing, Enabling and Disabling Policies

To view the policy details, click <span class="UI_element">Policies</span>, the name of the policy you want to view.

To enable or disable the policy, just click **ENABLE** or **DISABLE** at the bottom of the screen.

To enable or disable a policy, click **Policies** > check the`<name_of_policy>` that you want to enable or disable.
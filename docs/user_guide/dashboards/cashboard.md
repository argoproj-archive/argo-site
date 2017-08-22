# Cashboard

<span class="GeneralApplatix Platform Name">Argo</span> has a "Cashboard" makes it easy to view the total cost of running your <span class="GeneralKubernetes Cluster with Argo">Argo</span>. For the time period you select, the Cashboard displays how much you are charged for the instances that are currently running, and the actual utilization of those instances. .

Simply select the time or date range you want to view: **TODAY**, **YESTERDAY**, **LAST 7 DAYS**, **LAST 15 DAYS**, or **CUSTOM** (Default is the current date.) The Cashboard graph displays this information:

*   The upper white line represents how much you have spent for your instances.
*   The lower blue line (with the area underneath shaded in blue) represents the actual utilization.
*   The horizontal dotted line represents the balance of the time period that has not occurred yet.
*   The vertical line represents the beginning of the unit of time you are viewing.
*   The solid black horizontal line represents the unit of time you are viewing.

Below the Cashboard graph, the Console displays other views of the data, which are organized as follows:

*   **Spending by Templates** - Lists the spending per "top-level" template that is run as a job or deployed as part of an application. Top-level means the template is not nested within another template. Usually, a workflow template (that is not nested within another workflow) would be a top-level template.
*   **Spending by Users** - Lists the spending per user of the <span class="GeneralKubernetes Cluster with Argo">Argo</span> in U.S. dollars.
*   **Spending by Applications** - Lists the spending per application. that have An application is a set of long-running deployments. View real-time data about the spend that an application has accumulated.

Click any item in these lists to view more spending details about the template, users or application. For example, clicking a template name displays the accumulated spend for that template and the users who accounted for that cost.

NOTE: **axsys** is an entity that represents all of the underlying processes that support the <span class="GeneralKubernetes Cluster with Argo">Argo</span>. The cost of running this entity is included as part of the total cost of running the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.
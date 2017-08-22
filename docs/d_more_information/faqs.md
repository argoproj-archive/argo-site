# FAQs

Q. When my test fails, I can't don't see any failure messages in my logs .

A. You need to identify where in the process of running a job the failure occurred. From the Jobs view in the Timeline of the Applatix Console, look for the left-most container or workflow that has a red circle. This indicates the part of the process that failed. For example, if the deployment step shows a red circle and there are no error messages in that log, this means the failure occurred earlier in the process. In this case, you could check an earlier step, such as the workflow logs to see what part of the YAML code failed.

Q. It failed on one of the parameters.....

A. Your YAML code was grabbing something that wasn't created. Applatix has YAML checker to verify that the YAML code is valid.

Q. How does Applatix manage artifacts that are produced by a job?

A. There are two ways Applatix manages artifacts. Internally, the Applatix system manages artifacts for you. Use the internal system when you only need to use them for an application? Create names for the artifact and you can reference them in any workflow or job. The other method is to use an external storage system to manage your artifacts. This is useful when you need to distribute binary files. Applatix is pre-integrated with the Nexus Repository for storing artifacts.

Q. How do I find out how much usage the Kubernetes cluster is using versus Applatix cluster in the AWS system?

A. Use the Applatix Claudia application to learn where your resources are being consumed in AWS. For each AWS account, you have groups that you can view. Claudia allows you to create custom groups so you can view more specific subsets of the AWS cost and usage. You can view data as recent as the last few minutes instead of having to wait 12 hours before the next AWS report is available.

Q. Why should I run spot instances versus on-demand? Aren't spot instances more costly to run?

A. The proper use of spot instances in AWS can dramatically reduce your spend on running instances. (How do you do this?)

Q. My workflow is failing and I'm getting this log message "`ax_gzip_ax: stdout: Cannot allocate memory`". How can I fix this?

A. For this type of message, Argo recommends that you increase the `mem_mib` setting in the corresponding container template.
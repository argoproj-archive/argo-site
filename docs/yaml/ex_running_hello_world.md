# Running a Docker Container in <span class="GeneralKubernetes Cluster with Argo">Argo</span>for Hello World!

After successfully running the Ubuntu container in a Docker environment, let's run the same container on the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.using the following <span class="GeneralApplatix Platform Name">Argo</span> <span class="GeneralYAML template">YAML template</span>:

<div xmlns="">

type: container

name: Hello World!

description: Run hello world

container:

  image: hello-world

  command: echo 'Hello World!'

</div>

where

*   `image` is the key for the container image and `hello-world` is the value for the location of the container image. In this example, by default, the image resides on DockerHub.
*   `command` is the key for the command to execute after the container starts and `echo "Hello World"` is the actual value for the command..

So when you run this container template on Applatix, it fetches the necessary container, runs it and executes the commands on the container.

While the container runs, the <span class="GeneralKubernetes Cluster with Argo">Argo</span> tracks the job in its logs. (The logs can be viewed from the <span class="GeneralApplatix Cluster Console">Argo Web UI</span> at **Timeline** > **Jobs** > **Logs**.) Here's a sample log output from the logs for this job that completed successfully:

    + /ax-execu-host/art/ax_cat_ax
    real_cmd: /hello
    + ax_real_cmd_pid=7
    + /ax-execu-host/art/ax_exec_ax /ax-artifacts-scratch/out/_ax_command_list_3666f92e-143d-11e7-9a37-0a58c0a88109
    + '[' -f /ax-artifacts-scratch/.ax_delete ']'
    + wait 7
    exec_argv[0]: /hello

    Hello from Docker!
    This message shows that your installation appears to be working correctly.
    ...

Now that you've written a <span class="GeneralYAML template">YAML template</span> that runs a container on an <span class="GeneralKubernetes Cluster with Argo">Argo</span>, let's look at running containers that do something useful...such as checking out code from a repository for a build.
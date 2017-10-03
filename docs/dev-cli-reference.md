# Development CLI

Use these commands to execute the common tasks of running workflows and applications on a Kubernetes cluster.

NOTE: If you want to access the REST-based APIs for the SDK, add `/swagger` at the end of the URL for your Kubernetes cluster. For example, suppose the cluster URL is `https://sampleapp.com`. You would append the URL like this: `https://sampleapp.com/swagger`.

### Log into Argo

```

$ ./argo login


```

After you enter this command, the interactive prompt displays the following:

```

Enter a configuration name (default):
Enter cluster URL: <cluster_URL>
Enter cluster username: <email_address_of_cluster_user>
Enter cluster password: <password>
Config written to: <path_to_config>

```
You are now ready to use the Argo development CLI commands.

### Validating Argo YAML Template files

Validating a directory of Argo YAML Template files

```
$ argo yaml validate <name_of_directory_with_YAML_files>

```
Validating a list of of Argo YAML Template files in a directory

```
$ argo yaml validate <filename1> <filename2> <filename3>

```

### Submitting a Job
* **Using a template from a repo branch**

```
 $ argo job submit <Argo_YAML_template_name> --argument "parameters.<input_parameter>" --branch <name_of_branch> --repo <URL_of_Repository>

```

* **Using a local template**

```
$ argo job submit  <Argo_YAML_template_name> --local

```  

### Get ID for the Job You Submitted

```

$ argo job list --submitter <user_name>

```

### Get a list of all jobs running on Argo

```

$ argo job list --show-all

```

### Show status of a Job

```
$ argo job show <job_ID>

```

### Show status of a workflow

```

$ argo job show <job_ID> --tree

```

### Terminating a Job

```
$ argo job kill <job_ID>

```  

### View the apps running on Argo and their status

```
$ argo app list

```

### View the details for an app

```
$ argo app show <name_of_app>

```

### View username/password/URL for Argo

```
$ argo config show

```
### View logs

```
$ argo job logs <job_ID>

```

### Changing configuration settings for Argo

```
$ cd .argo

```

and open the configuration file you want to change.

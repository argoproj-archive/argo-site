# Development CLI


### Submitting a Job
  Usage: **submitting through a template from a repo branch**
    argo job submit TEMPLATE_NAME --argument INPUT_PARAMETER_PATH --branch NAME_OF_BRANCH --repo URL_OF_REPOSITORY

**submitting through a local template**
    argo job submit TEMPLATE_NAME **--local**

### Get ID for the Job you submitted

$ argo job list --submitter USER_NAME

### Get a list of all jobs running on Argo

$ argo job list --show-all


### Show status of a Job

$ argo job show <job_ID>

### Show status of a workflow

$ argo job show SERVICE_ID --tree


### Terminating a Job

Usage: **Terminating a job**
  argo job kill SERVICE_ID [flags]

##View the apps running on Argo and their status

$ argo app list

### View username/password/URL for Argo

$ argo config show

### View logs
  Usage:
    argo job logs SERVICE_ID [flags]

### Setting the configuration for Argo

--config

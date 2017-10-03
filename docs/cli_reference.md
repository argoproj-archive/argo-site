# CLI to Manage Kubernetes Cluster from Argo


## Launch shell for managing Kubernetes Cluster from Argo

Point to the directory where you installed Argo and enter the following command:

```

$ argo cluster

```

After you enter this command, the prompt displays `argo cluster ops>` which means you are in the shell for managing a Kubernetes cluster from Argo.

## <a name="InstallCmdOptions"></a>Install

Installs an Argo cluster based on given configurations.
<!--from Harry; After the cluster is installed, Argo generates an initial access credential and creates an Argo CLI configuration file, which is named as "<cluster-name>-<cluster-id>".-->
This is the basic command for installing Argo:

```

> argocluster install --cluster-name <yourClusterName>

```


## <a name="UninstallCmdOptions"></a>Uninstall

Uninstalls a cluster and cleans up all cluster-related resources in your cloud provider based on the options you provide.

NOTE: You may need to manually delete the S3 bucket as it is shared by all clusters in your cloud provider account.

This is the basic command for uninstalling Argo:


```

> argocluster uninstall --force-uninstall --cluster-name <yourClusterName>

```

## <a name="UpgradeCmdOptions"></a>Upgrade

Upgrades a cluster to a target version of Argo. 

<!--from Harry; Currently some important software, i.e. Kubernetes binaries, Kubernetes salt come with the cluster manager container from where you runs the install. You can set the Argo service software namespace / version through exporting environment variables.-->

This is the basic command for upgrading your cluster:

```

> argocluster upgrade --cluster-name <yourClusterName>

```


## <a name="PauseCmdOptions"></a>Pause

Tears down unnecessary resources from cloud provider, while making sure your cluster can recover to the state before it was paused. By pausing a cluster, you minimize the amount that the cloud provider charges, such as lessening the cost of persistent volumes or S3 object storage. 

This is the basic command for pausing a cluster:

```

> argocluster pause --cluster-name <yourClusterName>

```

## <a name="ResumeCmdOptions"></a>Resume

Restores a paused cluster to its previous state before pausing. After resuming, the cluster has the same software version, node / network / security configurations, and all applications / jobs that were paused are restarted.

This is the basic command for resuming a cluster:

```

> argocluster resume --cluster-name <yourClusterName>

```

## Restart

This is the basic command to restart a Kubernetes cluster:

```

> argocluster restart --cluster-name <yourClusterName>

```

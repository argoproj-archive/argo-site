# Configuring System Settings

## Configuring the Encryption Key from another Cluster:

Argo allows you to securely embed and use encrypted secrets in your YAML templates. By default, each Argo Cluster uses its own encryption key that is associated with a specific repo. The secrets encrypted on one cluster are not usable by another cluster. If you have two clusters that you want to share secrets, you must copy the encryption key from one cluster to the other. Here are the steps:

1.  Under SECRET MANAGEMENT, click **ENCRYPTION KEY** and enter the encyption key from another cluster (Super Admin only).
2.  Click **UPDATE**.

## Obtaining the Secret Key Pair from Argo

1.  Under SECRET MANAGEMENT, click **VIEW** to see the current encryption key (Super Admin only).

2.  Under **SECRET MANAGEMENT**, click **VIEW**.

3.  Click **COPY** to obtain the encryption key.
4.  Click **DONE** to exit the dialog.

## Encrypting a Secret

1.  Click ![](../../../images/configurations_manage_system_settings_encryptiontool_icon.png) in the upper right corner.

2.  Enter the URL to the SCM repo you want to access.

    NOTE: A secret encrypted for one repo cannot be used for another repo. This prevents users from cutting and pasting secrets from one repo and using them for arbitrary purposes in another repo that they create.

3.  Enter your unecrypted secret .
4.  Click **ENCRYPT**.

    The encrypted secret is returned.

5.  Click **COPY**. You can now paste this string directly into your YAML template as input parameters for a workflow or into the "Review workflow parameters"dialog right before you run a workflow. See the Argo YAML Tutorial and Reference for details.

## Configuring the Signed Certificate for Argo

NOTE: When you created your Argo, by default the Cluster provides a self-signed certificate. This appears in the **SET CERTIFICATE** section under the heading PUBLIC CERTIFICATE. You can replace the self-signed certificate from Argo with your signed certificates from a certificate authority (CA).

1.  Under **SET CERTIFICATE**, enter your signed certificate.
2.  Click **UPDATE**.

To remove the private key, press **DELETE**.

## To enable or disable spot instances for a cluster:

Under **INSTANCE CONFIGURATION**, toggle Spot Instances to enable or disable spot instances for your cluster.
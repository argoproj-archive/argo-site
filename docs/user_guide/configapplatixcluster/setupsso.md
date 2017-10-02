# Configuring Single Sign-On

The Argo uses the Security Assertion Markup Language (SAML) to securely connect Argo with an Identity Provider (IdP) and enable single sign-on (SSO). Argo is the service provider and Active Directory is an example of an Identity Provider.

By default, when a new SAML user is registered with your Argo, the new user is assigned to a developer group, which has restricted permissions to the Cluster. If the new user needs administrative privileges, then you must promote the new user account to an administrative account.

Go to Click **Navigation bar** >  **Administration** > **Users** > **SSO CONFIGURATION** and follow these steps for configuring SSO for Argo:

## Step 1 Give Argo Information to your Identity Provider

To enable single sign-on from your IdP into Argo, your IdP needs this required information from Argo:

*   The secure URL for accessing Argo's SAML service. Click **COPY** and paste this sign-on URL into your IdP's settings.
*   The secure URL for accessing your Argo cluster. Click **COPY** and paste this entity id URL into your IdP's settings.

(Optional) If your IdP or security system also requires authentication of Argo with digital certificates, then you must also provide

*   A certificate that contains Argo's public key.

## Step 2 Configure Argo for Single Sign-On

In this step, you configure Argo with the information that your IdP provides.

*   Enter the following information for these fields:
    *   **Sign In Button Label** - Add a label to a button for SSO that automatically appears on your login page. Your users click this button to perform SSO into the Argo cluster.
    *   **SSO URL** - Enter the secure URL that the IdP returns for performing SSO into your security system.
    *   **Public Certificate** - (Optional) If your environment requires authentication of the IdP, you can enter the IdP's certificate with the public key that it returned after setting up SSO with Argo.
    *   (Optional) Click **Advanced Settings**. Your security system may require the entry of additional attribute values for SSO. Check the documentation for your security system to see if the following values are necessary:
        *   EMAIL ATTRIBUTE (Required)
        *   FIRST NAME ATTRIBUTE (Optional)
        *   LAST NAME ATTRIBUTE (Optional)
        *   GROUP ATTRIBUTE (Optional)
        *   DISPLAY NAME (Optional)
        *   DESCRIPTION (Optional)
    *   (Optional) Check **DEFLATE RESPONSE ENCODED** if your IdP provides an encrypted response and you need it to be decrypted.

**NOTE**: By selecting any of the following 3 options, you are configuring Argo to respond correctly to a SAML request or response from an IdP provider:

*   (Optional) Check **SIGN REQUEST** if your IdP requires your request to be signed.
*   (Optional) Check **SIGN RESPONSE** if your IdP provides a response that is signed.
*   (Optional) Check **SIGN RESPONSE ASSERTION** if your IdP provides a response assertion that is signed.

*   Click **UPDATE** if you have modified any information.

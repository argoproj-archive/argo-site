# Managing Users and Permissions for Argo

Argo provides two levels of access privileges for modifying a user's permissions and profiles:

*   Administrator - Full access to modify Configurations tab including the following:
    *   View the status of all users, or only those that are active, or those who have been disabled
    *   Invite users and assign them administrator or developer privileges.
    *   Disable a user's access.
    *   Delete a user from the Argo.
    *   Grant administrative privileges for a user.

        NOTE: If you created the cluster from the Argo SaaS portal, by default you were assigned "administrator" privileges.

*   Developer - Access only to modify their own profile, which is comprised of their user credentials.

### Invite Users and Set Their Permissions (Administrative User Only)

1.  Click **Navigation bar** >  **Administration** > **Users**.

2.  Click **+**.

3.  Enter the email address of the user you want to add.

    NOTE: If the email address is a distribution list, check **MAILING GROUP**.

4.  Under **GROUPS**, select **admin** or **developer** to set the level of access privileges for the user.
5.  Enter **FIRST NAME** and **LAST NAME** for the user.
6.  Click **INVITE**.

To view the invitations that have been sent out and have not received a response, click **INVITATIONS**.

This page shows the email address, the name of the user, and the date that the invitation expires.

### Modify a User's Information or Access Privileges (Administrative User Only)

1. Go to Click **Navigation bar** >  **Administration** > **Users**. (Displays all users of the Cluster and their statuses)

2. Select the row of the user and click ![](../../../images/clear_3_dots_34x34.png). Then choose one of the options:

 *  **Edit Profile** - Change a user's name, label, or password.
 *   **Deactivate** or **Activate** User - Changes status of user to "Deactivated" or "Active".
 *   **Delete User** - Removes the user from accessing the Argo system.
 *   **Grant** or **Admin Access** - Grants or revokes administrative privileges for a user.

*   Follow the prompts to execute the option or click **Cancel** to back out of your changes.

### Modify a User's Profile (Developer User Only)

1.  At top-right corner, click ![](../../../images/_c_icon_31x35.png) and select **My Profile**.

    The profile displays.

2.  Modify the following fields for your profile by clicking

    **Name** - the name you want to appear for your profile

    **Password** - the password for your profile.

3.  Click **Done** when satisfied with your entries.
4.  (Optional) Under **Manage your labels**, enter a name for your label and click **Add**.

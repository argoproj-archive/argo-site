# Managing Users and Permissions for the <span class="GeneralKubernetes Cluster with Argo">Argo</span>

<span class="GeneralApplatix Platform Name">Argo</span> provides two levels of access privileges for modifying a user's permissions and profiles:

*   <span class="UI_element">Administrator</span> - Full access to modify <span class="UI_element">Configurations</span> tab including the following:
    *   View the status of all users, or only those that are active, or those who have been disabled
    *   Invite users and assign them administrator or developer privileges.
    *   Disable a user's access.
    *   Delete a user from the <span class="GeneralKubernetes Cluster with Argo">Argo</span>.
    *   Grant administrative privileges for a user.

        NOTE: If you created the cluster from the <span class="GeneralApplatix Platform Name">Argo</span> SaaS portal, by default you were assigned "administrator" privileges.

*   <span class="UI_element">Developer</span> - Access only to modify their own profile, which is comprised of their user credentials.

### Invite Users and Set Their Permissions (Administrative User Only)

1.  Click <span class="UI_element">Configurations</span> > <span class="UI_element">Manage Users and Permissions</span>.

2.  Click **+**.

3.  Enter the email address of the user you want to add.

    NOTE: If the email address is a distribution list, check <span class="UI_element">MAILING GROUP</span>.

4.  Click <span class="UI_element">GROUPS</span> and select **admin** or **developer** to set the level of access privileges for the user.
5.  Enter **FIRST NAME** and **LAST NAME** for the user.
6.  Click <span class="UI_element">INVITE</span>.

To view the invitations that have been sent out and have not received a response, click **INVITATIONS**.

This page shows the email address, the name of the user, and the date that the invitation expires.

### Modify a User's Information or Access Privileges (Administrative User Only)

*   Go to <span class="UI_element">Configurations</span> > <span class="UI_element">Manage Users and Permissions</span>. (Displays all users of the Cluster and their statuses)

    ![](../docs/images/configurations_manage_user_permissions_578x271.png)

*   Select the row of the user and click ![](../docs/images/clear_3_dots_34x34.png). Then choose one of the options:

*   **Edit Profile** - Change a user's name, label, or password.
*   **Disable** or **Enable** <span class="UI_element">User</span>- Changes status of user to "Disabled" or "Active".
*   **Delete User** - Removes the user from accessing the Applatix system.
*   **Grant Admin Access** - Grants administrative privileges for a user.

*   Follow the prompts to execute the option or click <span class="UI_element">Cancel</span> to back out of your changes.

### Modify a User's Profile (Developer User Only)

1.  At bottom left, click ![](../docs/images/_c_icon_31x35.png) and select <span class="UI_element">My Profile</span>.

    ![](../docs/images/developer_my_profile_accesspriv_126x91.png)

    The profile displays.

    ![](../docs/images/modify_profile_357x236.png)

2.  Modify the following fields for your profile by clicking

    <span class="UI_element">Name</span> - the name you want to appear for your profile

    <span class="UI_element">Password</span> - the password for your profile.

3.  Click <span class="UI_element">Done</span> when satisfied with your entries.
4.  (Optional) <span class="UI_element">Under Manage your labels</span>, enter a name for your label and click <span class="UI_element">Add</span>.
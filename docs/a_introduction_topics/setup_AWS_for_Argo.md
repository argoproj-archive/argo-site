# Set Up AWS for Argo

<!--per Ed, this section (creating policies and assigning the policy to a role) is only needed if a customer wants Applatix to manage their AWS cluster for them. Otherwise, our users only need to create standard AWS credentials-->

## Step 1: Setting Up AWS to Enable Argo

To ensure the security of the Argo cluster running in AWS, the  solution requires that you create a “cross account role” that allows Argo to install in your AWS account. Amazon recommends creating this role as the best security practice for 3rd-party software running in AWS.

IMPORTANT: You must create a policy first before you can create the cross-account role. The policy is associated with the role. Here are the steps:

## Create a Policy:

1. Go to your AWS console and select **IAM** (Identity And Management) service.

2. Select **Policies** from left side bar and click **Create Policy**.

3. Select **Create Your Own Policy**.  NOTE: You can skip Step 2 "Set Permissions".

 ![](./../../images/AWS_Create_Policy.png)

4. Specify a Policy Name (such as "ArgoManagement") and a Description (such as "Allow Argo to install and update their software").

5. Copy the following policy text:

 ```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*",
                "ec2:*",
                "autoscaling:*",
                "cloudwatch:*",
                "elasticloadbalancing:*",
                "iam:AddRoleToInstanceProfile",
                "iam:CreateInstanceProfile",
                "iam:CreateRole",
                "iam:DeleteInstanceProfile",
                "iam:DeleteRole",
                "iam:DeleteRolePolicy",
                "iam:GetInstanceProfile",
                "iam:GetRole",
                "iam:GetRolePolicy",
                "iam:ListInstanceProfilesForRole",
                "iam:ListRolePolicies",
                "iam:ListRoles",
                "iam:PassRole",
                "iam:PutRolePolicy",
                "iam:RemoveRoleFromInstanceProfile",
                "iam:UploadServerCertificate",
                "iam:DeleteServerCertificate",
                "iam:GetServerCertificate"
            ],
            "Resource": "*"
        }
    ]
}
 ```

6. Paste the text into Policy Document and click Create Policy.

 The Review Policy panel in AWS will look similar to the following screenshot:

 ![](./../../images/AWS_Review_Policy_Panel.png)


## Create the Cross-Account Role:

1. Click **Roles** on left side bar and click **Create New Role**.


2. Specify Role Name (such as "Argo-management") and click Next Step.

 ![](./../../images/AWS_Set_Role_Name.png)

Select **Role for Cross-Account Access** and **Provide access between your AWS account and a 3rd party AWS account**.

 ![](./../../images/AWS_Select_Role_Type.png)

Fill in Establish Trust step:


For Account ID, enter "863733863519". (This is the Argo AWS account that will be used to install the cluster for you.)


For External ID, enter your Argo Customer ID, which you can get from Argo portal.


Leave Require MFA unchecked.

 ![](./../../images/AWS_Step3_Establish_Trust.png)

Attach the "ArgoManagement" policy you just created.

 ![](./../../images/AWS_Attach_Policy_to Role.png)

 
Click Next Step, and review your role. Please copy the "Role ARN" to your clip board.

 ![](./../../images/AWS_Review _Role_ARN.png)

Click Create Role to finish creating the role.

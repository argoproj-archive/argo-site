# Step 1: Setting Up AWS to Allow <span class="GeneralKubernetes Cluster with Argo">Argo</span>Access

To ensure the security of the <span class="GeneralKubernetes Cluster with Argo">Argo</span> running in AWS, the <span class="GeneralApplatix Platform Name">Argo</span> solution requires that you create a “cross account role” that allows the Argo to install in your AWS account. Amazon recommends creating this role as the best security practice for 3rd-party software running in AWS.

You must create a policy first before you can create the cross-account role. The policy is associated with the role. Here are the steps:

### To Create a Policy:

1.  *   Go to your AWS console and select IAM (Identity And Management) service.
2.  *   Select Policies from left side bar and click Create Policy.
3.  *   Select Create Your Own Policy.  NOTE: You can skip Step 2 "Set Permissions".
4.  ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Policy.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_521x207.png)
5.  *   Specify a Policy Name (such as "ApplatixManagement") and a Description (such as "Allow Applatix to install and update their software").
6.  *   Copy the following policy text:

        <div>

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

        </div>

        *   Paste the text into Policy Document and click Create Policy.

        The Review Policy panel in AWS will look similar to the following screenshot:

        ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Policy2.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_1_386x328.png)

7.  To Create the Cross-Account Role:
8.  *   Click Roles on left side bar and click Create New Role.
9.  *   Specify Role Name (such as "applatix-management") and click Next Step.
10.  ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Role.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_2_524x112.png)
11.  *   Select Role for Cross-Account Access and Provide access between your AWS account and a 3rd party AWS account.
12.  ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Role2.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_3_511x134.png)
13.  *   Fill in Establish Trust step:  

14.  *   For Account ID, enter "863733863519". (This is the Applatix AWS account that will be used to install the cluster for you.)
15.  *   For External ID, enter your Applatix Customer ID, which you can get from Applatix portal.
16.  *   Leave Require MFA unchecked.
17.  ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Role3.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_4_571x120.png)
18.  *   Attach the "ApplatixManagement" policy you just created.
19.  ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Role4.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_5_507x104.png)

21.  *   Click Next Step, and review your role. Please copy the "Role ARN" to your clip board.
22.  ![/Users/saradhi/Desktop/User Guide/Screenshots/Create-Role5.png](docs/images/applatix_quick_start_guide_final_release2.1_draft/applatix_quick_start_guide_final_release2.1_draft_1_6_546x177.png)
23.  *   Click Create Role to finish creating the role.
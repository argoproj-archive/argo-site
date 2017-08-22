# Publishing a Workflow or Application in Catalog

One of the typical tasks you’ll perform in Applatix is to make your common workflows or applications available for other users to run and/or deploy.

By default, the Applatix Cloud Delivery Platform connects to several apps and projects published in Applatix public GitHub repo. These apps and projects are automatically loaded into the Applatix Catalog. Additionally, you can also create and publish your own workflows and apps in the Catalog.

To accomplish this task, you’ll use a project template to make the application and workflow visible in the Catalog:

The following example is a project template for building a Golang program that is published to the Catalog.

<div xmlns="">

---

type: project

name: Sample Project

description: Sample Project to launch golang example

template: golang check and build

actions:

# list of actions that can be launched

  -

    name: build

    template: golang check and build

    parameters:

      repo: "https://github.com/Applatix/appstore.git"

  assets:

  icon: "/sample/sample.png"

  detail: "/sample/detail.md" 

categories: ["language", "promoted"]

# whether the project will be visible in the Applatix Catalog.

# Project is visible in the Applatix Catalog if at least one branch criteria matches.

publish:

  branches:

  # branches are in regular expression format, eg. ".*" matches all branches 

    -master

    -r.*

labels:

  release: 1.0.2

  milestone: m6

</div>

In the code example, the project name and description will display as the name and short description of the corresponding app on the Applatix Catalog.

For all actions that can be invoked, there is a template for each action you want to invoke. In this example, the template is golang check and build.

Under assets, the value for the icon parameter points to a file containing the graphic that signifies the app; the value for the publisher_icon is another icon that overlays on the icon and quickly tells users where the app is coming from; detail contains the detailed description of the app that will be shown in the Applatix Console (“Console”). All path names are relative to the root of the source code repository containing the app.

Use the categories parameter to specify the category that the app appears in the Catalog. A "promoted" app will appear in the list of apps at the top row of the Catalog. A non-promoted app appears under a category (which is displayed as the bottom row of the Catalog).]

The publish statement indicates the branches from which the application is published. Typically, only the main branch is published. However, you can publish other branches based on the tasks to be completed (such as for testing or if different versions of the application from different release branches should be made available to users).

The labels statement is used to tag or “label” apps with metadata for search purposes.
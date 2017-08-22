# Project Templates

You use project templates to make a workflow or application available in the <span class="GeneralApplatix Catalog">Argo Catalog</span>. This makes it possible for your users to run the workflow or application from the Catalog.

A project template has the following sections.

#### Common Name and Type

*   name: the unique name of the object.

*   type: project.

*   description: optional, describes the object for the benefit of the users.

<div xmlns="">

---

type: project

name: Sample Go Project

description: Sample Project to launch golang example

template: golang check and build

</div>

#### Actions

One or more entry points to a project. Each entry point is a reference to an existing template. An action contains these fields:

*   name: action name unique in the project

*   template: template to launch

*   parameters: optional, parameters to launch the template. The parameters should exist in the template. Parameter values defined here override the default values specified in the template.

<div xmlns="">

actions:

  -

    name: build

    template: golang check and build

    parameters:

      repo: "https://github.com/Applatix/appstore.git"

</div>

#### Assets

Project assets are used by the Applatix Catalog and include the icon and detail description of the project.

*   icon: optional, path to the icon file for the project. Only .png is supported

*   detail: optional, path to a mark down that provides details for the project

<div xmlns="">

assets:

  icon: "/sample/sample.png"

  detail: "/sample/detail.md" 

</div>

#### Categories

A list of categories under which the project displays in the Applatix Catalog.  

categories: ["language", "promoted"]

#### Publish

Zero or more criteria for publishing a project to the Applatix Catalog. Only published projects are visible in the Catalog.  

<div xmlns="">

publish:

# publish is based on branches

  branches:

  # branches are in regular expression format, eg. ".*" matches all branches 

    -master

    -r.*

</div>
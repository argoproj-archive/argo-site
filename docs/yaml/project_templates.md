# Project Templates

You use project templates to make a workflow or application available in the Argo Catalog. This makes it possible for your users to run the workflow or application from the Catalog.

A project template has the following sections.

#### Common Name and Type

*   `name`: the unique name of the object.

*   `type`: project.

*   `description`: describes the object for the benefit of the users. Optional.

```
---
type: project
name: Sample Go Project
description: Sample Project to launch golang example
template: golang check and build
```

#### Actions

Actions map the "action name" to template references. One or more entry points to a project. Each entry point is a reference to an existing template. An action contains these fields:

*   `action_name`

*   `template`: template to launch

*   `parameters`: parameters to launch the template. (Optional) The parameters should exist in the template. Parameter values defined here override the default values specified in the template.

```
actions: 
  build:
    template: golang check and build
    parameters:
      repo: "https://github.com/Argo/appstore.git"
```

#### Assets

Project assets are used by the Argo Catalog and include the icon and detail description of the project.

*   `icon`: path to the icon file for the project. (Optional) Only `.png` is supported

*   `detail`: path to a mark down that provides details for the project. (Optional)

```
assets:
  icon: "/sample/sample.png"
  detail: "/sample/detail.md"  
```

#### Categories

A list of categories under which the project displays in the Argo Catalog.  

```
categories: ["language", "promoted"]
```

#### Publish

Zero or more criteria for publishing a project to the Argo Catalog. Only published projects are visible in the Catalog.  

```
publish:
# publish is based on branches 
  branches:
  # branches are in regular expression format, eg. ".*" matches all branches  
    -master
    -r.*
```

### Example

```
---
type: project
name: Claudia
description: AWS cost and usage analysis.
actions:
  run:
    template: claudia-workflow
categories: ["monitoring", "promoted"]
publish:
  branches:
  - master
labels:
  tags: "[\"aws\"]"
  publisher: Applatix
assets:
  icon: "/claudia/icon.png"
  publisher_icon: "/claudia/AX_Pub.png"
  detail: "/claudia/detail.md"
```
# Running Nested Workflows to Execute and Record a Selenium Test

This YAML example shows how to use nested workflows to:

*   run a Selenium test against a web application ("Hello World") that runs in two web browsers (Chrome and Firefox)
*   output a video of screenshots taken during the test.

To run the test, all you need is a Selenium server, the web app to test, and the test code.

In this example, the first YAML file (**selenium_all_ax.yaml**) contains the information to run the test code and the second YAML file (**axvideo_tools.yaml**) has the information for converting the video output from a Flash format to an MPEG4 format.

## selenium_all_ax.yaml

<pre xml:space="preserve" xmlns="">

---

# Template for top-level workflow, which is supported by several nested workflows to execute the job 

type: workflow
name: selenium-example-workflow
inputs:
  parameters:

  # The commit ID and repo containing the Selenium test code

  # If this workflow is run from the Applatix Console, then 

  # by default the repo and commit are specified via

  # the commit from the active GUI session

    commit:
      default: "%%session.commit%%"
    repo:
      default: "%%session.repo%%"
    browser:
      default: $[chrome,firefox]$
steps:

# Calls the nested workflows for checking out code 

# from the repo, and running the Selenium test with
# video recording

- checkout:
    template: "axscm-checkout"
- test_with_video:
    template: selenium-test-video-workflow
    parameters:
      code: "%%steps.checkout.code%%"
---

# Template for the child workflow that runs the actual test

# and converts the output of the test workflow video from

# .flv format to .mp4 format

type: workflow
name: selenium-test-video-workflow
inputs:
  parameters:

# The test code and the browser of the target

# Selenium server are passed in as parameters

# from the selenium-example-workflow

    code:
    browser:
steps:

- test:
    template: selenium-test-workflow
- convert:

    # This template is in a separate YAML file in the Applatix repo

    template: axvideo-converter

# To ensure that the conversion step always runs before 

# exiting the sequence of steps, always_run flag is set to true.

    flags:
      always_run: true
    parameters:
      video_input: "%%steps.test.video%%"
---

# Template that creates the necessary fixtures 
# and calls the template that runs the Selenium test

type: workflow
name: selenium-test-workflow
inputs:
  artifacts:

  # The test code artifact defined above is unpacked into the /src directory
  - from: "%%code%%"
    path: "/src"
  parameters:

    code:
    browser:
fixtures:

# Instantiate the Selenium test server, the (web) app,
# and the VNC recorder client as dynamic fixtures before

# the test runs

- selenium:
    template: "selenium-server"
- app:
    template: selenium-test-app
- vnc_recorder:
    template: vnc-recorder

# vnc_recorder takes two parameters;

# one obtains the IP address of the Selenium fixture,

# and the other stores the video of the test.

    parameters:
      remote: "%%fixtures.selenium.ip%%"
      output: "/tmp/video.flv"
steps:

# Run the Selenium text and output the recorded video

- e2e_test:
    template: selenium_e2e_test

    # The end-to-end test takes two parameters, 

    # IP address of the fixture for the Selenium server

    # and the IP address of the fixture for the web application.

    parameters:

      # Obtain the IP address for the Selenium server and the 

      # web app that were instantiated earlier as a fixtures

      selenium_ip: "%%fixtures.selenium.ip%%"
      app_ip:  "%%fixtures.app.ip%%"
outputs:
  artifacts:
    video:
      from: "%%fixtures.vnc_recorder.video%%"
---
type: container

# Template for running the Selenium Test script as a container

# The script must be customized to run your tests and it will be

# stored in your repository

name: selenium_e2e_test
inputs:
  artifacts:
  - from: "%%code%%"
    path: "/src"
  parameters:

    # The test code, IP address for the Selenium server, and 

    # the IP address for the web app are passed in as parameters

    # from the selenium-test-workflow template

    code:
    selenium_ip:
    app_ip:
    browser:
container:
  resources:
    mem_mib: 2048
    cpu_cores: 0.4
    disk_gb: 2

  # Test script is written in python

  image: python:3.5.2

  # For this docker command, the -e option asks for the value of the

  # APP_URL environment variable, which is stored as a link to the

  # containerized web application

  docker_options: '-e "APP_URL=http://%%app_ip%%:8000/index.html"'

  # The IP address of the Selenium server is passed in as %%selenium_ip%%

  command: sh -c 'pip3 install -r /src/selenium/tests/requirements.txt && mkdir -p /tmp/report && pytest --html=/tmp/report/index.html -vv /src/selenium/tests/test.py --remote %%selenium_ip%% --browser %%browser%% --capture=no'

# The output of the Selenium test

outputs:

  artifacts:

  # A report that the test generates is taken from the specified path and output

  # as an HTML artifact

    report:
      path: "/tmp/report"
      meta_data:
      - browsable
---
type: container

# Container for the web application that you are testing.

# In this example, the web app is "Hello World"

name: selenium-test-app
inputs:
  parameters:
    code:
  artifacts:

  # The test code artifact defined above is unpacked into the /src directory
  - from: "%%code%%"
    path: "/src"
container:
  resources:
    mem_mib: 1024
    cpu_cores: 0.1
  image: python:3.5.2

  command: sh -c 'cd /src/selenium/app && python -m http.server 8000'

---

# Template to run a Selenium standalone server as a container

# against Firefox and Chrome

type: container
name: selenium-server
description: Selenium container for selenium firefox and chrome
inputs:
  parameters:
    browser:
container:
  resources:
    mem_mib: 1024
    cpu_cores: 0.1

  # Container image for the Selenium standalone server on DockerHub
  image: "selenium/standalone-%%browser%%-debug:latest"

</pre>

## axvideo_tools.yaml

<pre xml:space="preserve" style="font-family: 'Courier New';font-size: 10pt;" xmlns="">---
type: container
name: vnc-recorder
description: Base VNC recorder container
container:
  resources:
    mem_mib: 1024
    cpu_cores: 0.1
  image: get.applatix.io/applatix/axvncrecorder:v1
  docker_options: "-e host=%%remote%% -e output=%%output%%"
inputs:
    parameters:
      remote:
      output:
outputs:
  artifacts:
    video:
      path: "%%output%%"
---
type: service_template
subtype: container
name: axvideo-converter
description: Convert FLV to MPEG
container:
  resources:
    mem_mib: 1024
    cpu_cores: 0.1
  image: get.applatix.io/applatix/axvncrecorder:latest
  command: "mkdir -p /tmp/report && ffmpeg -i /tmp/video.flv -ar 22050 /tmp/report/video.mp4 && echo '<!DOCTYPE html><html><body><video width=\"640\" height=\"480\" controls><source src=\"video.mp4\" type=\"video/mp4\"></video></body></html>' > /tmp/report/index.html"
inputs:
  artifacts:
  - from: "%%video_input%%"
    path: "/tmp"
  parameters:
    video_input:
outputs:
  artifacts:
    video:
      path: "/tmp/report"
      meta_data:
      - browsable</pre>

## Viewing the Test Outputs and Artifacts

You can view the video output of the Selenium test by going to the specific Job from the Timeline, clicking a container and selecting the icon for "**Download artifact video**":

![](docs/images/timeline_workflow_seleniumtest_browseartifact-convertedvideo_765x353.png)

To view a report, go to the E2E_TEST container and click "**Download artifact report**":

![](docs/images/timeline_workflow_seleniumtest_downloadreportartifact_778x356.png)

## Viewing Information for a Test Failure

When a test fails, you can view a report of the failure by clicking the container that has the red circle and selecting "**Browse artifact report**":

![](../../Resources/Images/Timeline_Workflow_Selenium_Test_Failure_BrowseArtifact.png)

![](docs/images/timeline_workflow_selenium_test_failure_browseartifact_766x353.png)

The dialog opens displaying the results and highlighting the lines that failed:

![](../../Resources/Images/Timeline_Workflow_Selenium_Test_Failure_ViewResults.png)

![](docs/images/timeline_workflow_selenium_test_failure_viewresults_809x373.png)

## Accessing the YAML Files for this Example

To see the YAML files for the Selenium test from the Console, click **Catalog** > **DevOps** > **Selenium Testing**:

![](docs/images/catalog_devops_seleniumtesting_813x375.png)

Or if you prefer to access the YAML templates from GitHub, go to [https://github.com/Applatix/appstore](https://github.com/Applatix/appstore) and click the .`applatix` directory.

![](docs/images/applatix_yaml_github_808x372.png)
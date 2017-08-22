# What's New in Argo

## YAML 2.0

# hard-coded value for sleep argument

---

type: container

name: noop-container

description: Container which does nothing but sleep for 2 minutes

image: alpine:latest

command: ["sh", "-c"]

args: ["echo 'sleeping for 2 minutes' ; sleep 120; echo 'done'"]

# reference to SLEEP parameter which gets its value at runtime

---

type: container

name: test-container-with-input-parameter

description: Container which has a required input parameter

image: alpine:latest

command: ["sh", "-c"]

args: ["echo 'sleeping for %%inputs.parameters.SLEEP%% seconds' ; sleep %%inputs.parameters.SLEEP%%; echo 'done'"]

inputs:

parameters:

SLEEP:

# reference to SLEEP argument if no value is supplied; i.e. default

---

type: container

name: test-container-with-default-input-parameter

description: Container which has a input parameter with a default value

image: alpine:latest

command: ["sh", "-c"]

args: ["echo 'sleeping for %%inputs.parameters.SLEEP%% seconds' ; sleep %%inputs.parameters.SLEEP%%; echo 'done'"]

inputs:

parameters:

SLEEP:

default: 60
# Pave devops-takehome-app

The Terraform code located in this repository is currently unfinished and does not work.

The terraform should successfully **_plan_**, this means you will need to point it at a valid GCP account, there is no need to apply it though.

Try and format the code in a way that makes it most readable and aim to keep it consistent.

using the following pointers, get as far as you can through this exercise. **Keep notes** as to the decisions made and be ready to explain alternative options.

1. The `domain` variable can be replaced with anything you choose

1. The code should create a Cloud Run service and associated DNS record in a GCP DNS zone pointing to the Cloud Run domain generated. We should be able to use the tfvars files in `workspaces/` to set workspace dependent settings

1. Staging should create the following service:
    1. backend
        - image: us-docker.pkg.dev/cloudrun/container/hello
        - dns name: backend.staging.[domain].com

1. Production should create the following cloud run services:
    1. backend
        - image: us-docker.pkg.dev/cloudrun/container/hello
        - dns name: backend.[domain].com
    1. frontend
        - image: us-docker.pkg.dev/cloudrun/container/hello
        - dns name: frontend.[domain].com

1. Duplicate Cloud Run names and DNS record data should fail when planning

<!-- markdownlint-disable MD012 -->
<!-- markdownlint-disable MD033 -->
<!-- BEGIN_TF_DOCS -->

<!-- END_TF_DOCS -->
<!-- markdownlint-enable MD033 -->
<!-- markdownlint-enable MD012 -->

The Terraform code located in `terraform/` is currently unfinished and doesn't work.

[domain] can be replaced with anything you choose. 

The terraform should successfully plan, this means you will need to point it at a valid GCP account, there is no need to apply.

Try and format the code in a way that makes it most readable, keep it consistent. 

Go through the following steps, get as far as you can. Keep notes as to the decisions made and be ready to explain alternative options. 

```
1. The code should create a Cloud Run service and associated DNS record pointing to the CloudRun domain generated. We should be able to use the tfvars files in `workspaces/` to set workspace dependent settings

2. Production should create the following cloud run services
    1. backend
        - image: `us-docker.pkg.dev/cloudrun/container/hello`
        - dns name: `backend.[domain].com`
    2. frontend
        - image: us-docker.pkg.dev/cloudrun/container/hello
        - dns name: frontend.[domain].com

3. Staging should create the following service
    1. backend
        - image: us-docker.pkg.dev/cloudrun/container/hello
        - dns name: backend.staging-[domain].com

4. Duplicate Cloud Run names and dns record data should fail at the plan stage
```

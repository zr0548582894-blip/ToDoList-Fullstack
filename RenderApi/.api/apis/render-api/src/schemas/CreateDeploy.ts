const CreateDeploy = {
  "body": {
    "type": "object",
    "properties": {
      "buildId": {
        "type": "string",
        "description": "The ID of the build to deploy. Cannot be combined with `commitId`, `imageUrl`, or `deployMode`.\n"
      },
      "clearCache": {
        "type": "string",
        "enum": [
          "clear",
          "do_not_clear"
        ],
        "default": "do_not_clear",
        "description": "If `clear`, Render clears the service's build cache before deploying. This can be useful if you're experiencing issues with your build."
      },
      "commitId": {
        "type": "string",
        "description": "The SHA of a specific Git commit to deploy for a service. Defaults to the latest commit on the service's connected branch. Cannot be combined with `buildId`, `imageUrl`, or `deployMode: deploy_only`.\n\nNote that deploying a specific commit with this endpoint does not disable autodeploys for the service.\n\nYou can toggle autodeploys for your service with the [Update service](https://api-docs.render.com/reference/update-service) endpoint or in the Render Dashboard.\n\nNot supported for cron jobs.\n"
      },
      "imageUrl": {
        "type": "string",
        "description": "The URL of the image to deploy for an image-backed service. Cannot be combined with `buildId`, `commitId`, or `deployMode: deploy_only`.\n\nThe host, repository, and image name all must match the currently configured image for the service.\n"
      },
      "deployMode": {
        "description": "Deployment mode controlling build and deploy behavior.\n\nDefaults to `build_and_deploy` when not specified.\n\n**Validation:** `deployMode` cannot be combined with `buildId`. `deploy_only` cannot be combined with `commitId`, `imageUrl`, or `clearCache`.\n",
        "type": "string",
        "enum": [
          "deploy_only",
          "build_and_deploy"
        ],
        "default": "build_and_deploy"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
        ]
      }
    ]
  }
} as const;
export default CreateDeploy

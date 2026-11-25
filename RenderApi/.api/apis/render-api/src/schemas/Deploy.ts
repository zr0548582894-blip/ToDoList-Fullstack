import DeployStatus from './DeployStatus.js';

const Deploy = {
  "type": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "buildId": {
      "type": "string",
      "description": "The ID of the build this deploy shipped. Only present for deploys of a build from a Build Source."
    },
    "commit": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "image": {
      "description": "Image information used when creating the deploy. Not present for Git-backed deploys",
      "type": "object",
      "properties": {
        "ref": {
          "description": "Image reference used when creating the deploy",
          "type": "string"
        },
        "sha": {
          "description": "SHA that the image reference was resolved to when creating the deploy",
          "type": "string"
        },
        "registryCredential": {
          "description": "Name of credential used to pull the image, if provided",
          "type": "string"
        }
      }
    },
    "status": DeployStatus,
    "trigger": {
      "type": "string",
      "enum": [
        "api",
        "blueprint_sync",
        "deploy_hook",
        "deployed_by_render",
        "manual",
        "other",
        "new_commit",
        "rollback",
        "service_resumed",
        "service_updated"
      ],
      "description": "`api` `blueprint_sync` `deploy_hook` `deployed_by_render` `manual` `other` `new_commit` `rollback` `service_resumed` `service_updated`"
    },
    "startedAt": {
      "type": "string",
      "format": "date-time"
    },
    "finishedAt": {
      "type": "string",
      "format": "date-time"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "title": "deploy",
  "x-readme-ref-name": "deploy"
} as const;
export default Deploy

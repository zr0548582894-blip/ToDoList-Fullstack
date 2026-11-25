import AutoDeploy from './AutoDeploy.js';
import BackgroundWorkerDetailsPost from './BackgroundWorkerDetailsPost.js';
import BuildFilter from './BuildFilter.js';
import CronJobDetailsPost from './CronJobDetailsPost.js';
import Image from './Image.js';
import PrivateServiceDetailsPost from './PrivateServiceDetailsPost.js';
import ServiceType from './ServiceType.js';
import StaticSiteDetailsPost from './StaticSiteDetailsPost.js';
import WebServiceDetailsPost from './WebServiceDetailsPost.js';

const ServicePost = {
  "type": "object",
  "required": [
    "type",
    "name",
    "ownerId"
  ],
  "properties": {
    "type": ServiceType,
    "name": {
      "type": "string",
      "description": "The service's name. Must be unique within the workspace."
    },
    "ownerId": {
      "type": "string",
      "description": "The ID of the workspace the service belongs to. Obtain your workspace's ID from its Settings page in the Render Dashboard."
    },
    "repo": {
      "type": "string",
      "description": "The service's repository URL. Do not specify a branch in this string (use the `branch` parameter instead).",
      "examples": [
        "https://github.com/render-examples/flask-hello-world"
      ]
    },
    "autoDeploy": AutoDeploy,
    "autoDeployTrigger": {
      "type": "string",
      "enum": [
        "commit",
        "off",
        "checksPass"
      ],
      "description": "Controls autodeploy behavior.\n\n- `commit`: Deploy each time a commit is pushed to the service's linked branch.\n- `checksPass`: Deploy each time a commit is pushed to the linked branch, but only after the commit's CI checks pass.\n- `off`: Disable autodeploys.\n"
    },
    "branch": {
      "type": "string",
      "description": "The repo branch to pull, build, and deploy. If omitted, uses the repository's default branch."
    },
    "image": Image,
    "buildFilter": BuildFilter,
    "rootDir": {
      "type": "string"
    },
    "envVars": {
      "type": "array",
      "items": {
        "type": "object",
        "oneOf": [
          {
            "type": "object",
            "required": [
              "key",
              "value"
            ],
            "properties": {
              "key": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            }
          },
          {
            "type": "object",
            "required": [
              "key",
              "generateValue"
            ],
            "properties": {
              "key": {
                "type": "string"
              },
              "generateValue": {
                "type": "boolean",
                "description": "If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`."
              }
            }
          }
        ]
      }
    },
    "secretFiles": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "name",
          "content"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "content": {
            "type": "string"
          }
        }
      }
    },
    "environmentId": {
      "type": "string",
      "description": "The ID of the environment the service belongs to, if any. Obtain an environment's ID from its Settings page in the Render Dashboard."
    },
    "serviceDetails": {
      "oneOf": [
        StaticSiteDetailsPost,
        WebServiceDetailsPost,
        PrivateServiceDetailsPost,
        BackgroundWorkerDetailsPost,
        CronJobDetailsPost
      ]
    }
  },
  "title": "servicePOST",
  "x-readme-ref-name": "servicePOST",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default ServicePost

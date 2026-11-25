import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import EnvSpecificDetailsPost from './EnvSpecificDetailsPost.js';
import MaintenanceMode from './MaintenanceMode.js';
import MaxShutdownDelaySeconds from './MaxShutdownDelaySeconds.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import Region from './Region.js';
import RenderSubdomainPolicy from './RenderSubdomainPolicy.js';
import ServiceDisk from './ServiceDisk.js';
import ServiceEnv from './ServiceEnv.js';

const WebServiceDetailsPost = {
  "type": "object",
  "properties": {
    "buildSourceId": {
      "description": "The ID of the Build Source to build and deploy from. Provides all source and build configuration: omit `repo`, `branch`, `image`, `buildFilter`, `runtime`, and build-related `envSpecificDetails` fields when set. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.",
      "type": "string"
    },
    "autoscaling": {
      "type": "object",
      "required": [
        "enabled",
        "min",
        "max",
        "criteria"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "default": false
        },
        "min": {
          "type": "integer",
          "description": "The minimum number of instances for the service"
        },
        "max": {
          "type": "integer",
          "description": "The maximum number of instances for the service"
        },
        "criteria": {
          "type": "object",
          "required": [
            "cpu",
            "memory"
          ],
          "properties": {
            "cpu": {
              "type": "object",
              "required": [
                "enabled",
                "percentage"
              ],
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "default": false
                },
                "percentage": {
                  "type": "integer",
                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                }
              }
            },
            "memory": {
              "type": "object",
              "required": [
                "enabled",
                "percentage"
              ],
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "default": false
                },
                "percentage": {
                  "type": "integer",
                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                }
              }
            }
          }
        }
      }
    },
    "disk": ServiceDisk,
    "env": ServiceEnv,
    "runtime": {
      "x-go-type-skip-optional-pointer": true,
      "description": "Required unless `buildSourceId` is set, since the build source provides its own runtime.",
      "type": "string",
      "enum": [
        "docker",
        "elixir",
        "go",
        "node",
        "python",
        "ruby",
        "rust",
        "image"
      ]
    },
    "envSpecificDetails": EnvSpecificDetailsPost,
    "healthCheckPath": {
      "type": "string"
    },
    "maintenanceMode": MaintenanceMode,
    "numInstances": {
      "type": "integer",
      "minimum": 1,
      "description": "Defaults to 1"
    },
    "plan": {
      "default": "0.5c-512mb",
      "description": "The compute plan to use. If omitted, defaults to `0.5c-512mb` when creating a new service.",
      "type": "string",
      "enum": [
        "starter",
        "starter_plus",
        "standard",
        "standard_plus",
        "pro",
        "pro_plus",
        "pro_max",
        "pro_ultra",
        "free",
        "custom",
        "starter_legacy",
        "standard_legacy",
        "standard_plus_legacy",
        "pro_legacy",
        "pro_plus_legacy",
        "0.5c-512mb",
        "1c-2g",
        "2c-4g",
        "2c-8g",
        "2c-16g",
        "4c-8g",
        "4c-16g",
        "4c-32g",
        "8c-16g",
        "8c-32g",
        "8c-64g",
        "12c-24g",
        "12c-48g",
        "12c-96g"
      ],
      "examples": [
        "starter"
      ]
    },
    "preDeployCommand": {
      "type": "string"
    },
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "region": Region,
    "maxShutdownDelaySeconds": MaxShutdownDelaySeconds,
    "renderSubdomainPolicy": RenderSubdomainPolicy,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "webServiceDetailsPOST",
  "x-readme-ref-name": "webServiceDetailsPOST"
} as const;
export default WebServiceDetailsPost

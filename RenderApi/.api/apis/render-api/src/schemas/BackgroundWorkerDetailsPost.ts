import EnvSpecificDetailsPost from './EnvSpecificDetailsPost.js';
import MaxShutdownDelaySeconds from './MaxShutdownDelaySeconds.js';
import PaidPlan from './PaidPlan.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import Region from './Region.js';
import ServiceDisk from './ServiceDisk.js';
import ServiceEnv from './ServiceEnv.js';

const BackgroundWorkerDetailsPost = {
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
    "numInstances": {
      "type": "integer",
      "minimum": 1,
      "default": 1,
      "description": "Defaults to 1"
    },
    "plan": PaidPlan,
    "preDeployCommand": {
      "type": "string"
    },
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "region": Region,
    "maxShutdownDelaySeconds": MaxShutdownDelaySeconds
  },
  "title": "backgroundWorkerDetailsPOST",
  "x-readme-ref-name": "backgroundWorkerDetailsPOST"
} as const;
export default BackgroundWorkerDetailsPost

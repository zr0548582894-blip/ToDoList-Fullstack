import BuildPlan from './BuildPlan.js';
import EnvSpecificDetails from './EnvSpecificDetails.js';
import MaxShutdownDelaySeconds from './MaxShutdownDelaySeconds.js';
import Plan from './Plan.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import Region from './Region.js';
import Resource from './Resource.js';
import ServiceEnv from './ServiceEnv.js';
import ServiceRuntime from './ServiceRuntime.js';
import SshAddress from './SshAddress.js';

const BackgroundWorkerDetails = {
  "type": "object",
  "required": [
    "env",
    "runtime",
    "envSpecificDetails",
    "plan",
    "region",
    "numInstances",
    "buildPlan"
  ],
  "properties": {
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
    "disk": {
      "type": "object",
      "required": [
        "id",
        "name",
        "sizeGB",
        "mountPath"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^dsk-[0-9a-z]{20}$",
          "examples": [
            "dsk-cph1rs3idesc73a2b2mg"
          ]
        },
        "name": {
          "type": "string"
        },
        "sizeGB": {
          "type": "integer"
        },
        "mountPath": {
          "type": "string"
        }
      }
    },
    "env": ServiceEnv,
    "envSpecificDetails": EnvSpecificDetails,
    "numInstances": {
      "type": "integer",
      "description": "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service."
    },
    "parentServer": Resource,
    "plan": Plan,
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "region": Region,
    "runtime": ServiceRuntime,
    "sshAddress": SshAddress,
    "buildPlan": BuildPlan,
    "maxShutdownDelaySeconds": MaxShutdownDelaySeconds
  },
  "title": "backgroundWorkerDetails",
  "x-readme-ref-name": "backgroundWorkerDetails"
} as const;
export default BackgroundWorkerDetails

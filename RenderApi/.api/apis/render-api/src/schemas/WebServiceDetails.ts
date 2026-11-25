import BuildPlan from './BuildPlan.js';
import Cache from './Cache.js';
import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import EnvSpecificDetails from './EnvSpecificDetails.js';
import MaintenanceMode from './MaintenanceMode.js';
import MaxShutdownDelaySeconds from './MaxShutdownDelaySeconds.js';
import Plan from './Plan.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import Region from './Region.js';
import RenderSubdomainPolicy from './RenderSubdomainPolicy.js';
import Resource from './Resource.js';
import ServerPort from './ServerPort.js';
import ServiceEnv from './ServiceEnv.js';
import ServiceRuntime from './ServiceRuntime.js';
import SshAddress from './SshAddress.js';

const WebServiceDetails = {
  "type": "object",
  "required": [
    "env",
    "runtime",
    "envSpecificDetails",
    "plan",
    "region",
    "numInstances",
    "buildPlan",
    "healthCheckPath",
    "openPorts",
    "url"
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
    "cache": Cache,
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
    "healthCheckPath": {
      "type": "string"
    },
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "maintenanceMode": MaintenanceMode,
    "numInstances": {
      "type": "integer",
      "description": "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service."
    },
    "openPorts": {
      "type": "array",
      "items": ServerPort
    },
    "parentServer": Resource,
    "plan": Plan,
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "region": Region,
    "runtime": ServiceRuntime,
    "sshAddress": SshAddress,
    "url": {
      "type": "string"
    },
    "buildPlan": BuildPlan,
    "maxShutdownDelaySeconds": MaxShutdownDelaySeconds,
    "renderSubdomainPolicy": RenderSubdomainPolicy
  },
  "title": "webServiceDetails",
  "x-readme-ref-name": "webServiceDetails"
} as const;
export default WebServiceDetails

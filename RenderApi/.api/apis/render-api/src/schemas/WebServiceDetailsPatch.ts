import Cache from './Cache.js';
import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import EnvSpecificDetailsPatch from './EnvSpecificDetailsPatch.js';
import MaintenanceMode from './MaintenanceMode.js';
import MaxShutdownDelaySeconds from './MaxShutdownDelaySeconds.js';
import Plan from './Plan.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import RenderSubdomainPolicy from './RenderSubdomainPolicy.js';
import ServiceRuntime from './ServiceRuntime.js';

const WebServiceDetailsPatch = {
  "type": "object",
  "properties": {
    "envSpecificDetails": EnvSpecificDetailsPatch,
    "healthCheckPath": {
      "type": "string"
    },
    "maintenanceMode": MaintenanceMode,
    "plan": Plan,
    "preDeployCommand": {
      "type": "string"
    },
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "runtime": ServiceRuntime,
    "maxShutdownDelaySeconds": MaxShutdownDelaySeconds,
    "renderSubdomainPolicy": RenderSubdomainPolicy,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "cache": Cache
  },
  "title": "webServiceDetailsPATCH",
  "x-readme-ref-name": "webServiceDetailsPATCH"
} as const;
export default WebServiceDetailsPatch

import EnvSpecificDetailsPatch from './EnvSpecificDetailsPatch.js';
import MaxShutdownDelaySeconds from './MaxShutdownDelaySeconds.js';
import PaidPlan from './PaidPlan.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import ServiceRuntime from './ServiceRuntime.js';

const PrivateServiceDetailsPatch = {
  "type": "object",
  "properties": {
    "envSpecificDetails": EnvSpecificDetailsPatch,
    "plan": PaidPlan,
    "preDeployCommand": {
      "type": "string"
    },
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "runtime": ServiceRuntime,
    "maxShutdownDelaySeconds": MaxShutdownDelaySeconds
  },
  "title": "privateServiceDetailsPATCH",
  "x-readme-ref-name": "privateServiceDetailsPATCH"
} as const;
export default PrivateServiceDetailsPatch

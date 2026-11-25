import EnvSpecificDetailsPatch from './EnvSpecificDetailsPatch.js';
import MaxShutdownDelaySeconds from './MaxShutdownDelaySeconds.js';
import PaidPlan from './PaidPlan.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import ServiceRuntime from './ServiceRuntime.js';

const BackgroundWorkerDetailsPatch = {
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
  "title": "backgroundWorkerDetailsPATCH",
  "x-readme-ref-name": "backgroundWorkerDetailsPATCH"
} as const;
export default BackgroundWorkerDetailsPatch

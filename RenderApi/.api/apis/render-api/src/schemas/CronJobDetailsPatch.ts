import EnvSpecificDetailsPatch from './EnvSpecificDetailsPatch.js';
import PaidPlan from './PaidPlan.js';
import ServiceRuntime from './ServiceRuntime.js';

const CronJobDetailsPatch = {
  "type": "object",
  "properties": {
    "envSpecificDetails": EnvSpecificDetailsPatch,
    "plan": PaidPlan,
    "schedule": {
      "type": "string"
    },
    "runtime": ServiceRuntime
  },
  "title": "cronJobDetailsPATCH",
  "x-readme-ref-name": "cronJobDetailsPATCH"
} as const;
export default CronJobDetailsPatch

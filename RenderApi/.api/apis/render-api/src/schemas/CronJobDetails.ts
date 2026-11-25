import BuildPlan from './BuildPlan.js';
import EnvSpecificDetails from './EnvSpecificDetails.js';
import Plan from './Plan.js';
import Region from './Region.js';
import ServiceEnv from './ServiceEnv.js';
import ServiceRuntime from './ServiceRuntime.js';

const CronJobDetails = {
  "required": [
    "env",
    "runtime",
    "envSpecificDetails",
    "plan",
    "region",
    "schedule",
    "buildPlan"
  ],
  "type": "object",
  "properties": {
    "env": ServiceEnv,
    "envSpecificDetails": EnvSpecificDetails,
    "lastSuccessfulRunAt": {
      "type": "string",
      "format": "date-time"
    },
    "plan": Plan,
    "region": Region,
    "runtime": ServiceRuntime,
    "schedule": {
      "type": "string"
    },
    "buildPlan": BuildPlan
  },
  "title": "cronJobDetails",
  "x-readme-ref-name": "cronJobDetails"
} as const;
export default CronJobDetails

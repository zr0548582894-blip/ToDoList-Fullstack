import EnvSpecificDetails from './EnvSpecificDetails.js';
import PaidPlan from './PaidPlan.js';
import Region from './Region.js';
import ServiceEnv from './ServiceEnv.js';

const CronJobDetailsPost = {
  "type": "object",
  "required": [
    "schedule"
  ],
  "properties": {
    "buildSourceId": {
      "description": "The ID of the Build Source to build and deploy from. Provides all source and build configuration: omit `repo`, `branch`, `image`, `buildFilter`, `runtime`, and build-related `envSpecificDetails` fields when set. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.",
      "type": "string"
    },
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
    "envSpecificDetails": EnvSpecificDetails,
    "plan": PaidPlan,
    "region": Region,
    "schedule": {
      "type": "string"
    }
  },
  "title": "cronJobDetailsPOST",
  "x-readme-ref-name": "cronJobDetailsPOST"
} as const;
export default CronJobDetailsPost

import AutoDeploy from './AutoDeploy.js';
import BackgroundWorkerDetailsPatch from './BackgroundWorkerDetailsPatch.js';
import BuildFilter from './BuildFilter.js';
import CronJobDetailsPatch from './CronJobDetailsPatch.js';
import Image from './Image.js';
import PrivateServiceDetailsPatch from './PrivateServiceDetailsPatch.js';
import StaticSiteDetailsPatch from './StaticSiteDetailsPatch.js';
import WebServiceDetailsPatch from './WebServiceDetailsPatch.js';

const ServicePatch = {
  "type": "object",
  "properties": {
    "buildSourceId": {
      "description": "The ID of the Build Source to link this service to. Cannot be combined with build-configuration changes or other `serviceDetails` fields, except `startCommand`. Linking to a Build Source with a native runtime requires a start command, either in this request or already set on the service. Linking to a Build Source with a Docker or image runtime rejects a start command. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.",
      "type": "string"
    },
    "autoDeploy": AutoDeploy,
    "autoDeployTrigger": {
      "type": "string",
      "enum": [
        "commit",
        "off",
        "checksPass"
      ],
      "description": "Controls autodeploy behavior.\n\n- `commit`: Deploy each time a commit is pushed to the service's linked branch.\n- `checksPass`: Deploy each time a commit is pushed to the linked branch, but only after the commit's CI checks pass.\n- `off`: Disable autodeploys.\n"
    },
    "repo": {
      "type": "string"
    },
    "branch": {
      "type": "string"
    },
    "image": Image,
    "name": {
      "type": "string"
    },
    "buildFilter": BuildFilter,
    "rootDir": {
      "type": "string"
    },
    "serviceDetails": {
      "oneOf": [
        StaticSiteDetailsPatch,
        WebServiceDetailsPatch,
        PrivateServiceDetailsPatch,
        BackgroundWorkerDetailsPatch,
        CronJobDetailsPatch
      ]
    }
  },
  "title": "servicePATCH",
  "x-readme-ref-name": "servicePATCH",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default ServicePatch

import AutoDeploy from './AutoDeploy.js';
import BackgroundWorkerDetails from './BackgroundWorkerDetails.js';
import BuildFilter from './BuildFilter.js';
import CronJobDetails from './CronJobDetails.js';
import NotifySetting from './NotifySetting.js';
import PrivateServiceDetails from './PrivateServiceDetails.js';
import RegistryCredentialSummary from './RegistryCredentialSummary.js';
import ServiceType from './ServiceType.js';
import StaticSiteDetails from './StaticSiteDetails.js';
import SuspenderType from './SuspenderType.js';
import WebServiceDetails from './WebServiceDetails.js';

const Service = {
  "type": "object",
  "required": [
    "id",
    "name",
    "ownerId",
    "type",
    "createdAt",
    "dashboardUrl",
    "updatedAt",
    "suspended",
    "suspenders",
    "autoDeploy",
    "notifyOnFail",
    "slug",
    "serviceDetails",
    "rootDir"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "buildSourceId": {
      "description": "The ID of the Build Source the service builds and deploys from, if any. A git-backed Build Source must be in the same region as the service.",
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
      "description": "Controls autodeploy behavior.\n\n- `commit`: Deploy each time a commit is pushed to the service's linked branch.\n- `checksPass`: Deploy each time a commit is pushed to the linked branch, but only after the commit's CI checks pass.\n- `off`: Disable autodeploys.\n\n\n`commit` `off` `checksPass`"
    },
    "branch": {
      "type": "string"
    },
    "buildFilter": BuildFilter,
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "dashboardUrl": {
      "type": "string",
      "description": "The URL to view the service in the Render Dashboard"
    },
    "environmentId": {
      "type": "string"
    },
    "imagePath": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "notifyOnFail": NotifySetting,
    "ownerId": {
      "type": "string"
    },
    "registryCredential": RegistryCredentialSummary,
    "repo": {
      "type": "string",
      "examples": [
        "https://github.com/render-examples/flask-hello-world"
      ]
    },
    "rootDir": {
      "type": "string"
    },
    "slug": {
      "type": "string"
    },
    "suspended": {
      "type": "string",
      "title": "serviceSuspendedState",
      "enum": [
        "suspended",
        "not_suspended"
      ],
      "description": "`suspended` `not_suspended`"
    },
    "suspenders": {
      "type": "array",
      "items": SuspenderType
    },
    "type": ServiceType,
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "serviceDetails": {
      "oneOf": [
        StaticSiteDetails,
        WebServiceDetails,
        PrivateServiceDetails,
        BackgroundWorkerDetails,
        CronJobDetails
      ]
    }
  },
  "title": "service",
  "x-readme-ref-name": "service"
} as const;
export default Service

import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import DatabaseStatus from './DatabaseStatus.js';
import KeyValueOptions from './KeyValueOptions.js';
import KeyValuePlan from './KeyValuePlan.js';
import Owner from './Owner.js';
import Region from './Region.js';

const KeyValue = {
  "type": "object",
  "description": "A Key Value instance",
  "required": [
    "id",
    "createdAt",
    "updatedAt",
    "status",
    "region",
    "plan",
    "name",
    "owner",
    "options",
    "ipAllowList",
    "version",
    "dashboardUrl"
  ],
  "properties": {
    "id": {
      "description": "The ID of the Key Value instance",
      "type": "string"
    },
    "createdAt": {
      "description": "The creation time of the Key Value instance",
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "description": "The last updated time of the Key Value instance",
      "type": "string",
      "format": "date-time"
    },
    "status": DatabaseStatus,
    "region": Region,
    "plan": KeyValuePlan,
    "name": {
      "description": "The name of the Key Value instance",
      "type": "string"
    },
    "owner": Owner,
    "options": KeyValueOptions,
    "ipAllowList": {
      "description": "The IP allow list for the Key Value instance",
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "environmentId": {
      "description": "The ID of the environment the Key Value instance is associated with",
      "type": "string"
    },
    "version": {
      "description": "The version of Key Value",
      "type": "string"
    },
    "dashboardUrl": {
      "type": "string",
      "description": "The URL to view the Key Value instance in the Render Dashboard"
    }
  },
  "title": "keyValue",
  "x-readme-ref-name": "keyValue"
} as const;
export default KeyValue

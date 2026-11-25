import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import DatabaseStatus from './DatabaseStatus.js';
import KeyValueOptions from './KeyValueOptions.js';
import KeyValuePlan from './KeyValuePlan.js';
import Owner from './Owner.js';
import Region from './Region.js';

const KeyValueDetail = {
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
    "version"
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
    "maintenance": {
      "type": "object",
      "required": [
        "id",
        "type",
        "scheduledAt",
        "state"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^mrn-[0-9a-z]{20}$",
          "examples": [
            "mrn-cph1rs3idesc73a2b2mg"
          ]
        },
        "type": {
          "type": "string"
        },
        "scheduledAt": {
          "type": "string",
          "format": "date-time"
        },
        "pendingMaintenanceBy": {
          "type": "string",
          "format": "date-time",
          "description": "If present, the maintenance run cannot be scheduled for later than this date-time."
        },
        "state": {
          "type": "string",
          "enum": [
            "scheduled",
            "in_progress",
            "user_fix_required",
            "cancelled",
            "succeeded",
            "failed"
          ],
          "description": "`scheduled` `in_progress` `user_fix_required` `cancelled` `succeeded` `failed`"
        }
      }
    }
  },
  "title": "keyValueDetail",
  "x-readme-ref-name": "keyValueDetail",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default KeyValueDetail

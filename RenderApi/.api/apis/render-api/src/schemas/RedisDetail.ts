import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import DatabaseStatus from './DatabaseStatus.js';
import Owner from './Owner.js';
import RedisOptions from './RedisOptions.js';
import RedisPlan from './RedisPlan.js';
import Region from './Region.js';

const RedisDetail = {
  "type": "object",
  "description": "A Redis instance",
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
      "description": "The ID of the Redis instance",
      "type": "string"
    },
    "createdAt": {
      "description": "The creation time of the Redis instance",
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "description": "The last updated time of the Redis instance",
      "type": "string",
      "format": "date-time"
    },
    "status": DatabaseStatus,
    "region": Region,
    "plan": RedisPlan,
    "name": {
      "description": "The name of the Redis instance",
      "type": "string"
    },
    "owner": Owner,
    "options": RedisOptions,
    "ipAllowList": {
      "description": "The IP allow list for the Redis instance",
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "environmentId": {
      "description": "The ID of the environment the Redis instance is associated with",
      "type": "string"
    },
    "version": {
      "description": "The version of Redis",
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
  "title": "redisDetail",
  "x-readme-ref-name": "redisDetail",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default RedisDetail

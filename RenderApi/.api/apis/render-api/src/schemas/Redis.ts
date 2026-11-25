import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import DatabaseStatus from './DatabaseStatus.js';
import Owner from './Owner.js';
import RedisOptions from './RedisOptions.js';
import RedisPlan from './RedisPlan.js';
import Region from './Region.js';

const Redis = {
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
    "version",
    "dashboardUrl"
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
    "dashboardUrl": {
      "type": "string",
      "description": "The URL to view the Redis instance in the Render Dashboard"
    }
  },
  "title": "redis",
  "x-readme-ref-name": "redis"
} as const;
export default Redis

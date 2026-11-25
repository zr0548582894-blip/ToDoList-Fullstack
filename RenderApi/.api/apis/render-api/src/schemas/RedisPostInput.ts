import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import MaxmemoryPolicy from './MaxmemoryPolicy.js';
import PersistenceMode from './PersistenceMode.js';
import RedisPlan from './RedisPlan.js';
import Region from './Region.js';

const RedisPostInput = {
  "type": "object",
  "description": "Input type for creating a Redis instance",
  "required": [
    "name",
    "ownerId",
    "plan"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the Redis instance"
    },
    "ownerId": {
      "type": "string",
      "description": "The ID of the owner of the Redis instance"
    },
    "plan": RedisPlan,
    "region": Region,
    "environmentId": {
      "type": "string"
    },
    "maxmemoryPolicy": MaxmemoryPolicy,
    "persistenceMode": PersistenceMode,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "redisPOSTInput",
  "x-readme-ref-name": "redisPOSTInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default RedisPostInput

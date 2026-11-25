import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import MaxmemoryPolicy from './MaxmemoryPolicy.js';
import PersistenceMode from './PersistenceMode.js';
import RedisPlan from './RedisPlan.js';

const RedisPatchInput = {
  "type": "object",
  "description": "Input type for updating a Redis instance",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the Redis instance"
    },
    "plan": RedisPlan,
    "maxmemoryPolicy": MaxmemoryPolicy,
    "persistenceMode": PersistenceMode,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "redisPATCHInput",
  "x-readme-ref-name": "redisPATCHInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default RedisPatchInput

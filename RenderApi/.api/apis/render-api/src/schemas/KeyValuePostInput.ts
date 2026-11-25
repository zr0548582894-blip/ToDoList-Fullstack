import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import KeyValuePlan from './KeyValuePlan.js';
import MaxmemoryPolicy from './MaxmemoryPolicy.js';
import PersistenceMode from './PersistenceMode.js';
import Region from './Region.js';

const KeyValuePostInput = {
  "type": "object",
  "description": "Input type for creating a Key Value instance",
  "required": [
    "name",
    "ownerId",
    "plan"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the Key Value instance"
    },
    "ownerId": {
      "type": "string",
      "description": "The ID of the owner of the Key Value instance"
    },
    "plan": KeyValuePlan,
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
  "title": "keyValuePOSTInput",
  "x-readme-ref-name": "keyValuePOSTInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default KeyValuePostInput

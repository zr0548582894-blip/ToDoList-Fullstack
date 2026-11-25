import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import KeyValuePlan from './KeyValuePlan.js';
import MaxmemoryPolicy from './MaxmemoryPolicy.js';
import PersistenceMode from './PersistenceMode.js';

const KeyValuePatchInput = {
  "type": "object",
  "description": "Input type for updating a Key Value instance",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the Key Value instance"
    },
    "plan": KeyValuePlan,
    "maxmemoryPolicy": MaxmemoryPolicy,
    "persistenceMode": PersistenceMode,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "keyValuePATCHInput",
  "x-readme-ref-name": "keyValuePATCHInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default KeyValuePatchInput

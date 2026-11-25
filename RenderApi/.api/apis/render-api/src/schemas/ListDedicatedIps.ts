import DedicatedIp from './DedicatedIp.js';

const ListDedicatedIps = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to list dedicated IP sets for."
          },
          "environmentId": {
            "type": "string",
            "description": "Filter dedicated IP sets limited to this environment. Excludes workspace-scoped dedicated IP sets.\n\nThe environment must belong to the workspace named by `ownerId`.\n"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": DedicatedIp,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListDedicatedIps

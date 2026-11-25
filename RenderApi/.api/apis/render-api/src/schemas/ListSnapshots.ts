import DiskSnapshot from './DiskSnapshot.js';

const ListSnapshots = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "diskId": {
            "type": "string",
            "description": "The ID of the disk"
          }
        },
        "required": [
          "diskId"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "type": "array",
      "items": DiskSnapshot,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListSnapshots

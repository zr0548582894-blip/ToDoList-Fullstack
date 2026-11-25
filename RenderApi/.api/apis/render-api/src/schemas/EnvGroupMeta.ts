import EnvGroupLink from './EnvGroupLink.js';

const EnvGroupMeta = {
  "type": "object",
  "required": [
    "id",
    "name",
    "ownerId",
    "createdAt",
    "updatedAt",
    "serviceLinks"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "ownerId": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "serviceLinks": {
      "description": "List of serviceIds linked to the envGroup",
      "type": "array",
      "items": EnvGroupLink
    },
    "environmentId": {
      "type": "string"
    }
  },
  "title": "envGroupMeta",
  "x-readme-ref-name": "envGroupMeta"
} as const;
export default EnvGroupMeta

import DedicatedIpStatus from './DedicatedIpStatus.js';
import Region from './Region.js';

const DedicatedIp = {
  "type": "object",
  "required": [
    "id",
    "name",
    "description",
    "ownerId",
    "region",
    "environmentIds",
    "ips",
    "status",
    "createdAt"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for this dedicated IP set."
    },
    "name": {
      "type": "string",
      "description": "Descriptive name for this dedicated IP set."
    },
    "description": {
      "type": "string",
      "description": "Free-form description for this dedicated IP set."
    },
    "ownerId": {
      "type": "string",
      "description": "The ID of the workspace that owns this dedicated IP set."
    },
    "region": Region,
    "environmentIds": {
      "type": "array",
      "description": "Environments this dedicated IP set applies to. If empty, it applies to all services in the workspace within its region.\n",
      "items": {
        "type": "string"
      }
    },
    "ips": {
      "type": "array",
      "description": "The IPv4 addresses assigned to this dedicated IP set.\n",
      "items": {
        "type": "string"
      }
    },
    "status": DedicatedIpStatus,
    "createdAt": {
      "type": "string",
      "format": "date-time",
      "description": "Time the dedicated IP set was created."
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time",
      "description": "Time the dedicated IP set was last updated."
    }
  },
  "title": "dedicatedIP",
  "x-readme-ref-name": "dedicatedIP"
} as const;
export default DedicatedIp

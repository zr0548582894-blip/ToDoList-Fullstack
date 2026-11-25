import Region from './Region.js';

const DedicatedIppost = {
  "type": "object",
  "description": "Input for creating a dedicated IP set.",
  "required": [
    "name",
    "ownerId",
    "region"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Name for the dedicated IP set."
    },
    "description": {
      "type": "string",
      "description": "Free-form description for the dedicated IP set."
    },
    "ownerId": {
      "type": "string",
      "description": "The ID of the workspace that will own this dedicated IP set."
    },
    "region": Region,
    "environmentIds": {
      "type": "array",
      "description": "Environments to scope the dedicated IP set to. If omitted or empty, it applies to all services in the workspace within its region.\n",
      "items": {
        "type": "string"
      }
    }
  },
  "title": "dedicatedIPPOST",
  "x-readme-ref-name": "dedicatedIPPOST",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default DedicatedIppost

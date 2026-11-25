import Owner from './Owner.js';

const Project = {
  "description": "A project is a collection of environments",
  "type": "object",
  "required": [
    "id",
    "createdAt",
    "updatedAt",
    "name",
    "owner",
    "environmentIds"
  ],
  "properties": {
    "id": {
      "description": "The ID of the project",
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
    "name": {
      "description": "The name of the project",
      "type": "string"
    },
    "owner": Owner,
    "environmentIds": {
      "description": "The environments associated with the project",
      "type": "array",
      "items": {
        "type": "string",
        "description": "The ID of the environment"
      }
    }
  },
  "title": "project",
  "x-readme-ref-name": "project"
} as const;
export default Project

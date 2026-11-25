import EnvGroupLink from './EnvGroupLink.js';
import EnvVar from './EnvVar.js';
import SecretFile from './SecretFile.js';

const EnvGroup = {
  "title": "envGroup",
  "x-readme-ref-name": "envGroup",
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
    },
    "envVars": {
      "description": "Omitted if the caller doesn't have the permission to read the environment group's secret values.",
      "type": "array",
      "items": EnvVar
    },
    "secretFiles": {
      "description": "Omitted if the caller doesn't have the permission to read the environment group's secret values.",
      "type": "array",
      "items": SecretFile
    }
  },
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default EnvGroup

import RegistryCredential from './RegistryCredential.js';
import RegistryCredentialRegistry from './RegistryCredentialRegistry.js';

const ListRegistryCredentials = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "name": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for the name of a credential"
          },
          "username": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for the username of a credential"
          },
          "type": {
            "type": "array",
            "items": RegistryCredentialRegistry,
            "description": "Filter for the registry type for the credential"
          },
          "createdBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for services created before a certain time (specified as an ISO 8601 timestamp)"
          },
          "createdAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for services created after a certain time (specified as an ISO 8601 timestamp)"
          },
          "updatedBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for services updated before a certain time (specified as an ISO 8601 timestamp)"
          },
          "updatedAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for services updated after a certain time (specified as an ISO 8601 timestamp)"
          },
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          },
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": RegistryCredential,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListRegistryCredentials

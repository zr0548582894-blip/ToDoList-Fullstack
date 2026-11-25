import CustomDomainWithCursor from './CustomDomainWithCursor.js';

const ListCustomDomains = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
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
          },
          "name": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for the names of custom domain"
          },
          "domainType": {
            "type": "string",
            "enum": [
              "apex",
              "subdomain"
            ],
            "description": "Filter for domain type"
          },
          "verificationStatus": {
            "type": "string",
            "enum": [
              "verified",
              "unverified"
            ],
            "description": "Filter for domain verification status (`verified` or `unverified`)"
          },
          "createdBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for custom domains created before a certain time (specified as an ISO 8601 timestamp)"
          },
          "createdAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for custom domains created after a certain time (specified as an ISO 8601 timestamp)"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": CustomDomainWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListCustomDomains

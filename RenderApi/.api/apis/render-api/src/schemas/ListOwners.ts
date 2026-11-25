import OwnerWithCursor from './OwnerWithCursor.js';

const ListOwners = {
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
            "description": "Only return workspaces with one of the provided names. Only exact matches are returned."
          },
          "email": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Only return workspaces owned by one of the provided email addresses."
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
      "items": OwnerWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListOwners

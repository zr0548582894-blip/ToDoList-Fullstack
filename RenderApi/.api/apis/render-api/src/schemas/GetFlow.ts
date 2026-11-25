const GetFlow = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "flowId": {
            "type": "string",
            "examples": [
              "flw-d0hp8fs9c44c73a6f1qg"
            ],
            "description": "The ID of the flow"
          }
        },
        "required": [
          "flowId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "id",
        "name",
        "createdAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "examples": [
            "flw-d0hp8fs9c44c73a6f1qg"
          ]
        },
        "name": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "workflowId": {
          "type": "string"
        },
        "workflowVersionId": {
          "type": "string"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetFlow

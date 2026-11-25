const GetWorkflowVersion = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "workflowVersionId": {
            "type": "string",
            "description": "The ID of the workflow version"
          }
        },
        "required": [
          "workflowVersionId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "id",
        "workflowId",
        "name",
        "createdAt",
        "status"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "workflowId": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string",
          "enum": [
            "created",
            "building",
            "registering",
            "build_failed",
            "registration_failed",
            "ready"
          ],
          "description": "`created` `building` `registering` `build_failed` `registration_failed` `ready`"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetWorkflowVersion

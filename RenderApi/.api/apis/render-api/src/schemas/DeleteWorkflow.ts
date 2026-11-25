const DeleteWorkflow = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "workflowId": {
            "type": "string",
            "description": "The ID of the workflow"
          }
        },
        "required": [
          "workflowId"
        ]
      }
    ]
  }
} as const;
export default DeleteWorkflow

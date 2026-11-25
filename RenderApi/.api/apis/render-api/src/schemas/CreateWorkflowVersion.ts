const CreateWorkflowVersion = {
  "body": {
    "type": "object",
    "required": [
      "workflowId"
    ],
    "properties": {
      "workflowId": {
        "type": "string"
      },
      "commit": {
        "type": "string"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default CreateWorkflowVersion

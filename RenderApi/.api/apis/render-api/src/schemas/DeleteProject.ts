const DeleteProject = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "projectId": {
            "type": "string"
          }
        },
        "required": [
          "projectId"
        ]
      }
    ]
  }
} as const;
export default DeleteProject

const RemoveWorkspaceMember = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to return resources for"
          },
          "userId": {
            "type": "string",
            "pattern": "^usr-[0-9a-v]{20}$",
            "examples": [
              "usr-5k6m7n8p9q0r1s2t3u4v"
            ],
            "description": "The ID of the user (Render object ID with a `usr-` prefix)."
          }
        },
        "required": [
          "ownerId",
          "userId"
        ]
      }
    ]
  }
} as const;
export default RemoveWorkspaceMember

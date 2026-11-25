const UpdateDedicatedIp = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "dedicatedIpId": {
            "type": "string",
            "description": "The ID of the dedicated IP set"
          }
        },
        "required": [
          "dedicatedIpId"
        ]
      }
    ]
  }
} as const;
export default UpdateDedicatedIp

const RetrieveDisk = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "diskId": {
            "type": "string",
            "pattern": "^dsk-[0-9a-z]{20}$",
            "examples": [
              "dsk-cph1rs3idesc73a2b2mg"
            ],
            "description": "The ID of the disk"
          }
        },
        "required": [
          "diskId"
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
        "sizeGB",
        "mountPath",
        "createdAt",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^dsk-[0-9a-z]{20}$",
          "examples": [
            "dsk-cph1rs3idesc73a2b2mg"
          ]
        },
        "name": {
          "type": "string"
        },
        "sizeGB": {
          "type": "integer"
        },
        "mountPath": {
          "type": "string"
        },
        "serviceId": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default RetrieveDisk

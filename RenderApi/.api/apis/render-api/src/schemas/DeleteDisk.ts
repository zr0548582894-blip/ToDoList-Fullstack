const DeleteDisk = {
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
  }
} as const;
export default DeleteDisk

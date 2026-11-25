const DisconnectBlueprint = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "blueprintId": {
            "type": "string",
            "pattern": "^exs-[0-9a-z]{20}$",
            "examples": [
              "exs-cph1rs3idesc73a2b2mg"
            ],
            "description": "The ID of the Blueprint"
          }
        },
        "required": [
          "blueprintId"
        ]
      }
    ]
  }
} as const;
export default DisconnectBlueprint

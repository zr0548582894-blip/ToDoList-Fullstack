import CustomDomain from './CustomDomain.js';

const CreateCustomDomain = {
  "body": {
    "type": "object",
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "type": "array",
      "items": CustomDomain,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default CreateCustomDomain

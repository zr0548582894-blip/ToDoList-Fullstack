import Header from './Header.js';

const AddHeaders = {
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
      "type": "object",
      "properties": {
        "headers": Header
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default AddHeaders

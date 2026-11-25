import Header from './Header.js';
import HeaderInput from './HeaderInput.js';

const UpdateHeaders = {
  "body": {
    "type": "array",
    "items": HeaderInput,
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
    "200": {
      "type": "array",
      "items": Header,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default UpdateHeaders

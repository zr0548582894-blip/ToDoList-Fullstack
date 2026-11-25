import ServiceInstance from './ServiceInstance.js';

const ListInstances = {
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
      "items": ServiceInstance,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListInstances

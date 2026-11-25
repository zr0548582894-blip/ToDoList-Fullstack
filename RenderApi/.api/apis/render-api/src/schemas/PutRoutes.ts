import Route from './Route.js';
import RoutePut from './RoutePut.js';

const PutRoutes = {
  "body": {
    "type": "array",
    "items": RoutePut,
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
      "items": Route,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PutRoutes

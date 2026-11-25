import RouteType from './RouteType.js';

const RoutePut = {
  "type": "object",
  "required": [
    "type",
    "source",
    "destination"
  ],
  "properties": {
    "type": RouteType,
    "source": {
      "type": "string",
      "examples": [
        "/:bar/foo"
      ]
    },
    "destination": {
      "type": "string",
      "examples": [
        "/foo/:bar"
      ]
    }
  },
  "title": "routePut",
  "x-readme-ref-name": "routePut"
} as const;
export default RoutePut

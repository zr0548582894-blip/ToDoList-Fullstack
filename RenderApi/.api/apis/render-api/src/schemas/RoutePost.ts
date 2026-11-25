import RouteType from './RouteType.js';

const RoutePost = {
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
    },
    "priority": {
      "type": "integer",
      "description": "Redirect and Rewrite Rules are applied in priority order starting at 0. Defaults to last in the priority list."
    }
  },
  "title": "routePost",
  "x-readme-ref-name": "routePost"
} as const;
export default RoutePost

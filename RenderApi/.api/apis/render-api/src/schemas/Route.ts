import RouteType from './RouteType.js';

const Route = {
  "type": "object",
  "required": [
    "id",
    "type",
    "source",
    "destination",
    "priority"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "type": RouteType,
    "source": {
      "type": "string"
    },
    "destination": {
      "type": "string"
    },
    "priority": {
      "type": "integer",
      "description": "Redirect and Rewrite Rules are applied in priority order starting at 0"
    }
  },
  "title": "route",
  "x-readme-ref-name": "route"
} as const;
export default Route

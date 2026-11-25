import Route from './Route.js';

const RouteWithCursor = {
  "type": "object",
  "required": [
    "route",
    "cursor"
  ],
  "properties": {
    "route": Route,
    "cursor": {
      "type": "string"
    }
  },
  "title": "routeWithCursor",
  "x-readme-ref-name": "routeWithCursor"
} as const;
export default RouteWithCursor

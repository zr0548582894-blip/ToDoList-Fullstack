const RoutePatch = {
  "type": "object",
  "required": [
    "priority"
  ],
  "properties": {
    "priority": {
      "x-go-type": "*int",
      "type": "integer",
      "description": "Redirect and Rewrite Rules are applied in priority order starting at 0. Moves this route to the specified priority and adjusts other route priorities accordingly."
    }
  },
  "title": "routePatch",
  "x-readme-ref-name": "routePatch",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default RoutePatch

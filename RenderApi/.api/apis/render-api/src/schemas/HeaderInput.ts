const HeaderInput = {
  "type": "object",
  "required": [
    "path",
    "name",
    "value"
  ],
  "properties": {
    "path": {
      "type": "string",
      "description": "The request path to add the header to. Wildcards will cause headers to be applied to all matching paths.",
      "examples": [
        "/static/*"
      ]
    },
    "name": {
      "type": "string",
      "description": "Header name",
      "examples": [
        "Cache-Control"
      ]
    },
    "value": {
      "type": "string",
      "description": "Header value",
      "examples": [
        "public, max-age=604800"
      ]
    }
  },
  "title": "headerInput",
  "x-readme-ref-name": "headerInput"
} as const;
export default HeaderInput

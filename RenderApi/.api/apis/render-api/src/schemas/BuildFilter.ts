const BuildFilter = {
  "type": "object",
  "required": [
    "paths",
    "ignoredPaths"
  ],
  "properties": {
    "paths": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "ignoredPaths": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "title": "buildFilter",
  "x-readme-ref-name": "buildFilter"
} as const;
export default BuildFilter

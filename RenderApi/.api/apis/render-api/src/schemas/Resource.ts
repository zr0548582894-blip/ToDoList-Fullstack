const Resource = {
  "required": [
    "id",
    "name"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  },
  "title": "resource",
  "x-readme-ref-name": "resource"
} as const;
export default Resource

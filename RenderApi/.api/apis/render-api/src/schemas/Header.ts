const Header = {
  "type": "object",
  "required": [
    "id",
    "path",
    "name",
    "value"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "path": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "value": {
      "type": "string"
    }
  },
  "title": "header",
  "x-readme-ref-name": "header"
} as const;
export default Header

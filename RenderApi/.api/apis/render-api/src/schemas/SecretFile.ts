const SecretFile = {
  "type": "object",
  "required": [
    "name",
    "content"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "content": {
      "type": "string"
    }
  },
  "title": "secretFile",
  "x-readme-ref-name": "secretFile"
} as const;
export default SecretFile

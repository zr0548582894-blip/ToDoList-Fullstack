const EnvVar = {
  "type": "object",
  "required": [
    "key",
    "value"
  ],
  "properties": {
    "key": {
      "type": "string"
    },
    "value": {
      "type": "string"
    }
  },
  "title": "envVar",
  "x-readme-ref-name": "envVar"
} as const;
export default EnvVar

const EnvVarValue = {
  "type": "object",
  "required": [
    "value"
  ],
  "properties": {
    "value": {
      "type": "string"
    }
  },
  "title": "envVarValue",
  "x-readme-ref-name": "envVarValue"
} as const;
export default EnvVarValue

import ServiceTypeShort from './ServiceTypeShort.js';

const EnvGroupLink = {
  "type": "object",
  "required": [
    "id",
    "name",
    "type"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "type": ServiceTypeShort
  },
  "title": "envGroupLink",
  "x-readme-ref-name": "envGroupLink"
} as const;
export default EnvGroupLink

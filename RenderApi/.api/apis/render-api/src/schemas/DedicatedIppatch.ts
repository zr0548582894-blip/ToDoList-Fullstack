const DedicatedIppatch = {
  "type": "object",
  "description": "Input for updating a dedicated IP set. All fields are optional. Omitted fields are left unchanged. Provide `environmentIds: []` to switch from environment-scoped to workspace-scoped.\n",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "environmentIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "title": "dedicatedIPPATCH",
  "x-readme-ref-name": "dedicatedIPPATCH",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default DedicatedIppatch

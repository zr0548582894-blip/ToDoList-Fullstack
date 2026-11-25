const Error = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "code": {
      "type": "string",
      "description": "A stable, machine-readable identifier present on specific errors that clients can handle specially. Each endpoint documents the codes it can return. The errorCode schema lists the full vocabulary of codes."
    }
  },
  "title": "error",
  "x-readme-ref-name": "error",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default Error

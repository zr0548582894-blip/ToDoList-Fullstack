const EnvironmentResourcesPostInput = {
  "type": "object",
  "required": [
    "resourceIds"
  ],
  "properties": {
    "resourceIds": {
      "type": "array",
      "items": {
        "type": "string",
        "description": "The ID of an env group, a service, a Postgres database, or a Redis instance"
      }
    }
  },
  "title": "environmentResourcesPOSTInput",
  "x-readme-ref-name": "environmentResourcesPOSTInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default EnvironmentResourcesPostInput

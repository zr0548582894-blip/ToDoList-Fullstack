const DeleteCustomDomain = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          },
          "customDomainNameOrID": {
            "type": "string",
            "description": "The ID or name of the custom domain"
          }
        },
        "required": [
          "serviceId",
          "customDomainNameOrID"
        ]
      }
    ]
  }
} as const;
export default DeleteCustomDomain

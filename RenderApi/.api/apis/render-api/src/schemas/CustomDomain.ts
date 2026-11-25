const CustomDomain = {
  "type": "object",
  "required": [
    "id",
    "name",
    "domainType",
    "publicSuffix",
    "verificationStatus",
    "createdAt",
    "redirectForName"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "domainType": {
      "type": "string",
      "enum": [
        "apex",
        "subdomain"
      ],
      "description": "`apex` `subdomain`"
    },
    "publicSuffix": {
      "type": "string"
    },
    "redirectForName": {
      "type": "string"
    },
    "verificationStatus": {
      "type": "string",
      "enum": [
        "verified",
        "unverified"
      ],
      "description": "`verified` `unverified`"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "server": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      }
    }
  },
  "title": "customDomain",
  "x-readme-ref-name": "customDomain"
} as const;
export default CustomDomain

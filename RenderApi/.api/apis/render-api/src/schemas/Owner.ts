import CidrBlockAndDescription from './CidrBlockAndDescription.js';

const Owner = {
  "type": "object",
  "required": [
    "id",
    "name",
    "email",
    "type"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "twoFactorAuthEnabled": {
      "type": "boolean",
      "description": "Whether two-factor authentication is enabled for the owner. Only present if `type` is `user`."
    },
    "type": {
      "type": "string",
      "enum": [
        "user",
        "team"
      ],
      "description": "`user` `team`"
    }
  },
  "title": "owner",
  "x-readme-ref-name": "owner"
} as const;
export default Owner

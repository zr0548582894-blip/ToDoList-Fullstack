const CidrBlockAndDescription = {
  "type": "object",
  "required": [
    "cidrBlock",
    "description"
  ],
  "properties": {
    "cidrBlock": {
      "type": "string"
    },
    "description": {
      "description": "User-provided description of the CIDR block",
      "type": "string"
    }
  },
  "title": "cidrBlockAndDescription",
  "x-readme-ref-name": "cidrBlockAndDescription"
} as const;
export default CidrBlockAndDescription

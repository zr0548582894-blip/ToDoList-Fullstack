const OutboundIps = {
  "type": "object",
  "required": [
    "type",
    "ips"
  ],
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "shared",
        "dedicated"
      ],
      "x-enum-varnames": [
        "OutboundIpsTypeShared",
        "OutboundIpsTypeDedicated"
      ],
      "description": "`dedicated` if a dedicated IP set applies to the resource, `shared` if its traffic originates from the shared Render IPs for its region.\n\n\n`shared` `dedicated`"
    },
    "dedicatedIpId": {
      "type": "string",
      "description": "The dedicated IP set the traffic originates from. Only present when `type` is `dedicated`.",
      "examples": [
        "egs-abc123"
      ]
    },
    "ips": {
      "type": "array",
      "description": "The IP addresses the resource's outbound traffic originates from.",
      "items": {
        "type": "string"
      }
    }
  },
  "title": "outboundIps",
  "x-readme-ref-name": "outboundIps",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default OutboundIps

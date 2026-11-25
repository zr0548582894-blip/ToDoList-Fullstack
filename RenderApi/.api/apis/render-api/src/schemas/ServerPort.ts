const ServerPort = {
  "type": "object",
  "required": [
    "port",
    "protocol"
  ],
  "properties": {
    "port": {
      "type": "integer",
      "examples": [
        10000
      ]
    },
    "protocol": {
      "type": "string",
      "enum": [
        "TCP",
        "UDP"
      ],
      "description": "`TCP` `UDP`"
    }
  },
  "title": "serverPort",
  "x-readme-ref-name": "serverPort"
} as const;
export default ServerPort

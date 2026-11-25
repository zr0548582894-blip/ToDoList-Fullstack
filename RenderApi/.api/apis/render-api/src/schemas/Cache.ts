const Cache = {
  "type": "object",
  "required": [
    "profile"
  ],
  "properties": {
    "profile": {
      "type": "string",
      "enum": [
        "no-cache",
        "origin-controlled",
        "origin-controlled-all"
      ],
      "default": "no-cache",
      "description": "`no-cache` `origin-controlled` `origin-controlled-all`"
    }
  },
  "title": "cache",
  "x-readme-ref-name": "cache"
} as const;
export default Cache

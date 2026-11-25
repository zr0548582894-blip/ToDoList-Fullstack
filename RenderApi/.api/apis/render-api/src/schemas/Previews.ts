const Previews = {
  "type": "object",
  "properties": {
    "generation": {
      "type": "string",
      "enum": [
        "off",
        "manual",
        "automatic"
      ],
      "default": "off",
      "description": "Defaults to \"off\"\n\n`off` `manual` `automatic`"
    }
  },
  "title": "previews",
  "x-readme-ref-name": "previews"
} as const;
export default Previews

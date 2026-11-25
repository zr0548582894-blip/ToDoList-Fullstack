const Region = {
  "type": "string",
  "enum": [
    "frankfurt",
    "oregon",
    "ohio",
    "singapore",
    "virginia"
  ],
  "default": "oregon",
  "description": "Defaults to \"oregon\"\n\n`frankfurt` `oregon` `ohio` `singapore` `virginia`",
  "title": "region",
  "x-readme-ref-name": "region"
} as const;
export default Region

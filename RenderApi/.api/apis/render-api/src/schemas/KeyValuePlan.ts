const KeyValuePlan = {
  "type": "string",
  "enum": [
    "free",
    "starter",
    "standard",
    "pro",
    "pro_plus",
    "custom",
    "256mb",
    "1g",
    "5g",
    "10g",
    "20g",
    "40g"
  ],
  "title": "keyValuePlan",
  "x-readme-ref-name": "keyValuePlan",
  "description": "`free` `starter` `standard` `pro` `pro_plus` `custom` `256mb` `1g` `5g` `10g` `20g` `40g`"
} as const;
export default KeyValuePlan

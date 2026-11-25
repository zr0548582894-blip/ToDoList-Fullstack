const Plan = {
  "type": "string",
  "enum": [
    "starter",
    "starter_plus",
    "standard",
    "standard_plus",
    "pro",
    "pro_plus",
    "pro_max",
    "pro_ultra",
    "free",
    "custom",
    "starter_legacy",
    "standard_legacy",
    "standard_plus_legacy",
    "pro_legacy",
    "pro_plus_legacy",
    "0.5c-512mb",
    "1c-2g",
    "2c-4g",
    "2c-8g",
    "2c-16g",
    "4c-8g",
    "4c-16g",
    "4c-32g",
    "8c-16g",
    "8c-32g",
    "8c-64g",
    "12c-24g",
    "12c-48g",
    "12c-96g"
  ],
  "description": "The compute plan to use. Legacy variants (`*_legacy`) identify grandfathered plans no longer offered for new services. Note that base services on any paid compute plan can't create preview instances with the `free` plan.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom` `starter_legacy` `standard_legacy` `standard_plus_legacy` `pro_legacy` `pro_plus_legacy` `0.5c-512mb` `1c-2g` `2c-4g` `2c-8g` `2c-16g` `4c-8g` `4c-16g` `4c-32g` `8c-16g` `8c-32g` `8c-64g` `12c-24g` `12c-48g` `12c-96g`",
  "title": "plan",
  "x-readme-ref-name": "plan",
  "examples": [
    "starter"
  ]
} as const;
export default Plan

const PaidPlan = {
  "type": "string",
  "enum": [
    "starter",
    "standard",
    "pro",
    "pro_plus",
    "pro_max",
    "pro_ultra",
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
  "default": "0.5c-512mb",
  "description": "Defaults to `0.5c-512mb` when creating a new service.",
  "title": "paidPlan",
  "x-readme-ref-name": "paidPlan"
} as const;
export default PaidPlan

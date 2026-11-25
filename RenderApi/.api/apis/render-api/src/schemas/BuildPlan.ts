const BuildPlan = {
  "type": "string",
  "enum": [
    "starter",
    "performance"
  ],
  "default": "starter",
  "title": "buildPlan",
  "x-readme-ref-name": "buildPlan",
  "description": "`starter` `performance`"
} as const;
export default BuildPlan

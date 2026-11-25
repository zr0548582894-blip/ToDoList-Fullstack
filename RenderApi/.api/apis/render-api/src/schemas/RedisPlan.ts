const RedisPlan = {
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
  "x-enum-varnames": [
    "RedisPlanFree",
    "RedisPlanStarter",
    "RedisPlanStandard",
    "RedisPlanPro",
    "RedisPlanPro_plus",
    "RedisPlanCustom",
    "RedisPlan256mb",
    "RedisPlan1g",
    "RedisPlan5g",
    "RedisPlan10g",
    "RedisPlan20g",
    "RedisPlan40g"
  ],
  "title": "redisPlan",
  "x-readme-ref-name": "redisPlan",
  "description": "`free` `starter` `standard` `pro` `pro_plus` `custom` `256mb` `1g` `5g` `10g` `20g` `40g`"
} as const;
export default RedisPlan

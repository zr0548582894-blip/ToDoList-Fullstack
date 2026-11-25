const ServiceTypeShort = {
  "type": "string",
  "enum": [
    "static",
    "web",
    "pserv",
    "worker",
    "cron"
  ],
  "title": "serviceTypeShort",
  "x-readme-ref-name": "serviceTypeShort",
  "description": "`static` `web` `pserv` `worker` `cron`"
} as const;
export default ServiceTypeShort

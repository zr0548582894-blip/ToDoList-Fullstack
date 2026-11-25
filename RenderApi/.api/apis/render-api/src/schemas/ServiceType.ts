const ServiceType = {
  "type": "string",
  "enum": [
    "static_site",
    "web_service",
    "private_service",
    "background_worker",
    "cron_job"
  ],
  "title": "serviceType",
  "x-readme-ref-name": "serviceType"
} as const;
export default ServiceType

import Service from './Service.js';

const ServiceAndDeploy = {
  "type": "object",
  "properties": {
    "service": Service,
    "deployId": {
      "type": "string"
    }
  },
  "title": "serviceAndDeploy",
  "x-readme-ref-name": "serviceAndDeploy",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default ServiceAndDeploy

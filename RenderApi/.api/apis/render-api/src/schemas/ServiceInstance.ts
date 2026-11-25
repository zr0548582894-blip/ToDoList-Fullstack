const ServiceInstance = {
  "type": "object",
  "required": [
    "id",
    "createdAt"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "title": "serviceInstance",
  "x-readme-ref-name": "serviceInstance"
} as const;
export default ServiceInstance

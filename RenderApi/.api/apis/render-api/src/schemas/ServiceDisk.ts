const ServiceDisk = {
  "type": "object",
  "required": [
    "name",
    "mountPath"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "mountPath": {
      "type": "string"
    },
    "sizeGB": {
      "type": "integer",
      "minimum": 1,
      "description": "Defaults to 1"
    }
  },
  "title": "serviceDisk",
  "x-readme-ref-name": "serviceDisk"
} as const;
export default ServiceDisk

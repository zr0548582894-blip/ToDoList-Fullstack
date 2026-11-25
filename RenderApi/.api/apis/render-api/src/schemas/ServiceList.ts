import ServiceWithCursor from './ServiceWithCursor.js';

const ServiceList = {
  "type": "array",
  "items": ServiceWithCursor,
  "title": "serviceList",
  "x-readme-ref-name": "serviceList",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default ServiceList

const MaintenanceMode = {
  "type": "object",
  "required": [
    "enabled",
    "uri"
  ],
  "properties": {
    "enabled": {
      "type": "boolean"
    },
    "uri": {
      "type": "string",
      "description": "The page to be served when [maintenance mode](https://render.com/docs/maintenance-mode) is enabled. When empty, the default maintenance mode page is served."
    }
  },
  "title": "maintenanceMode",
  "x-readme-ref-name": "maintenanceMode"
} as const;
export default MaintenanceMode

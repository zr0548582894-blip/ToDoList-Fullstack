const MaxShutdownDelaySeconds = {
  "type": "integer",
  "description": "The maximum amount of time (in seconds) that Render waits for your application process to exit gracefully after sending it a SIGTERM signal.",
  "minimum": 1,
  "maximum": 300,
  "default": 30,
  "title": "maxShutdownDelaySeconds",
  "x-readme-ref-name": "maxShutdownDelaySeconds"
} as const;
export default MaxShutdownDelaySeconds

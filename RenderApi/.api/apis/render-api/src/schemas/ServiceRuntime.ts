const ServiceRuntime = {
  "type": "string",
  "enum": [
    "docker",
    "elixir",
    "go",
    "node",
    "python",
    "ruby",
    "rust",
    "image"
  ],
  "description": "Runtime",
  "title": "serviceRuntime",
  "x-readme-ref-name": "serviceRuntime"
} as const;
export default ServiceRuntime

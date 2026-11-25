const RenderSubdomainPolicy = {
  "type": "string",
  "enum": [
    "enabled",
    "disabled"
  ],
  "description": "Controls whether render.com subdomains are available for the service\n\n`enabled` `disabled`",
  "title": "renderSubdomainPolicy",
  "x-readme-ref-name": "renderSubdomainPolicy"
} as const;
export default RenderSubdomainPolicy

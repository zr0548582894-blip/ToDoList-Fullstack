const UpsertOwnerMetricsStream = {
  "body": {
    "type": "object",
    "description": "Input for creating or updating a metrics stream",
    "properties": {
      "provider": {
        "type": "string",
        "description": "Provider to send metrics to",
        "enum": [
          "BETTER_STACK",
          "GRAFANA",
          "DATADOG",
          "NEW_RELIC",
          "HONEYCOMB",
          "SIGNOZ",
          "GROUNDCOVER",
          "LOGFIRE",
          "CUSTOM"
        ]
      },
      "url": {
        "description": "The endpoint URL to stream metrics to",
        "type": "string"
      },
      "token": {
        "description": "Authentication token for the metrics stream",
        "type": "string"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to return metrics stream information for"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "ownerId",
        "provider",
        "url"
      ],
      "properties": {
        "ownerId": {
          "description": "The ID of the owner",
          "type": "string"
        },
        "provider": {
          "type": "string",
          "description": "Provider to send metrics to\n\n`BETTER_STACK` `GRAFANA` `DATADOG` `NEW_RELIC` `HONEYCOMB` `SIGNOZ` `GROUNDCOVER` `LOGFIRE` `CUSTOM`",
          "enum": [
            "BETTER_STACK",
            "GRAFANA",
            "DATADOG",
            "NEW_RELIC",
            "HONEYCOMB",
            "SIGNOZ",
            "GROUNDCOVER",
            "LOGFIRE",
            "CUSTOM"
          ]
        },
        "url": {
          "description": "The endpoint URL to stream metrics to",
          "type": "string"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default UpsertOwnerMetricsStream

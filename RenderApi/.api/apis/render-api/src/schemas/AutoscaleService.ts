const AutoscaleService = {
  "body": {
    "type": "object",
    "required": [
      "enabled",
      "min",
      "max",
      "criteria"
    ],
    "properties": {
      "enabled": {
        "type": "boolean",
        "default": false
      },
      "min": {
        "type": "integer",
        "description": "The minimum number of instances for the service"
      },
      "max": {
        "type": "integer",
        "description": "The maximum number of instances for the service"
      },
      "criteria": {
        "type": "object",
        "required": [
          "cpu",
          "memory"
        ],
        "properties": {
          "cpu": {
            "type": "object",
            "required": [
              "enabled",
              "percentage"
            ],
            "properties": {
              "enabled": {
                "type": "boolean",
                "default": false
              },
              "percentage": {
                "type": "integer",
                "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
              }
            }
          },
          "memory": {
            "type": "object",
            "required": [
              "enabled",
              "percentage"
            ],
            "properties": {
              "enabled": {
                "type": "boolean",
                "default": false
              },
              "percentage": {
                "type": "integer",
                "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
              }
            }
          }
        }
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
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "enabled",
        "min",
        "max",
        "criteria"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "default": false
        },
        "min": {
          "type": "integer",
          "description": "The minimum number of instances for the service"
        },
        "max": {
          "type": "integer",
          "description": "The maximum number of instances for the service"
        },
        "criteria": {
          "type": "object",
          "required": [
            "cpu",
            "memory"
          ],
          "properties": {
            "cpu": {
              "type": "object",
              "required": [
                "enabled",
                "percentage"
              ],
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "default": false
                },
                "percentage": {
                  "type": "integer",
                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                }
              }
            },
            "memory": {
              "type": "object",
              "required": [
                "enabled",
                "percentage"
              ],
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "default": false
                },
                "percentage": {
                  "type": "integer",
                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                }
              }
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default AutoscaleService

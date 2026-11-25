const ListHttpFilterValues = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "startTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Epoch/Unix timestamp of start of time range to return. Defaults to `now() - 1 hour`."
          },
          "endTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:30:30Z"
            ],
            "description": "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`."
          },
          "resolutionSeconds": {
            "type": "number",
            "minimum": 30,
            "default": 60,
            "examples": [
              60
            ],
            "description": "The resolution of the returned data"
          },
          "resource": {
            "type": "string",
            "examples": [
              "srv-xxxxx"
            ],
            "description": "Service ID to query. When multiple service ids are provided, they are ORed together"
          },
          "service": {
            "type": "string",
            "deprecated": true,
            "examples": [
              "srv-xxxxx"
            ],
            "description": "This parameter is deprecated. Please use `resource` instead"
          },
          "project": {
            "type": "string",
            "examples": [
              "prj-xxxxx"
            ],
            "description": "The ID of a project to query. The query covers the resources in the project that you can view, so `resource` is optional when this is provided. If `resource` is also provided, the query covers only those resources, and each must belong to the project. Only one project can be provided. A project that doesn't exist or that you can't access returns a 404."
          },
          "environment": {
            "type": "string",
            "examples": [
              "evm-xxxxx"
            ],
            "description": "The ID of an environment to query. The query covers the resources in the environment that you can view, so `resource` is optional when this is provided. If `resource` is also provided, the query covers only those resources, and each must belong to the environment. Only one environment can be provided. If `project` is also provided, the environment must belong to that project. An environment that doesn't exist or that you can't access returns a 404."
          },
          "host": {
            "type": "string",
            "examples": [
              "example.com"
            ],
            "description": "The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together"
          },
          "statusCode": {
            "type": "string",
            "examples": [
              "200"
            ],
            "description": "The status codes of HTTP requests to filter to. When multiple status code query params are provided, they are ORed together"
          },
          "region": {
            "type": "string",
            "examples": [
              "oregon"
            ],
            "description": "The region to query when querying by `project` or `environment`. Required when the project's or environment's resources are in more than one region"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "description": "A collection of filter values for HTTP metrics",
      "required": [
        "items"
      ],
      "items": {
        "type": "object",
        "properties": {
          "filter": {
            "type": "string",
            "enum": [
              "host",
              "statusCode"
            ],
            "description": "`host` `statusCode`"
          },
          "values": {
            "type": "array",
            "items": {
              "type": "string",
              "examples": [
                "api.example.com"
              ]
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListHttpFilterValues

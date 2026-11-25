const CreateSandboxBuild = {
  "body": {
    "description": "The source container image and settings for the sandbox build.",
    "type": "object",
    "required": [
      "name",
      "sourceImage"
    ],
    "properties": {
      "name": {
        "type": "string",
        "minLength": 1,
        "maxLength": 255,
        "description": "The name used to select this image when creating a sandbox, between 1 and 255 characters. Can't start with `sbb-`, the prefix reserved for build IDs. Multiple builds can share a name."
      },
      "sourceImage": {
        "type": "string",
        "description": "The container image to convert, specified by tag or digest.",
        "examples": [
          "python:3.13"
        ]
      },
      "registryCredential": {
        "type": "object",
        "required": [
          "username",
          "password"
        ],
        "description": "Credentials used to pull `sourceImage` from a private registry for this build.",
        "properties": {
          "username": {
            "description": "The username used to authenticate with the image registry.",
            "type": "string"
          },
          "password": {
            "description": "The password used to authenticate with the image registry.",
            "type": "string",
            "format": "password"
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
          "sandboxGroupId": {
            "description": "The ID of the sandbox group.",
            "type": "string",
            "pattern": "^sbg-[0-9a-v]{20}$",
            "examples": [
              "sbg-cph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "sandboxGroupId"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "description": "A build that converts a container image into an image that sandboxes can use.",
      "type": "object",
      "required": [
        "id",
        "sandboxGroupId",
        "name",
        "source",
        "sourceDigest",
        "status",
        "createdAt"
      ],
      "properties": {
        "id": {
          "description": "The ID of the sandbox build.",
          "type": "string",
          "pattern": "^sbb-[0-9a-v]{20}$",
          "examples": [
            "sbb-cph1rs3idesc73a2b2mg"
          ]
        },
        "sandboxGroupId": {
          "description": "The ID of the sandbox group.",
          "type": "string",
          "pattern": "^sbg-[0-9a-v]{20}$",
          "examples": [
            "sbg-cph1rs3idesc73a2b2mg"
          ]
        },
        "name": {
          "type": "string",
          "description": "The name used to select this image when creating a sandbox. Multiple builds can share a name."
        },
        "source": {
          "description": "The source container image used for this build.",
          "type": "object",
          "required": [
            "repository",
            "image",
            "reference"
          ],
          "properties": {
            "repository": {
              "description": "The registry and repository path containing the source image.",
              "type": "string",
              "examples": [
                "docker.io/library"
              ]
            },
            "image": {
              "description": "The name of the source image.",
              "type": "string",
              "examples": [
                "python"
              ]
            },
            "reference": {
              "description": "The tag or digest identifying the source image version.",
              "type": "string",
              "examples": [
                "3.13"
              ]
            }
          }
        },
        "sourceDigest": {
          "type": "string",
          "description": "The digest of the source image converted by this build.",
          "examples": [
            "sha256:c19d4a1..."
          ]
        },
        "status": {
          "description": "The sandbox build's current status.\n\n`pending` `running` `succeeded` `failed`",
          "type": "string",
          "enum": [
            "pending",
            "running",
            "succeeded",
            "failed"
          ]
        },
        "failureReason": {
          "type": [
            "string",
            "null"
          ],
          "description": "A description of why the build failed. Null unless the status is `failed`. May include error text from the image registry. When displaying errors, use `failureCode` to select the main message and show this value as additional detail.\n"
        },
        "failureCode": {
          "type": [
            "string",
            "null"
          ],
          "description": "A machine-readable reason the build failed. Null unless the status is `failed`. See `sandboxBuildFailureCode` for known codes. Treat unrecognized codes as `internal_error`.\n",
          "examples": [
            "image_pull_failed"
          ]
        },
        "createdAt": {
          "description": "The timestamp when the sandbox build was created, in ISO 8601 format.",
          "type": "string",
          "format": "date-time"
        },
        "finishedAt": {
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "description": "The timestamp when the build succeeded or failed, in ISO 8601 format. Null while the build is pending or running."
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default CreateSandboxBuild

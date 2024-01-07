import { Node20GitHubActionTypescriptProject } from "dkershner6-projen-github-actions";
import { RunsUsing } from "projen-github-action-typescript";

const MAJOR_VERSION = 2;

const project = new Node20GitHubActionTypescriptProject({
    majorVersion: MAJOR_VERSION,
    defaultReleaseBranch: "main",

    devDeps: [
        "dkershner6-projen-github-actions",
        "projen-github-action-typescript",
    ],
    deps: ["axios"],
    name: "post-api-call-action",
    description: "Send a POST request action",
    keywords: ["actions", "node", "setup"],

    actionMetadata: {
        name: "POST API Call Action",
        description: "Send a POST request action",
        inputs: {
            url: { description: "URL to send post request to", required: true },
            data: {
                description: "JSON string of data to pass into request",
                default: "{}",
                required: false,
            },
            headers: {
                description: "JSON string of headers to pass into request",
                default: "{}",
                required: false,
            },
            params: {
                description:
                    "JSON string of query parameters to pass into request",
                default: "{}",
                required: false,
            },
        },
        runs: {
            using: RunsUsing.NODE_20,
            main: "dist/index.js",
        },
        branding: {
            icon: "phone",
            color: "orange",
        },
    },

    autoApproveOptions: {
        allowedUsernames: ["dkershner6"],
    },

    sampleCode: false,
    docgen: true,
});

project.synth();

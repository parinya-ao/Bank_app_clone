# This file provides documentation for the GitHub workflows and actions in the repository.

## Overview

This repository utilizes GitHub Actions to automate the build and submission processes for an EAS (Expo Application Services) project. The workflows defined in this repository help streamline the development process by automatically building the application for both Android and iOS platforms, as well as submitting the builds to the appropriate distribution channels.

## Workflows

### 1. Android Build Workflow (`eas-build.yml`)

- **Purpose**: Automatically builds the EAS project for Android using the production profile.
- **Trigger**: This workflow is triggered on every push to the repository.
- **Steps**:
  - Set up the environment.
  - Install dependencies.
  - Execute the build command in a non-interactive manner.

### 2. iOS Build Workflow (`eas-build-ios.yml`)

- **Purpose**: Automatically builds the EAS project for iOS.
- **Trigger**: Similar to the Android build workflow, it is triggered on every push.
- **Steps**:
  - Set up the environment.
  - Install dependencies.
  - Execute the build command for iOS.

### 3. Submission Workflow (`eas-submit.yml`)

- **Purpose**: Submits the built application to the app store or distribution platform.
- **Steps**:
  - Authenticate with the app store.
  - Upload the built application.

## Custom Actions

### Setup EAS Action (`setup-eas`)

- **Location**: `.github/actions/setup-eas/action.yml`
- **Purpose**: This custom action sets up the EAS environment for the workflows.
- **Inputs**: Accepts parameters necessary for configuring EAS.
- **Outputs**: Provides outputs that can be used in subsequent steps of the workflows.

For detailed usage of the custom action, refer to the `README.md` file located in the `setup-eas` directory.
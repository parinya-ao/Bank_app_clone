# This file provides documentation for the custom action, explaining how to use it and its parameters.

# Setup EAS Action

This action sets up Expo Application Services (EAS) for your project, allowing you to build and submit your applications using EAS.

## Inputs

- `eas-cli-version`: (optional) The version of the EAS CLI to install. If not specified, the latest version will be used.

## Outputs

- `eas-path`: The path to the installed EAS CLI.

## Example Usage

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup EAS
        uses: ./.github/actions/setup-eas
        with:
          eas-cli-version: latest

      - name: Build Android
        run: eas build --platform android --profile production
```

## License

This action is licensed under the MIT License.
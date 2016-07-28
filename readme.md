# Chrometoaster Custom KSS template

### Assumes use of following technolgies / approach

- Use of kss-node in parent project to generate living styleguide


# Setup

- Include a reference to this repo in the parent project's package.json.
- Create a kss config file in the parent project, that looks something like the example-config.json in this directory.
- Run the styleguide creation CLI command. This can be part of a taskrunner (gulp) or run on the command line.

````bash
kss-node --config {path-to-file}/{name-of-kss-config.json}

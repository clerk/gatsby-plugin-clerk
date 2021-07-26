# Building gatsby-plugin-clerk

## Instructions

### Developing the plugin

1. `cd` into `playground-app`
2. Install dependencies: `npm i`
3. Link the plugin: `npm link ../plugin`
4. Create a file called `.env.development`, add a key `GATSBY_CLERK_FRONTEND_API` and assign your `frontendApi` to it
5. Run the app: `npm start`

### Publishing the plugin

1. `cd` into `plugin`
2. Publish the plugin: `npm publish`

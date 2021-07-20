// This ensures that, when using `npm link <plugin-path>` for developing the plugin, the app will
// use its own dependency of "@clerk/clerk-react" and "gatsby" for the plugin, rather than
// duplicating it inside the plugin folder, causing the "Context not found" error.

const path = require("path")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@clerk/clerk-react": path.join(
          process.cwd(),
          "node_modules/@clerk/clerk-react"
        ),
        gatsby: path.join(process.cwd(), "node_modules/gatsby"),
      },
    },
  })
}

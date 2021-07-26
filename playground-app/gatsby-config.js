require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-clerk",
      options: {
        frontendApi: process.env.GATSBY_CLERK_FRONTEND_API,
        // Add here any other value that should be passed to ClerkProvider
      },
    },
  ],
}

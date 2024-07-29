import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config: GatsbyConfig = {
  siteMetadata: {
    title: `clerk-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // Add Gatsby plugin
  plugins: [
    {
      resolve: `gatsby-plugin-clerk`
    },
  ],
}

export default config

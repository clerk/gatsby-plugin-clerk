# gatsby-plugin-clerk

Drop-in [Clerk](https://clerk.dev) integration for Gatsby sites.

This plugin adds `ClerkProvider` around your app.

## Installation

1. Install the plugin and its peer dependency:

```sh
npm i gatsby-plugin-clerk @clerk/clerk-react

# or

yarn add gatsby-plugin-clerk @clerk/clerk-react
```

## Usage

1. Add `gatsby-plugin-clerk` as a plugin in your Gatsby config:

```js
// gatsby-config.js

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-clerk',
            options: {
                // OBS: Don't push your frontend API key to version control; a safer approach is to set it as an environment variable for each environment your app will run in.
                frontendApi: <YOUR_FRONTEND_API_KEY>
            }
        }
    ]
}
```

2. Use Clerk:

```jsx
// src/pages/index.js

import React from 'react'
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

function IndexPage() {
    return (
        <>
            <SignedIn>
                <UserButton />
            </SignedIn>

            <SignedOut>
                <SignIn />
            </SignedOut>
        </>
    )
}

export default IndexPage
```

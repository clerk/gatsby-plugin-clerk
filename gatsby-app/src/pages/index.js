import * as React from "react"
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react"

const IndexPage = () => {
  // const user = useUser()

  const frontendApi = process.env.GATSBY_CLERK_FRONTEND_API

  return (
    <>
      <h1>Gatsby app</h1>

      {/* This provider works fine  */}
      {/* <ClerkProvider frontendApi={frontendApi}> */}

      {/* <ClerkLoaded> */}

      {/* The components below cause the app to crash when using ClerkProvider from the plugin */}
      {/* <SignedIn>
        <UserButton />
        <h1>Logged in</h1>
      </SignedIn>

      <SignedOut>
        <h1>Logged out</h1>
      </SignedOut> */}

      {/* </ClerkLoaded> */}

      {/* </ClerkProvider> */}
    </>
  )
}

export default IndexPage

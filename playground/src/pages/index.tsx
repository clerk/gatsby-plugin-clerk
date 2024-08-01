import * as React from "react"

import { SignedIn, SignedOut, UserButton } from 'gatsby-plugin-clerk'

export default function Page() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <a href="/sign-in">Sign in</a>
      </SignedOut>
    </>
  )
}

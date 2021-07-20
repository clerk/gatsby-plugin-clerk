import * as React from "react"
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  SignIn,
} from "@clerk/clerk-react"

const IndexPage = () => {
  return (
    <>
      <h1>Gatsby Plugin Playground</h1>

      <SignedIn>
        <SignedInContainer />
      </SignedIn>

      <SignedOut>
        <SignIn />
      </SignedOut>
    </>
  )
}

export default IndexPage

function SignedInContainer() {
  const user = useUser()

  return (
    <>
      <UserButton />
      <p>Hi, {user.firstName}</p>
    </>
  )
}

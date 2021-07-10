import { ClerkProvider } from '@clerk/clerk-react'
import * as React from 'react'

export const WrapRootElement = ({ element, options }) => {
    console.log('options: ', options)

    if (!options.frontendApi) {
        throw new Error('gatsby-plugin-clerk requires `frontendApi`')
    }

    return <ClerkProvider {...options}>{element}</ClerkProvider>

    // Use the `return` below and comment out the one above when using ClerkProvider in the app itself
    return element
}

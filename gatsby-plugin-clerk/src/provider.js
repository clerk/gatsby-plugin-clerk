import { ClerkProvider } from '@clerk/clerk-react'
import * as React from 'react'

export const WrapRootElement = ({ element, options }) => {
    if (!options.frontendApi) {
        throw new Error('gatsby-plugin-clerk requires `frontendApi`')
    }

    return <ClerkProvider {...options}>{element}</ClerkProvider>
}

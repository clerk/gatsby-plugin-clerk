import * as React from 'react'
// import { navigate } from 'gatsby'
import { ClerkProvider } from '@clerk/clerk-react'

export const WrapRootElement = ({ element, options }) => {
    if (!options.frontendApi) {
        throw new Error('gatsby-plugin-clerk requires `frontendApi`')
    }

    return (
        <ClerkProvider
            // navigate={to => navigate(to)}
            {...options}
        >
            {element}
        </ClerkProvider>
    )
}

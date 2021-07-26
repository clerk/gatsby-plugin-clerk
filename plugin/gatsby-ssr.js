import * as React from 'react'
import { WrapRootElement } from './src/provider'

export const wrapRootElement = ({ element }, pluginOptions) => {
    const { plugins, ...clerkOptions } = pluginOptions

    return <WrapRootElement element={element} options={clerkOptions} />
}

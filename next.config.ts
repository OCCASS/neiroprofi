import { withPayload } from '@payloadcms/next/withPayload'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: false,
    },
}

export default withPayload(nextConfig) 

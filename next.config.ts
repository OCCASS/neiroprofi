import { withPayload } from '@payloadcms/next/withPayload'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: false,
    },
    allowedDevOrigins: ["localhost", "172.20.10.3"]
}

export default withPayload(nextConfig) 

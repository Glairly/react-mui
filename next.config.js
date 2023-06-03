/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent.fbkk22-7.fna.fbcdn.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig

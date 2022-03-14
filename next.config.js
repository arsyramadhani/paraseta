/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/workspace',
                destination: '/',
                permanent: true
            }
        ];
    },
    experimental: {
        urlImports: [
            'http://localhost:3001/api/lib/',
            'https://cdn.skypack.dev'
        ]
    },
    webpack: config => {
        config.module.rules.push({
            test: '/.(js|jsx)$/i',
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic'
                        }
                    ]
                }
            }
        });

        return config;
    }
};

module.exports = nextConfig;

module.exports = {
    assetsDir: 'static',
    css: {
        sourceMap: true,
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://kasta.ua',
                changeOrigin: true,
            },
        },
        port: 8050,
    },
    pages: {
        index: {
            entry: './src/main.js',
            template: './src/index.pug'
        }
    },
};
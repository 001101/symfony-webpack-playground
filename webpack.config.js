module.exports = {
    entry: './src/AppBundle/Resources/js/index.js',
    output: {
        path: 'web/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            }
        ]
    }
};

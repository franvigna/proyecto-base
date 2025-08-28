const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            // TypeScript
            {
                test: /\.[tj]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            // SCSS MÓDULOS: *.module.scss
            {
                test: /\.module\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[name]__[local]__[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },

            // SCSS GLOBAL: *.scss (que NO sean .module.scss)
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `
        <!DOCTYPE html>
        <html lang="es">
          <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
          <body><div id="root"></div></body>
        </html>
      `,
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
            publicPath: '/',
        },
        historyApiFallback: true,
        port: 3000,
        hot: true,
        open: true,
        client: { overlay: true },
    },
}

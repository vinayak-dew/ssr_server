//const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
const PUBLIC_PATH = "/";
const nodeExternals = require('webpack-node-externals');
//const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = () => {
    const base = {
        entry: {
            client: path.resolve(process.cwd(), "src/client/client.tsx")
        },
        output: {
            filename: "[name].js",
            chunkFilename: "[name].[hash].bundle.js",
            path: path.resolve(process.cwd(), "dist"),
            publicPath: PUBLIC_PATH,
        },
        resolve: {
            alias: {
                Common: path.resolve(process.cwd(), "src/common/"),
                Core: path.resolve(process.cwd(), "src/core/"),
                Components: path.resolve(process.cwd(), "src/components"),
                RoutesConstant$: path.resolve(process.cwd(), "src/routes-constant.ts"),
                Template$: path.resolve(process.cwd(), "src/template.ts"),
                ServerRender$: path.resolve(process.cwd(), "src/server/server.tsx")
            },
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                {
                    test: /\.(tsx|ts)$/,
                    use: {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                                modules: true,
                            }
                        }
                    ]
                }
            ]
        }
    };

    // server-specific configuration
     if (process.env.platform === 'server') {
        base.target = 'node';
        base.entry = {
            index: path.resolve(process.cwd(), "index.ts")
        };
        base.output.filename = "[name].js";
        base.externals = [nodeExternals()]
     }
    return base;
}
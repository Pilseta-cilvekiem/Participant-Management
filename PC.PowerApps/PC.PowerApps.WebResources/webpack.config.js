const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const fileNames = fs.readdirSync("src");
const entries = {};

for (const fileName of fileNames) {
    if (fileName.endsWith(".js")) {
        const fileNameBase = fileName.replace(/.js$/, "");
        entries[fileNameBase] = ["idempotent-babel-polyfill", `./src/${fileName}`];
    }
}

module.exports = {
    entry: entries,
    mode: "development",
    module: {
        rules: [
            {
                test: require.resolve("./src/lib/dg.xrmquery.web"),
                loader: "exports-loader",
                options: {
                    exports: [
                        "XrmQuery",
                    ],
                },
            },
        ],
    },
    output: {
        library: "[name]",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new webpack.ProvidePlugin({
            XrmQuery: ["dg.xrmquery.web", "XrmQuery"],
        })
    ],
    resolve: {
        modules: [
            "node_modules",
            "src/lib",
        ],
    },
}

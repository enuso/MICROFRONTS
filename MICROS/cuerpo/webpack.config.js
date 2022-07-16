const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const path = require('path');

module.exports = {
  output: {
    publicPath: "http://localhost:8082/",
    filename: 'my-first-webpack.bundle.js',
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8082,
    historyApiFallback: true,
  },

  module: {
    rules: [
      
      {test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      },},

      {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "cuerpo",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Cuerpo":"./src/components/Cuerpo",
        // "./Mf_cuerpo":"./src/Mf_cuerpo",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};

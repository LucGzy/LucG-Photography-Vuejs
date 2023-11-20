const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js", // Specify the entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Specify the output directory
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/, // Use the SASS loader for .scss files
        use: [
          "style-loader", // Inject styles into the DOM
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/, // Use the CSS loader for .css files
        use: [
          "style-loader", // Inject styles into the DOM
          "css-loader", // Translates CSS into CommonJS
        ],
      },
    ],
  },
  plugins: [
    // Make sure to include the VueLoaderPlugin
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html", // Path to your HTML template
      publicPath: "/public/",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public", // Source directory
          to: ".", // Destination directory (root of the output)
          globOptions: {
            ignore: ["index.html"], // Exclude index.html if needed
          },
        },
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve files from the 'dist' directory
    open: true, // Open the default browser when the server starts
  },
};

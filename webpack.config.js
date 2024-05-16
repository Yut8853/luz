const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    mode: isProduction ? "production" : "development",
    entry: {
      main: path.resolve(__dirname, "./src/js/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
      publicPath: "/",
    },
    devtool: isProduction ? false : "eval-source-map",
    module: {
      rules: [
        {
          test: /\.(sass|scss|css)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
          type: "asset/resource",
          generator: {
            filename: "videos/[name][ext]",
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-syntax-dynamic-import"],
              },
            },
          ],
        },
        {
          test: /\.(webp|png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
          type: "asset/resource",
          use: [
            {
              loader: "image-webpack-loader",
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
          generator: {
            filename: "assets/[name].[hash][ext]",
          },
        },
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: [
            {
              loader: "raw-loader",
              options: {
                esModule: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "about.html",
        template: "./src/about.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "contact.html",
        template: "./src/contact.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "news.html",
        template: "./src/news.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "pastproperty.html",
        template: "./src/pastproperty.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "meguro.html",
        template: "./src/meguro.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "minato.html",
        template: "./src/minato.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "ota.html",
        template: "./src/ota.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "setagaya.html",
        template: "./src/setagaya.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "shibuya.html",
        template: "./src/shibuya.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "shinagawa.html",
        template: "./src/shinagawa.html",
        minify: true,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        filename: "shinjuku.html",
        template: "./src/shinjuku.html",
        minify: true,
        chunks: ["main"],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new CopyPlugin({
        patterns: [
          { from: "src/img", to: "img" },
          { from: "src/fonts", to: "fonts" },
        ],
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 30000,
        maxSize: 500000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: "~",
        name: false,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    performance: {
      hints: false,
    },
  };
};

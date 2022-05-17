const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest")
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");


const shouldAnalyze = process.argv.includes("--analyze");
const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
    favicon: "./public/favicon.ico",
  }),
  new CopyWebpackPlugin({
    patterns: [{ from: "./src/assets/login.webp", to: "" }],
  }),
  new WebpackPwaManifestPlugin({
    name: 'Petgram - Tu app de fotos de mascotas',
    shortname: 'Petgram 🐶',
    description: 'Con Petgram puedes encontrar fotos de animales domésticos my fácilmente',
    background_color: '#fff',
    theme_color: '#b1a',
    start_url: "/",
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        purpose: "any maskable"
      }
    ],
  }),
  new WorkboxWebpackPlugin.GenerateSW({
    runtimeCaching: [
      {
        urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images'
        }
      },
      {
        urlPattern: /https:\/\/(petgram-server-victorr.vercel.app)/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api'
        }
      }
    ]
  })
];

if (shouldAnalyze) {
  const { BundleAnalyzerPlugin } = module.require("webpack-bundle-analyzer");
  plugins.push(new BundleAnalyzerPlugin());
}
/*
 * Para usar el profile en modo produccion es nesesario agregar estos alias, yaque react los desabilito
 * pues generar una carga extra
    'react-dom$': 'react-dom/profiling',
    'scheduler/tracing': 'scheduler/tracing-profiling',
 */
const config = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@container": path.resolve(__dirname, "src/containers"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      // Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // css
      // assets
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        type: "asset",
      },
    ],
  },
  plugins,
  optimization: {
    minimize: true,
    // minimizer: [new TerserPlugin()],

    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "assets/ventor",
          chunks: "all",
          reuseExistingChunk: true,
          priority: -70,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "assets/react",
          chunks: "all",
          priority: -10,
          reuseExistingChunk: true,
        },
        reactIcons: {
          test: /[\\/]node_modules[\\/](react-icons)[\\/]/,
          name: "assets/reactIcons",
          chunks: "all",
          priority: -20,
          reuseExistingChunk: true,
        },
        reactHelmet: {
          test: /[\\/]node_modules[\\/](react-helmet)[\\/]/,
          name: "assets/reactHelmet",
          chunks: "all",
          priority: -30,
          reuseExistingChunk: true,
        },
        reactRouterDom: {
          test: /[\\/]node_modules[\\/](react-router-dom)[\\/]/,
          name: "assets/reactRouterDom",
          chunks: "all",
          priority: -40,
          reuseExistingChunk: true,
        },
        graphql: {
          test: /[\\/]node_modules[\\/](@apollo[\\/]client|graphql)[\\/]/,
          name: "assets/graphql",
          chunks: "all",
          priority: -50,
          reuseExistingChunk: true,
        },
        polyfill: {
          test: /[\\/]node_modules[\\/](intersection-observer)[\\/]/,
          name: "assets/polyfill",
          // chunks: "all",
          priority: -60,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
module.exports = config;

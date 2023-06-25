const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Webpack plugin that generates our html file and injects our bundles.
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text-Editor-pwa'
      }),
      // Injects our custom service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      // Creates a manifest.json file.
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Text-Editor-pwa',
        short_name: 'JATE',
        description: 'Customized text editor',
        background_color: '#225CA3',
        theme_color: '#225CA3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          // We use babel-loader in order to use ES6.
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

// // TODO: Add and configure workbox plugins for a service worker and manifest file.
// // TODO: Add CSS loaders and babel to webpack.

// module.exports = () => {
//   return {
//     mode: 'development',//'production'//
//     entry: {
//       main: './client/src/js/index.js',
//       install: './client/src/js/install.js'
//     },
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'client/dist'),
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: './client/index.html',
//         title: 'Text-Editor-PWA'
//       }),
//       new WebpackPwaManifest({
//         name: 'My Text Editor',
//         short_name: 'Text Editor',
//         description: 'A text editor app',
//         background_color: '#ffffff',
//         theme_color: '#000000',
//         icons: [
//           {
//             src: path.resolve(__dirname, 'dist/icon_96x96.97a96e0fc4eb2a8bec3b8d49d90f1d14.png'),
//             sizes: '96x96',
//             type: 'image/png',
//           },
//           {
//             src: path.resolve(__dirname, 'dist/icon_128x128.225c312e650131cfe5a2119fd958867e.png'),
//             sizes: '128x128',
//             type: 'image/png',
//           },
//           {
//             src: path.resolve(__dirname, 'dist/icon_192x192.1efd8d2a5218c9516adb7d6ff7907ac1.png'),
//             sizes: '192x192',
//             type: 'image/png',
//           },
//           {
//             src: path.resolve(__dirname, 'dist/icon_256x256.873242da1488f53efeaca94de308539e.png'),
//             sizes: '256x256',
//             type: 'image/png',
//           },
//           {
//             src: path.resolve(__dirname, 'dist/icon_384x384.15214f65c1219e812d779bfcb384494a.png'),
//             sizes: '384x384',
//             type: 'image/png',
//           },
//           {
//             src: path.resolve(__dirname, 'dist/icon_512x512.3ca11a97eb7d90b61fc3db0f3c5dcdb6.png'),
//             sizes: '512x512',
//             type: 'image/png',
//           },
//         ],
//       }),
//       new InjectManifest({
//         swSrc: './client/src-sw.js',
//         swDest: 'src-sw.js',
//       }),
//       // new WebpackPwaManifest({
//       //   fingerprints: false,
//       //   inject: true,
//       //   name: 'Text-Editor-pwa',
//       //   short_name: 'JATE',
//       //   description: 'Customized text editor',
//       //   background_color: '#225CA3',
//       //   theme_color: '#225CA3',
//       //   start_url: './',
//       //   publicPath: './',
//       //   icons: [
//       //     {
//       //       src: path.resolve('./client/src/images/logo.png'),
//       //       sizes: [96, 128, 192, 256, 384, 512],
//       //       destination: path.join('assets', 'icons'),
//       //     },
//       //   ],
//       // }),
//     ],
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'], 
//             },
//           },
//         },
//       ],
//     },
    
//   };
// };

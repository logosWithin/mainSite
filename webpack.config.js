const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point: Your main TypeScript file
  entry: './src/index.tsx',

  // Output: Where the compiled files will go
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the dist folder before each build
  },

  // Resolve TypeScript and JavaScript files
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Module rules for processing files
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Match .css files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Resolves CSS imports and URLs
        ],
      },
    ],
  },

  // Plugins for additional features
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Template for your HTML file
    }),
  ],

  // DevServer for live reloading
  devServer: {
    static: './dist', // Serve files from the dist folder
    port: 3000, // Server will run on http://localhost:3000
    hot: true, // Enable hot module replacement
  },
};

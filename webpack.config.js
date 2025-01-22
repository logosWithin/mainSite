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
    publicPath: '/',
  },

  // Resolve TypeScript and JavaScript files
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Module rules for processing files
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg|webp)$/i, // Match image file types
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[hash].[ext]', // Output folder and naming pattern
                    },
                },
            ],
        },
      {
        test: /\.css$/i, // Match .css files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Resolves CSS imports and URLs
        ],
      },
      {
        test: /\.tsx?$/, // Handle TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
    },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these file extensions
},
devServer: {
    static: './dist',
    hot: true, // Enable hot module replacement
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

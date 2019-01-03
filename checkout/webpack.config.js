const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      }, {
        test: /\.(scss)$/,
        use: [{
          // Adds CSS to the DOM by injecting a `<style>` tag
          loader: 'style-loader',
        },
        {
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          loader: 'css-loader',
        },
        {
          // Loader for webpack to process CSS with PostCSS
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')
            ]
          },
        },
        {
          // Loads a SASS/SCSS file and compiles it to CSS
          loader: 'sass-loader',
        },
        ],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
  },
};

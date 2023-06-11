const path = require('path');

module.exports = {
  // Mode de construction : 'development' ou 'production'
  mode: 'development',
  
  // Entrée du point d'entrée de l'application
  entry: './src/main.js',

  // Sortie du bundle généré
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify')
    }
  }
  // Autres configurations de modules, plugins, etc.
  // ...
};
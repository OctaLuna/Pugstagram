//Ahora estamos importando elementos base para crear un modelo que sera exportado y va hacer leido con las configuraciones que webpack necesita

//vamos a llamar a path es un modulo para identificar donde esta un valor dentro del sistema operativo en el cual estamos trabajando
const path = require('path');
//Esto es para mover un archivo html a otro lugar con ciertas configuraciones que vamos a necesitar 
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Ahora creamos nuestro modulo con todas nuestras configuraciones
module.exports = {
  //Ahora elegimos el punto de entrada de nuestra aplicacion, el archivo principal donde vamos a trabajar
  entry: './src/index.js',
  //Ahora hacemos un output, donde vamos a guardar toda la investigacion antes de mandarlo a un compilado
  output: {
    //Esto es para que todo lo mande a la carpeta dist
    path: path.resolve(__dirname, 'dist'),
    //Esto es para ponerle un nombre al compilado
    filename: 'bundle.js'
  },
  //Ahora vamos a hacer el resolve de las extenciones y de los elementos que necesita webpack para enteder este proyecto
  //Esto tiene las extenciones que vamos a usar 
  resolve: {
    //Esto tiene las extenciones que vamos a usar 
    //Esto es un areglo de las extenciones que vamos a necesitar 
    //El * es para decir que todo lo que este sea tambien detectado, .mjs es para modelos, tambien vamos a leer archivos .js y vamos a poner .svelte
    extensions: ['*', '.mjs', '.js', '.svelte']
  },
  //Ahora vamos a hacer un modelo donde viene estas configuraciones y reglas del proyecto
  module: {
    //Ahora vamos a poner las reglas que necesitamos 
    rules: [
      //Las reglas son para detectar los loaders o trabajar con lso loaders dentro de nuestro proyecto y haci detectar que archivos estamos leyendo

      //Ahora vamos a crear una primera regla para trabajar con babel-loader, que nos va a permitir trabajar con todas estas bondades que babel nos ofrece
      {
        //Lo primero es un test para identificar cuales son los archivos que vamos a trabajar
        //esto es para que identifique los archivos .js
        test: /\.js?$/,
        //Esto es para que excluya la carpeta node_modules
        exclude: /node_modules/,
        //Ahora vamos a usar un loader 
        use: {
          loader: 'babel-loader'
        }
      },
      //ahora vamos a poner otra regla para que nos permita trabajar con svelte
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}
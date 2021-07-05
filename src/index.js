//Ahora lo que vamos hacer es el punto de entrada que va a leer nuestra App.svelte y como se va a compilar en nuestro navegador

//Primero importamos el script .svelte App
import App from "./constainers/App.svelte";

//Ahora vamos a crear una constante app para extender a App
const app = new App({
    //ahora vamos a elegir el target de donde vamos a empujar nuestra app
    target: document.querySelector("main")
});

//Ahora estamos exportando nuestra app
export default app;
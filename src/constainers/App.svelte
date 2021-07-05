<!--Esto es nuestro archivo principal de svelte-->


<script>
    //Estamos importando

    //Estamos importando los elementos que usaremos en nuestro Header
    import Header from "../components/Header.svelte";
    import Main from "../components/Main.svelte";
    import TimeLine from "../components/TimeLine.svelte";
    import Sidebar from "../components/Sidebar.svelte";

</script>
<style>
    :global(body){
        background-color: #676778;
        color: white;
    }
</style>

<!--Estamos armando nuestro header-->
<Header/>
<!---->
<main>
    <!--Estamos creando los hijos de nuestro main--> 
    <TimeLine/>
    <Sidebar/>
</main>

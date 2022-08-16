<script>
  import Form from "./Form.svelte";
  import { fly } from 'svelte/transition';
    
  let display_form = false;

  function handlerClick(){
    if(!display_form) return display_form = true
    if(display_form) return display_form = false
  }  
</script>
<header>
  <h1>BookList</h1>
  <button on:click={handlerClick}>Agregar libro 📖</button>   
  {#if display_form}
    <Form/> 
  {/if}   
</header>
  
<style>
  h1{
    margin: 2vh 0;
  }

  button{
    background-color: #4C3575;
    color: #FEFBF6;
  }

  button:hover{
    background-color: #5B4B8A;
  }

  header{
    padding: 2vh 0;
    background-color: #371B58;
    color: #FEFBF6;
  }
</style>
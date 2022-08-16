<script>
    import Form from "./Form.svelte";
    import { fly } from 'svelte/transition';
      
    let display_form = false;
    let visible = false;
  
    function handlerClick(){
      if(!display_form) return display_form = true
      if(display_form) return display_form = false
    }  
  </script>
  <header>
    <div class="header">
      <button on:click={handlerClick}>Agregar libro 📖</button>   
    </div>
    {#if display_form}
      <Form/> 
    {/if}   
  </header>
  
  <style>
    *{
          font-family: Oxygen;
    }
  
    img{
          width: 175px;
          background-color: rgba(0, 0, 0, .3);
          padding: 7px;
          border: solid 2px #404040;
          border-radius: 5px;
    }
  
    button{
      border-radius: 5px
    }
  
    header{
          /* padding: 0 5vw; */
          width: 100%;
          height: 100%;
          background-color: yellow;
          color: black;
          border-bottom: solid #1a1a1a 3px;
      }
  
      .header{
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 2em;
      }
  </style>
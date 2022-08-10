<script>
    import { prevent_default } from "svelte/internal";
  
    function handleSubmit(){
      alert('It works!')
    }
  
  </script>
  
  <div>
    <form on:submit|preventDefault={handleSubmit}>
      <label for="">
        <input type="text" placeholder="Libro">
      </label>
      <label for="file">
        <p>Añadir portada</p> 
        <input id="file" type="file" class="input-file">
      </label>
      <button>Agregar!</button>
    </form>
  </div>
  
  <style>
    form{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5vh 5vw;
      padding: 1em;
      background-color:#cccc00;
      border-radius: 5px;
    }
  
    input{
      padding: 1em 2em;
    }
  
    input::placeholder{
      color: #e6e6e6
    }
  
    p{
      background-color: #3B3B3B;
      color: #e6e6e6;
      padding: 9px 19px;
      border-radius: 2px;
      cursor: pointer;
      border: solid 1px grey;
    }
      
    p:hover{
      padding: 8px 18px;
      border: solid 2px gray;
    }
  
    label{
      margin: 1em;
    }
  
    .input-file{
      display: none;
    }
  
    @media(min-width: 1280px){
      form{
        margin: 5vh 30%;
      }
    }
  </style>
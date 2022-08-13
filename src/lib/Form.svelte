<script>
    // import { prevent_default } from "svelte/internal";
    let title;
    let year;
    let file;
    function handleSubmit(){
      alert(`El titulo es: ${title}, el año es: ${year} y la imagen es: ${file}`)
    }

  
  </script>
  
  <div>
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="title">
          <input type="text" name='title' bind:value={title} placeholder="Título del libro">
        </label>
        <label for="release">
          <input type="text" name='release' bind:value={year} placeholder="Año de publicación">
        </label>
        <label for="file">
          <p>Añadir portada</p> 
          <input accept="image/png, image/jpg, image/jpeg" id="file" type="file" class="input-file" bind:value={file}>
        </label>
      </div>
      <button>Agregar!</button>
    </form>
  </div>
  
  <style>
    form{
      /* height: 68vh; */
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5vh 5vw;
      padding: 1em;
      background-color:#cccc00;
      border-radius: 5px;
    }

    form>div{
      display: flex;
      flex-direction: column;
    }
  
    input{
      padding: .8em 1em;
      text-align: center;
      font-size: 1em;
    }
  
    input::placeholder{
      color: #e6e6e6
    }
  
    p{
      background-color: #3B3B3B;
      color: #e6e6e6;
      padding: .7em 1em;
      border-radius: 2px;
      cursor: pointer;
      border: solid 1px grey;
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
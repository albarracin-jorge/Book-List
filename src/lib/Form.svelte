<script>
  import {reloadBook} from '../storage/store.js'
  let title;
  let year;
  let author;
  let file;

  async function handleSubmit(){
    // alert(`El titulo es: ${title}, el año es: ${year} y la imagen es: ${file}`)
    const response = await fetch('http://127.0.0.1:5173/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        launch_date: year,
        image_path: file
      })
    })
    const data = await response.json()

    if(data.ok) $reloadBook = true
    if(data.error) alert('Hubo un error')
  }
  
  </script>
  
  <div>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="title">
          <input type="text" name='title' bind:value={title} placeholder="Título del libro">
        </label>
        <label for="title">
          <input type="text" name='title' bind:value={author} placeholder="Autor">
        </label>
        <label for="release">
          <input type="text" name='release' bind:value={year} placeholder="Año de publicación">
        </label>
        <label for="file">
          <p>Añadir portada</p> 
          <input accept="image/png, image/jpg, image/jpeg" id="file" type="file" class="input-file" bind:value={file}>
        </label>
      <button>Agregar!</button>
    </form>
  </div>
  
  <style>
    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1em;
      padding: 1em;
      background-color:#4C3575;
      border-radius: 5px;
    }

    button{
      background-color: #371B58;
    }
    button:hover{
      background-color: #5B4B8A
    }
  
    input{
      padding: .5em 1em;
      text-align: center;
      font-size: 1em;
      background-color: #5B4B8A;
      border: solid 1px grey;
    }
  
    input::placeholder{
      color: #e6e6e6
    }
  
    p{
      background-color: #5B4B8A;
      color: #e6e6e6;
      padding: .35em 3.8em;
      /* border-radius: 2px; */
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
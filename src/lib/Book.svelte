<script>
	export let _id;
	export let name;
	export let image;
	export let launch_date;

	import {reloadBook} from '../storage/store.js'

	async function handleDelete(_id){
		const response = await fetch('http://127.0.0.1:5173/api', {
			method: 'DELETE',
			headers: {
				'Contnet-Type': 'application/json'
			},
			body: JSON.stringify({_id: _id})
		})
		const data = await response.json()

		if(data.ok){
			// alert('Libro eliminado satisfactoriamente')
			$reloadBook = true
		}
		if(data.error){
			alert('Hubo un error')
		}
	}
</script>

<label for="">
	<div class="content">
		<div class="card">
			<img src={image} width="50%" height="50%" alt={name+" image"}>
			<h3>{name}</h3>
			<h4>({launch_date})</h4>
		</div>   
		<div class="btn-display">
			<button>Modificar</button>
			<button on:click={handleDelete(_id)}>Eliminar</button>  
		</div>
	</div>
</label>

<style>
	label{
		display: flex;
		flex-direction: column; 

		margin: 10% 0;
	}

	h3{
		margin: 1em 1em .5em 1em ;
		font-size: 1.5em;
	}

	h4{
		margin-bottom: 1em;
		font-weight: 100;
	}

	.btn-display{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.btn-display>button:nth-child(1):hover{
		background-color: #3399ff;
	}

	.btn-display>button:nth-child(2):hover{
		background-color: #ff1a1a;
	}

	button{
		margin: 5px;
	}

	@media (min-width: 900px){
		img{
			width: 250px
		}

		label{
			margin: 3%;
			flex-direction: row;
		}
	}
</style>
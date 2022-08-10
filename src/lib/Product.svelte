<script>
	export let name;
	export let image;
</script>

<label for="">
	<div class="content">
		<div class="card">
			<img src={image} width="50%" height="50%" alt={name+" image"}>
			<h3>{name}</h3>
		</div>
        
		<div class="btn-display">
			<button>Modificar</button>
			<button>Eliminar</button>  
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
		margin: 1em;
		font-size: 1.5em;
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
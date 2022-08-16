<script>
	import '../assets/app.css'
	import Header from "$lib/Header.svelte";
	import Footer from '../lib/Footer.svelte';
	import Book from "$lib/Book.svelte";
	import {reloadBook} from '../storage/store.js'

	async function fetchProduct(){
		const response = await fetch('http://127.0.0.1:5173/api')
		const data = await response.json()

		if(response.ok){
			return data.message
		}else{
			throw new Error(data)
		}
	}

	//Update components
	let unique = {}

	function restart(){
		$reloadBook = true
	}

	$: if($reloadBook == true){
		unique = {}
		$reloadBook = false
	}

</script>

<Header/>
{#key unique}
	{#await fetchProduct()}
		<p>Cargando productos...🤓</p>
	{:then products} 
		<div class="content">
			{#each products.data as product, i}
				<Book
					_id={product._id}
					name={product.title}
					image={product.image_path}
					launch_date={product.launch_date}
				/>
				{#if i+1 != products.data.length}
					<hr class="hr" size="1">
				{/if}
			{/each}
			{$reloadBook = false}    
		</div>
	{:catch error}
			<p>Ups! Algo anduvo mal 😖</p>
			{$reloadBook = false} 
	{/await}	
{/key}
<Footer/>

<style>
	@media(min-width: 900px){
		.content{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.hr{
			display: none;
		}
	}

	hr{
		margin: 5vh 20vw 2vh 20vw;
	}

	p{
		margin-top: 10vh;
	}
</style>
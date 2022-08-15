<script>
	import {testStore} from '../storage/store.js'

	function changeStoreVariable(){
		$testStore = 'No es pakito'
	}
</script>

<section>
	<p>El nombre de la variable de store es: {$testStore}</p>
	<button on:click={changeStoreVariable}>Cambiar testStore</button>
</section>

<style>
	section{
		margin: 25%;
	}
</style>
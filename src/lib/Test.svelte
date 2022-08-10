<script>
	import {variable} from './store.js'

	let recibirVariable

	const unsuscribe = variable.subscribe(value =>{
		recibirVariable = value
	})
</script>

<h1>{recibirVariable}</h1>
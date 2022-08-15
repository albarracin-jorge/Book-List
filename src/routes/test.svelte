<script>
  import '../assets/app.css';
  import Test from '$lib/Test.svelte'

  const variables = {
    name: 'Rochi',
    lastname: 'Monllor Segura',
    age: 25
  }
  
</script>

<Test
  {...variables}
/>
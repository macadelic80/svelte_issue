<script>
  import NumberRangeField from './NumberRangeField.svelte';

  export let rulesField = {
    maxPromptAge: 'default',
  };
  setTimeout(() => {
    rulesField.maxPromptAge = 'timeout';
    console.log('rules changed', rulesField);
  }, 2000);
</script>

<body>
  <NumberRangeField bind:value={rulesField.maxPromptAge} />
</body>


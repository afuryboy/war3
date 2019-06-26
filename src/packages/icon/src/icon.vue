<template>
  <i :class="'w3-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'ElIcon',

    props: {
      name: String
    }
  };
</script>

<template>
    <div>
      <button @click="showMsg">message</button>
    </div>
  </template>
  <script>
  export default {
    name: 'example-message',
    data() {
      return {}
    },
    methods: {
      showMsg() {
        this.$message.info()
      }
    }
  }
  </script>
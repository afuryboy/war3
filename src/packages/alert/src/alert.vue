<template>
  <transition name="w3-alert-fade">
      <div>
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
      </div>
  </transition>
</template>
<script>
export default {
  name: 'w3-alert',
  data() {
    return {
      data: 'alert'
    }
  }
}
</script>
<style scoped lang="scss">

</style>
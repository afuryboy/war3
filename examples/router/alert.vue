<template>
  <div style="width: 300px;">
    <Alert type="warning" @on-close="close" :closable="closed">
        <Icon name="ios-cloud-done" slot="icon"></Icon>
        <div slot="title">这是title</div>
        <!-- 这是一段message -->
        <div slot="desc">这是content</div>
        <!-- <span slot="close">关闭</span> -->
    </Alert>
  </div>
</template>
<script>
export default {
  name: 'example-alert',
  data() {
    return {
      closed: true,
      icon:false
    }
  },
  methods: {
    close() {
      
    }
  }
}
</script>
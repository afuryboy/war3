<template>
    <transition
    appear
    appear-active-class="animated fadeInDown"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
    @after-leave="handleAfterLeave"
    >
      <div v-show="visible">aaa</div>
    </transition>
</template>
<script>
import Icon from '@/packages/icon'
import { prefixMessage } from '@/config';
export default {
  name: prefixMessage,
  components: { Icon },
  data() {
    return {
      timer: null,
      closed: false,
      visible: false
    }
  },
  props: {
    duration: {
      type: [Number, String],
      default: 2000
    },
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true
    },
    autoClose() {
      this.timer = setTimeout(() => {
        this.close()
      },this.duration)
    },
    watchClosed(newV,oldV) {
      this.visible = false
    }
  },
  mounted() {
    this.autoClose()
  },
  watch: {
    closed: 'watchClosed'
  }
}
</script>
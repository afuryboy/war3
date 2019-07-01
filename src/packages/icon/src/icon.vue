<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
  import { prefixIcon } from '@/config'
  export default {
    name: prefixIcon,
    props: {
      name: {
        type: String,
        required: true
      },
      size: [String, Number],
      color: String,
      custom: {
        type: String,
        default: ''
      }
    },
    computed: {
      styles (){
          let style = {};
          if (this.size) {
              style['font-size'] = `${this.size}px`;
          }
          if (this.color) {
              style.color = this.color;
          }
          return style;
      },
      classes (){
        return [
          {
            [`${prefixIcon}-${this.name}`] : this.name !== '',
            [`${this.custom}`] : this.custom !== ''
          }
        ]
      }
    }
  };
</script>

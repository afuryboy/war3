import { prefixRow } from '@/config'
export default {
  name: prefixRow,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    justify: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
      }
    },
    align: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    },
    gutter: Number
  },
  data: () => {
    return {
      type: 'flex'
    }
  },
  computed: {
    style() {
      let style = {}
      if(this.gutter) {
        style.marginLeft = `-${this.gutter/2}px`,
        style.marginRight = style.marginLeft;
      }
      return style;
    },
    classes() {
      return [
        {
          [`${prefixRow}-${this.type}`]: this.type,
          [`${prefixRow}-${this.type}-${this.align}`]: !!this.align,
          [`${prefixRow}-${this.type}-${this.justify}`]: !!this.justify,
        }
      ]
    }
  },
  render(h) {
    return h(this.tag,{
      class: this.classes,
      style: this.style
    },this.$slots.default)
  }
}
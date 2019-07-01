<template>
  <div>
      <transition name="w3-fade"
      appear
      appear-active-class="animated fadeInDown"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutDown"
    >
        <div :class="classes" v-if="show">
            <span :class="iconClasses" v-if="visibleIcon">
                <slot name="icon">
                    <Icon :name="iconType"></Icon>
                </slot>
            </span>
            <div class="w3-alert-content">
                <div class="w3-alert-title" v-if="title">
                    <slot name="title"></slot>
                </div>
                <div class="w3-alert-message" v-else>
                  <slot></slot>
                </div>
                <div class="w3-alert-desc">
                  <slot name="desc"></slot>
                </div>
            </div>
            <span @click="close" v-if="closable" :class="closeClasses">
                <slot name="close">
                    <Icon name="ios-close" ></Icon>
                </slot>
            </span>
        </div>
    </transition>
  </div>
</template>
<script>
import Icon from '@/packages/icon'
import { prefixAlert } from '@/config';
export default {
  name: prefixAlert,
  components: { Icon },
  data() {
    return {
      show: true,
      desc: false,
      title: false,
    }
  },
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ['success','warning','danger','info'].includes(value)
      }
    }
  },
  computed: {
    visibleIcon() {
      let showIcon2 = !!this.$slots.icon && true
      return this.showIcon && showIcon2
    },
    classes() {
      return [
        {
          [`${prefixAlert}`]: true,
          [`${prefixAlert}-${this.type}`]: true,
          [`${prefixAlert}-with-icon`]: this.visibleIcon,
          [`${prefixAlert}-with-desc`]: this.desc,
        }
      ]
    },
    iconType () {
        let type = '';
        switch (this.type) {
            case 'success':
                type = 'ios-checkmark-circle';
                break;
            case 'info':
                type = 'ios-information-circle';
                break;
            case 'warning':
                type = 'ios-alert';
                break;
            case 'danger':
                type = 'ios-close-circle';
                break;
        }

        if (this.desc) type += '-outline';
        return type;
    },
    iconClasses() {
      return `${prefixAlert}-icon`
    },
    closeClasses() {
      return `${prefixAlert}-close`
    }
  },
  methods: {
    close() {
      this.show = false;
      this.$emit('on-close')
    }
  },
  created() {
    this.desc = !!this.$slots.desc && true
    this.title = !!this.$slots.title && true
  }
}
</script>
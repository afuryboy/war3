import Vue from 'vue'
import Alert from '@/packages/alert'
import Icon from '@/packages/icon'
const components = {
  Alert,
  Icon
}
function install (Vue, opts = {}) {
  for(let [key, val] of Object.entries(components)) {
    Vue.component(key,val)
  }
}
export default {
  install,
  version: process.env.__VERSION__
}
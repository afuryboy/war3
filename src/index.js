import Vue from 'vue'
import Alert from '@/packages/alert'
import Icon from '@/packages/icon'
import Row from '@/packages/row'

const components = {
  Alert,
  Icon,
  Row
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
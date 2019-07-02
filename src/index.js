import Vue from 'vue'
import Alert from '@/packages/alert'
import Icon from '@/packages/icon'
import Row from '@/packages/row'
import Message from '@/packages/message'

const components = {
  Alert,
  Icon,
  Row,
  Message
}
function install (Vue, opts = {}) {
  for(let [key, val] of Object.entries(components)) {
    Vue.component(key,val)
  }
  Vue.prototype.$message = Message;
}
export default {
  install,
  version: process.env.__VERSION__
}
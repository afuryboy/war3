import Vue from 'vue'
import Message from './message.vue'

let MessageConstructor = Vue.extend(Message)
const MessageCreate = function(options) {
  const MessageInstance = new MessageConstructor()
  MessageInstance.vm = MessageInstance.$mount()
  document.body.appendChild(MessageInstance.vm.$el)
  MessageInstance.vm.visible = true
  return MessageInstance.vm
};
['success', 'warning', 'info', 'error'].forEach(type => {
  MessageCreate[type] = options => {
    //options.type = type
    return MessageCreate(options)
  }
})

export default MessageCreate
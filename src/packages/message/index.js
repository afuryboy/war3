import Message from './src/message.js'
Message.install = function(Vue) {
  Vue.component(Message.name, Message);
};

export default Message;
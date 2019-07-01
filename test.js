const net = require('net')
const port = 8080;

function checkPort(port) {
  var server = net.createServer().listen(port,'0.0.0.0')
  server.on('listening', function(){
    server.close();
    console.log('The port【' + port + '】 is available.');
  })
  server.on('error', function(err){
    console.log(err.code);
    if(err.code === 'EADDRINUSE') {
      console.log('The port【' + port + '】 is occupied, please change other port.')
    }
  })
}
checkPort(port)
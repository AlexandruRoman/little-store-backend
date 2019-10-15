import app from "./app";
import startSocket from "./socket";

const server = app.listen(3000, () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
})
const io = require('socket.io').listen(server)
startSocket(io)
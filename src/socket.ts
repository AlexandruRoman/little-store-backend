import { Server, Socket } from "socket.io";

export default function startSocket(io: Server) {
    let connections = 0
    io.on('connection', function (socket: Socket) {
        connections++
        io.emit('update-connections', connections)

        socket.on('disconnect', function () {
            connections--
        });
    });
}
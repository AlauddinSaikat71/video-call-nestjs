import { CallGateway } from '@app/common/gateways/call.gateways';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ScreenShareGateway extends CallGateway {
  @SubscribeMessage('screenOffer')
  handleScreenOffer(client: Socket, offer: RTCSessionDescriptionInit) {
    console.log(`Received screen offer from client ${client.id}`);

    // Send the offer to all other clients in the same room
    client.to(client.room).emit('screenOffer', offer);
  }

  @SubscribeMessage('screenAnswer')
  handleScreenAnswer(client: Socket, answer: RTCSessionDescriptionInit) {
    console.log(`Received screen answer from client ${client.id}`);

    // Send the answer to all other clients in the same room
    client.to(client.room).emit('screenAnswer', answer);
  }

  @SubscribeMessage('newScreenIceCandidate')
  handleNewScreenIceCandidate(client: Socket, candidate: RTCIceCandidate) {
    console.log(`Received new screen ICE candidate from client ${client.id}`);

    // Send the new ICE candidate to all other clients in the same room
    client.to(client.room).emit('newScreenIceCandidate', candidate);
  }
}

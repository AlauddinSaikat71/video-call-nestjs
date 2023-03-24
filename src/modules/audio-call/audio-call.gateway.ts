import { CallGateway } from '@app/common/gateways/call.gateways';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { AUDIO_CHAT_GATEWAY_PORT } from 'src/config/config';

@WebSocketGateway(AUDIO_CHAT_GATEWAY_PORT)
export class AudioCallGateway extends CallGateway {
  @SubscribeMessage('joinAudioCall')
  handleJoinAudioCall(
    client: Socket,
    data: { roomId: string; userId: string },
  ) {
    console.log(`User ${data.userId} joined room ${data.roomId}`);
    client.join(data.roomId);
    this.server.to(data.roomId).emit('userJoined', data.userId);
  }

  @SubscribeMessage('leaveAudioCall')
  handleLeaveAudioCall(
    client: Socket,
    data: { roomId: string; userId: string },
  ) {
    console.log(`User ${data.userId} left room ${data.roomId}`);
    client.leave(data.roomId);
    this.server.to(data.roomId).emit('userLeft', data.userId);
  }

  @SubscribeMessage('offerAudio')
  handleOffer(
    client: Socket,
    data: { roomId: string; offer: RTCSessionDescription },
  ) {
    console.log(`Received offer from user ${client.id} in room ${data.roomId}`);
    client
      .to(data.roomId)
      .emit('offer', { offer: data.offer, userId: client.id });
  }

  @SubscribeMessage('answerAudio')
  handleAnswer(
    client: Socket,
    data: { roomId: string; answer: RTCSessionDescription },
  ) {
    console.log(
      `Received answer from user ${client.id} in room ${data.roomId}`,
    );
    client
      .to(data.roomId)
      .emit('answer', { answer: data.answer, userId: client.id });
  }

  @SubscribeMessage('iceCandidateAudio')
  handleIceCandidate(
    client: Socket,
    data: { roomId: string; candidate: RTCIceCandidate },
  ) {
    client
      .to(data.roomId)
      .emit('iceCandidate', { candidate: data.candidate, userId: client.id });
  }
}

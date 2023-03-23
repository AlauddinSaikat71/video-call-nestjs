import { Module } from '@nestjs/common';
import { VideoCallGateway } from './video-call.gateway';

@Module({
  imports: [],
  providers: [VideoCallGateway],
})
export class VideoCallModule {}

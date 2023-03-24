import { Module } from '@nestjs/common';
import { AudioCallGateway } from './audio-call.gateway';

@Module({
  imports: [],
  providers: [AudioCallGateway],
})
export class AudioCallModule {}

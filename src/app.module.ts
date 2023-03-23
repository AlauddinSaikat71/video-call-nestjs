import { Module } from '@nestjs/common';
import { AudioCallModule } from './modules/audio-call/audio-call.module';
import { VideoCallModule } from './modules/video-call/video-call.module';

@Module({
  imports: [VideoCallModule, AudioCallModule],
})
export class AppModule {}

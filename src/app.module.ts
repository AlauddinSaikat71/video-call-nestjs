import { Module } from '@nestjs/common';
import { AudioCallModule } from './modules/audio-call/audio-call.module';
import { ScreenShareModule } from './modules/screeen-share/screen-share.module';
import { VideoCallModule } from './modules/video-call/video-call.module';

@Module({
  imports: [VideoCallModule, AudioCallModule, ScreenShareModule],
})
export class AppModule {}

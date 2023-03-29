import { Module } from '@nestjs/common';
import { ScreenShareGateway } from './screen-share.gateway';

@Module({
  imports: [],
  providers: [ScreenShareGateway],
})
export class ScreenShareModule {}

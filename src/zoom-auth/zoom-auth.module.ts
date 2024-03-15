import { Module } from '@nestjs/common';
import { ZoomAuthService } from './zoom-auth.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://zoom.us/oauth/token',
    }),
  ],
  providers: [ZoomAuthService],
  exports: [ZoomAuthService],
})
export class ZoomAuthModule {}

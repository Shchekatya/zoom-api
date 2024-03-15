import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ZoomAuthModule } from 'src/zoom-auth/zoom-auth.module';
import { ZoomApiController } from './zoom-api.controller';
import { ZoomApiService } from './zoom-api.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.zoom.us/v2',
    }),
    ZoomAuthModule,
  ],
  controllers: [ZoomApiController],
  providers: [ZoomApiService],
  exports: [ZoomApiService],
})
export class ZoomApiModule {}

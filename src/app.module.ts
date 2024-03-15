import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZoomApiModule } from './zoom-api/zoom-api.module';

@Module({
  imports: [ZoomApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

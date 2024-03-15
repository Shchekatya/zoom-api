import { Controller, Post } from '@nestjs/common';
import { ZoomApiService } from './zoom-api.service';

@Controller('zoom-api')
export class ZoomApiController {
  constructor(private readonly zoomApi: ZoomApiService) {}

  @Post('')
  createMeeting() {
    return this.zoomApi.createMeeting();
  }
}

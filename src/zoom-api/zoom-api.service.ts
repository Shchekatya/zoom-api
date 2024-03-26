import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ZoomAuthService } from 'src/zoom-auth/zoom-auth.service';

@Injectable()
export class ZoomApiService {
  constructor(
    private readonly apiZoom: HttpService,
    private readonly zoomAuth: ZoomAuthService,
  ) {}

  async createMeeting() {
    try {
      const token = await this.zoomAuth.getAccessToken();
      console.log(token);
      const res = await this.apiZoom.axiosRef.post(
        `/users/me/meetings`,
        {
          settings: {
            waiting_room: false,
          },
          topic: 'Test meeting',
          start_time: '2024-03-31T12:02:00Z',
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      return res.data;
    } catch (e) {
      throw new Error(`error in createMeeting: ${e.message}`);
    }
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ZoomAuthService {
  constructor(private readonly authApiZoom: HttpService) {}

  async getAccessToken() {
    try {
      const clientID = 'DPUcIoeT3KHZ6O_xHK5rA';
      const clientSecret = 'GKCkuncFqF8dEH3dLk0eo5fX5uRB5PCL';
      const accountID = 'pdMVQNCLTcCN_y8lz2NdLQ';

      const data = `${clientID}:${clientSecret}`;
      const token = Buffer.from(data).toString('base64');

      const res = await this.authApiZoom.axiosRef.post(
        `?grant_type=account_credentials&account_id=${accountID}`,
        {},
        {
          headers: {
            authorization: `Basic ${token}`,
          },
        },
      );
      return res.data.access_token;
    } catch (e) {
      throw new Error(`error in getAccessToken: ${e.message}`);
    }
  }
}

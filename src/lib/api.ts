import dayjs from 'dayjs';

import {
  ApiResponse,
  Film,
  People,
  PeopleResult,
  Planet,
  RelativeFilm,
  RelativeHomeWorld,
  Species,
  StarShips,
  Vehicle,
} from '@/types';

export interface ParameterType {
  search?: string | string[] | undefined;
  format?: string;
  page?: number;
}

export class FetchAPI {
  apiDomain: string = 'swapi.dev'; // process.env.API_DOMAIN
  baseUrl: string;
  constructor() {
    this.baseUrl = `https://${this.apiDomain}/api`;
  }
  async sendApiRequest(
    api: string,
    parameters: ParameterType,
    method: string = 'GET',
    body?: {
      name: string;
      email: string;
      phone: string;
    }
  ): Promise<ApiResponse & RelativeFilm & RelativeHomeWorld> {
    const queryString = new URLSearchParams(parameters as any);
    return await fetch(`${this.baseUrl}/${api}?${queryString.toString()}`, {
      method,
      body: JSON.stringify(body),
      next: {
        revalidate: 3600,
      },
    })
      .then(async (res: Response) => {
        const result = await res.json();

        return {
          ...result,
          lastFetchUpdated: dayjs().format('ddd, DD MMM YYYY HH:mm:ss [GMT]'),
        };
      })
      .catch((error: Error) => {
        console.log('error -> ', error);
        console.log('ERROR ==>', JSON.stringify(error));
        throw new Error(error?.message);
      });
  }

  async getApi(path: string, params: ParameterType): Promise<People> {
    return await this.sendApiRequest(path, params, 'GET');
  }

  async sendApi(path: string, params: ParameterType): Promise<People> {
    return await this.sendApiRequest(path, params, 'POST');
  }

  async sendTextMessage(
    path: string,
    params: ParameterType,
    body: {
      name: string;
      email: string;
      phone: string;
    }
  ) {
    return await this.sendApiRequest(path, params, 'POST', body);
  }
}

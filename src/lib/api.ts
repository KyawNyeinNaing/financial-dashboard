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
  ): Promise<ApiResponse> {
    const queryString = new URLSearchParams(parameters as any);
    const url = `${this.baseUrl}/${api}?${queryString.toString()}`;

    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600,
      },
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    try {
      const response: Response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      return {
        ...result,
        lastFetchUpdated: dayjs().format('ddd, DD MMM YYYY HH:mm:ss [GMT]'),
      };
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
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

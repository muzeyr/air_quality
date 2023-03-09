import { AxiosHeaders } from 'axios';

export class EmptyState {}

export interface CustomReponse<T> {
  data: GeneralReponse<T | T[]>;
  statusText: string;
  status: number;
  headers?: AxiosHeaders;
  config: any;
  request: any;
}

export interface GeneralReponse<T> {
  data: NumaResponse<T | T[]>;
  success?: boolean;
}

export interface NumaResponse<T> {
  data: T | T[];
  limit: number;
  offset: number;
  count: number;
  total: number;
}

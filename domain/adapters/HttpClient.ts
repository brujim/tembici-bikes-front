import { AxiosRequestConfig } from "axios";

export interface HttpClient {
	get(url: string, config?: AxiosRequestConfig<any>): Promise<any>;
  post(url: string, body: any, config?: AxiosRequestConfig<any>): Promise<any>;
}
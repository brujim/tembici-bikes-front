import axios, { AxiosRequestConfig } from "axios";
import { HttpClient } from "./HttpClient";

export default class AxiosAdapter implements HttpClient {

	async get(url: string, config?: AxiosRequestConfig<any>): Promise<any> {
		
		const response = await axios.get(url, config);
    return response.data;
  }

  async post(url: string, body: any, config?: AxiosRequestConfig<any>): Promise<any> {
    const response = await axios.post(url, body, config);
    return response.data;
  }

}

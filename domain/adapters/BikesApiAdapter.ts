import { HttpClient } from "./HttpClient";

export default class BikesApiAdapter {
	constructor (
		readonly baseUrl:string, 
		readonly httpClient: HttpClient
	) { 

	}
	
	async getBikeStations(databaseId: string, filters: any): Promise<any[]> {
		const config = {
			params: filters,
		}
		const response = await this.httpClient.get(`${this.baseUrl}/stations`, config);
		return response;
	}
}
import AxiosAdapter from "../adapters/AxiosAdapter";
import BikesApiAdapter from "../adapters/BikesApiAdapter";
import dotenv from 'dotenv';
dotenv.config();

export default class UseCaseBase {
	httpClient: AxiosAdapter
	bikesApiAdapter: BikesApiAdapter;

	constructor() {
		
		const baseUrl = 'https://tembici-bikes-back.onrender.com';

		this.httpClient = new AxiosAdapter();
		this.bikesApiAdapter = new BikesApiAdapter(baseUrl, this.httpClient);
	}
}
import UseCaseBase from "./UseCaseBase";

export default class GetBikeStations extends UseCaseBase {

	constructor() {
		super()
	}

	async execute(databaseId: string, filters: any)
	{
    return await this.bikesApiAdapter.getBikeStations(databaseId, filters);
	}
}
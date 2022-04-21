import httpClient from "@/clients/httpClient";
export default class CoinApiService {
    static API_ENDPOINT = "GetMoney";
    static async getAll(){
        const response = await httpClient().get(this.API_ENDPOINT);;
        return response.data;  
    }
}
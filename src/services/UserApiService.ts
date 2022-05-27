import httpClient from "@/clients/httpClient";
export default class UserApiService {
    static API_ENDPOINT = "GetMoney";
    static async getAll(){
        const response = await httpClient().post(this.API_ENDPOINT);
        return response.data;  
    }
}
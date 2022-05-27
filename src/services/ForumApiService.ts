import httpClient from "@/clients/httpClient";
export default class ForumApiService {
    static API_ENDPOINT = "Forum";
    static async getAll(){
        const response = await httpClient().get(this.API_ENDPOINT);
        return response.data;  
    }
}
import axios from "axios";
export default ()=>{
  return axios.create({
    baseURL: 'https://localhost:7176/',
    headers: {"accept": "application/json"}
  });
}
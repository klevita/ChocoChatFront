import axios from "axios";
export default ()=>{
  return axios.create({
    baseURL: 'https://localhost:7176/api/',
    headers: {"accept": "application/json"}
  });
}
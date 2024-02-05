import axios from "axios";

const baseUrl = "https://api.forexrateapi.com/v1/latest"

const http = axios.create({
    baseURL: baseUrl,
  });
  
function getData(data = {}){
    return http.get(baseUrl,data);
}

const api = {
    getData
}

export default api;
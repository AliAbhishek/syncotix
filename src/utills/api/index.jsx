import axios from "axios";
import { setupInterceptors } from "./interceptor";


const api= axios.create({
    // baseURL : "http:localhost:7071/",
    // baseURL : "https://localhost:7206/api/",

    // baseURL : "http://dev-softwiz-002:8090/api/", 
    baseURL : "http://newapi.syncotics.com/api/",


    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });



// Setup interceptors
setupInterceptors(api);

export default api;

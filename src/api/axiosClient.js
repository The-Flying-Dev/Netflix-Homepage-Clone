import axios from "axios";
import queryString from 'query-string';

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    //optional function for serializing params
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async (config) => config);

//checks data is valid before returning
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  }, (error) => {
      throw error;
});

export default axiosClient;
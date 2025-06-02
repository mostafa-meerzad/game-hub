import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null
}

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d248087d0e624e84b6e0c697d6ee0763",
  },
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig)=>{
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res=>res.data)
  }
}

export default APIClient;
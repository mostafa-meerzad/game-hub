import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d248087d0e624e84b6e0c697d6ee0763",
  },
});

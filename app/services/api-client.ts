import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  baseURL: `${proxyUrl}https://newsapi.org/v2`,
  params: {
    apiKey: "3cd8914b298e4dc687c1c16434214127",
    pageSize: 12,
  },
});

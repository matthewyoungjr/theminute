import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: "3cd8914b298e4dc687c1c16434214127",
    pageSize: 12,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://newsdata.io/api/1",
  params: {
    apiKey: "pub_51702cbdd5bd7e39b5c0844410a5b1033f6b0",
    size: 16,
  },
});
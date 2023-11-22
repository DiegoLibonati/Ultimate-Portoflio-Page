import axios from "axios";

const portfolioApi = axios.create({
  baseURL: `${window.location.origin}/api/v1`,
  withCredentials: true,
});

export default portfolioApi;

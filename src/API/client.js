import { create } from "apisauce";
import { AWS_BASE_URL } from "@dotenv"

console.log(AWS_BASE_URL)

const apiClient = create({
  baseURL: AWS_BASE_URL
});

export default apiClient;
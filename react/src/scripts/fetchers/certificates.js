import axios from "axios";
import API_CONFIG from "../globals/api-config";

export const fetchAllCertificates = async () => {
  console.log("Fetching All Certificates");

  const response = await axios.get(API_CONFIG.BASE_URL + "certificates");
  const certificates = response.data.records;

  console.log("Certificates: ", certificates);
  return certificates;
}
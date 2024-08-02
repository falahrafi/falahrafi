import axios from "axios";
import API_CONFIG from "../globals/api-config";

export const fetchAllTestimonials = async () => {
  console.log("Fetching All Testimonials");

  const response = await axios.get(API_CONFIG.BASE_URL + "testimonials");
  const testimonials = response.data.records;

  console.log("Testimonials: ", testimonials);
  return testimonials;
}
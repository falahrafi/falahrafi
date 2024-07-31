import axios from "axios";
import API_CONFIG from "../globals/api-config";

export const fetchAllProjects = async () => {
  console.log("Fetching Projects");

  const response = await axios.get(API_CONFIG.BASE_URL + "projects");
  const projects = response.data.records;

  console.log("Projects: ", projects);
  return projects;
}

export const fetchProjectByCategory = async ({queryKey}) => {
  console.log("Fetching Projects");

  const [_, categoryId] = queryKey;

  const response = await axios.get(API_CONFIG.BASE_URL + "projects?filter=categoryId,eq," + categoryId);
  const projects = response.data.records;

  console.log("Projects: ", projects);
  return projects;
}

export const fetchProjectById = async ({queryKey}) => {
  console.log("Fetching Projects");

  const [_, projectId] = queryKey;

  const response = await axios.get(API_CONFIG.BASE_URL + "projects?filter=id,eq," + projectId);
  const projects = response.data.records[0];

  console.log("Projects: ", projects);
  return projects;
}
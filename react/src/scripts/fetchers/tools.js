import axios from "axios";
import API_CONFIG from "../globals/api-config";

export const fetchAllTools = async () => {
  console.log("Fetching All Tools");

  const response = await axios.get(API_CONFIG.BASE_URL + "tools");
  const tools = response.data.records;

  console.log("Tools: ", tools);
  return tools;
}

export const fetchToolsBelongToProject = async ({ queryKey }) => {
    console.log("Fetching Tools Belong To Project");

    const [_, projectId] = queryKey;

    const response1 = await axios.get(API_CONFIG.BASE_URL + "project_tools?filter=projectId,eq," + projectId);
    const projectTools = response1.data.records;
    const toolsId = projectTools.map((projectTool) => {
        return projectTool.toolId;
    });

    const response2 = await axios.get(API_CONFIG.BASE_URL + "tools/" + toolsId.toString());
    const toolsOfProject = response2.data;

    console.log("Tools of Project: ", toolsOfProject);
    return toolsOfProject;
};

export const fetchToolsBelongToCategory = async ({ queryKey }) => {
    console.log("Fetching Tools Belong To Category");

    const [_, categoryId] = queryKey;

    const response1 = await axios.get(API_CONFIG.BASE_URL + "category_tools?filter=categoryId,eq," + categoryId);
    const categoryTools = response1.data.records;
    const toolsId = categoryTools.map((categoryTool) => {
        return categoryTool.toolId;
    });

    const response2 = await axios.get(API_CONFIG.BASE_URL + "tools/" + toolsId.toString());
    const toolsOfCategory = response2.data;

    console.log("Tools of Category: ", toolsOfCategory);
    return toolsOfCategory;
};
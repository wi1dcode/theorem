import { get, remove, put, post } from "./api";

export const getProjects = async () => {
  try {
    const response = await get("/work");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await get(`/work/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProject = async (projectData) => {
  try {
    const response = await post("/dashboard/work", projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const response = await put(`/dashboard/work/${id}`, projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await remove(`/dashboard/work/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (formData) => {
  try {
    const response = await post("/dashboard/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

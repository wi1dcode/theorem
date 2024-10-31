import { get, post, put } from "./api";

export const estimation = async (userData) => {
  try {
    const response = await post(`/estimation`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const sendResponses = async (formData) => {
  try {
    const response = await post(`/send-responses`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await get(`/account/userinfo`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const response = await get(`/dashboard/projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const response = await get(`/dashboard/project/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectsByStatus = async (status) => {
  try {
    const response = await get(`/dashboard/projects?status=${status}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProjectStatus = async (id, data) => {
  try {
    const response = await put(`/dashboard/project/${id}/status`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProjectPriceTotal = async (id, data) => {
  try {
    const response = await put(`/dashboard/project/${id}/price`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating project price total:", error);
    throw error;
  }
};

export const getGoogleReviews = async () => {
  try {
    const response = await get(`/google-reviews`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

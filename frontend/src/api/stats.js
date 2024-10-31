import { get } from "./api";

export const getStats = async () => {
  try {
    const response = await get("/dashboard/stats");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getServerStats = async () => {
  try {
    const response = await get("/dashboard/server-stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching server stats:", error);
    throw error;
  }
};

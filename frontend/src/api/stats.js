import { get } from "./api";

export const getStats = async () => {
  try {
    const response = await get("/dashboard/stats");
    return response.data;
  } catch (error) {
    throw error;
  }
};

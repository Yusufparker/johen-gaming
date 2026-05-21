import axios from "../lib/axios";
import { type GameCategoryResponse } from "../types";

export const getGameCategories = async (): Promise<GameCategoryResponse> => {
  const response = await axios.get("/games");
  return response.data;
};

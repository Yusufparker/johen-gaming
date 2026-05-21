import axios from "../lib/axios";
import type { TestimoniResponse } from "../types";


export const getTestimonis = async () : Promise<TestimoniResponse> => {
    try {
        const response = await axios.get("/testimonis");
        return response.data;
    } catch (error) {
        console.error("Error fetching testimonis:", error);
        throw error;
    }
}
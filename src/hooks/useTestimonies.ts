import { useQuery } from "@tanstack/react-query";
import { getTestimonis } from "../services/testimoni.service";


export const useGetTestimonies = () => {
    return useQuery({
        queryKey: ["testimonies"],
        queryFn: () =>  getTestimonis(),
    });
}
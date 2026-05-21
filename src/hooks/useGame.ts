import { useQuery } from "@tanstack/react-query"
import { getGameCategories } from "../services/game-category.service";

export const useGetGames = () => {
    return useQuery({
        queryKey: ["games"],
        queryFn: () => getGameCategories(),
        
    });
}
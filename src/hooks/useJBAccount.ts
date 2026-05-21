import { useQuery } from "@tanstack/react-query";
import { getAccountByID, getRelatedAccounts, searchAccounts } from "../services/jb-account.service";
import type { SearchAccountsParams } from "../types";


export const useSearchAccounts = (params: SearchAccountsParams = {}) => {
    return useQuery({
        queryKey: ["accounts", params],
        queryFn: () => searchAccounts(params),
        placeholderData: (prev) => prev, 
    });
};

export const useGetAccountByID = (id: string) => {
    return useQuery({
        queryKey: ["account", id],
        queryFn: () => getAccountByID(id),
    });
}

export const useGetRelatedAccounts = (id: string) => {
    return useQuery({
        queryKey: ["related-accounts", id],
        queryFn: () => getRelatedAccounts(id),
    });
}
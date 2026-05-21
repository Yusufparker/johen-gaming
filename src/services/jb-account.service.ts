import axios from "../lib/axios";
import type { AccountProduct, AccountProductResponse, SearchAccountsParams } from "../types";

export const searchAccounts = async (params: SearchAccountsParams): Promise<AccountProductResponse> => {
    const response = await axios.get("/accounts", {
        params: {
            search: params.search || undefined,
            sort: params.sort || undefined,
            minPrice: params.minPrice || undefined,
            maxPrice: params.maxPrice || undefined,
            game: params.games,
            page: params.page ?? 1,
            limit: params.limit ?? 10,
        },
        paramsSerializer: {
            indexes: null,
        },
    });
    return response.data;
};


export const getAccountByID = async (id: string) : Promise<AccountProduct> => {
    const response = await axios.get(`/accounts/${id}`);
    return response.data;
}


export const getRelatedAccounts = async (id :string): Promise<AccountProduct[]> => {
    const response = await axios.get(`/accounts/${id}/related`)
    return response.data;
}

import axios from "../lib/axios";
import { type Category, type ProductResponse, type PromoResponse, type TopupProductDetail } from "../types";


export const searchProducts = async (
    search: string
    ): Promise<ProductResponse> => {
    const response = await axios.get("/products", {
        params: {
            search,
        },
    });

    return response.data;
};


export const getPopularProducts = async (): Promise<ProductResponse> => {
    const response = await axios.get("/products?popular=true");
    return response.data
}

export const getPromos = async (): Promise<PromoResponse> => {
    const response = await axios.get("/promos?active=true");
    return response.data
}

export const getProductByCategory = async (
    category: Category,
    page: number = 1
): Promise<ProductResponse> => {

    const response = await axios.get("/products", {
        params: {
            category,
            page,
            limit: 12,
        },
    });

    return response.data;
};

export const getProductBySlug = async (slug: string): Promise<TopupProductDetail> => {
    const response = await axios.get(`/products/${slug}`);
    return response.data;
};
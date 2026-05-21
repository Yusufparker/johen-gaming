import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { searchProducts,getPopularProducts, getPromos, getProductByCategory, getProductBySlug } from "../services/product.service";
import type { Category } from "../types";

export const useSearchProducts = (search: string) => {
    return useQuery({
        queryKey: ["products", "search", search],
        queryFn: () => searchProducts(search),
        enabled: !!search,
    });
}


export const useGetPopularProducts = () => {
    return useQuery({
        queryKey: ["products", "popular"],
        queryFn: () =>  getPopularProducts(),
    });
}

export const useGetPromos = () => {
    return useQuery({
        queryKey: ["promos"],
        queryFn: () =>  getPromos(),
    });
}

export const useGetProductsByCategory = (
    category: Category
) => {

    return useInfiniteQuery({
        queryKey: ["products", category],
        queryFn: ({ pageParam = 1 }) =>
            getProductByCategory(category, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.pagination.hasNextPage) {
                return lastPage.pagination.currentPage + 1;
            }
            return undefined;
        },
    });
};

export const useGetProductBySlug = (slug: string) => {
    return useQuery({
        queryKey: ["products", "slug", slug],
        queryFn: () => getProductBySlug(slug!),
        enabled: !!slug,
    });
}
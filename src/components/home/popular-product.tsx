import { useGetPopularProducts } from "../../hooks/useProduct";
import PopularProductSkeleton from "../ui/skeletons/popular-product-skeleton";
import PopularCard from "./partials/popular-card";

const PopularProduct = () => {
    const { data, isLoading } = useGetPopularProducts();

    return (
        <section className="bg-linear-to-b from-[#d8aee3] to-purple-900 px-7 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="text-white mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <span>🔥</span>
                        Populer Sekarang
                    </h2>

                    <p className="text-xs text-white/70 mt-1 pl-6">
                        Beberapa produk paling banyak dicari saat ini
                    </p>
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    
                    {isLoading &&
                        Array.from({ length: 4 }).map((_, i) => (
                            <PopularProductSkeleton key={i} />
                        ))
                    }
                    {!isLoading &&
                        data?.data?.map((product) => (
                            <PopularCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default PopularProduct;
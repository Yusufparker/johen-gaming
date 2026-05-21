import { useMemo, useState } from "react";
import { useGetProductsByCategory } from "../../hooks/useProduct";
import GameProductCard from "./partials/game-product-card";

type FilterType = "top-up" | "voucher";

const GameProduct = () => {

    const [active, setActive] =
        useState<FilterType>("top-up");

    const {
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useGetProductsByCategory(active);

    const products = useMemo(() => {

        return (
            data?.pages?.flatMap(
                (page) => page.data
            ) ?? []
        );

    }, [data]);

    return (
        <section className="px-7 pb-12 bg-purple-900 pt-5">

            <div className="mx-auto max-w-7xl">

                <div className="flex gap-3 mb-6">

                    <button
                        onClick={() => setActive("top-up")}
                        className={`px-5 py-2 cursor-pointer rounded-full text-sm font-bold transition-all duration-200 ${
                            active === "top-up"
                                ? "bg-orange-500 text-white"
                                : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                        }`}
                    >
                        Top Up Game
                    </button>

                    <button
                        onClick={() => setActive("voucher")}
                        className={`px-5 py-2 rounded-full cursor-pointer text-sm font-bold transition-all duration-200 ${
                            active === "voucher"
                                ? "bg-orange-500 text-white"
                                : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                        }`}
                    >
                        Voucher
                    </button>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">

                    {isLoading &&
                        Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-3/4 rounded-xl bg-white/10 animate-pulse"
                            />
                        ))}

                    {!isLoading &&
                        products.map((product) => (
                            <GameProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                </div>

                {hasNextPage && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => fetchNextPage()}
                            disabled={isFetchingNextPage}
                            className="px-5 py-2 rounded-full hover:cursor-pointer bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200 disabled:opacity-50"
                        >
                            {isFetchingNextPage
                                ? "Memuat..."
                                : "Tampilkan Lainnya"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GameProduct;
import { memo } from "react";
import type { Product } from "../../../types";
import { Link } from "react-router-dom";

type Props = {
    product: Product;
};

const GameProductCard = ({ product }: Props) => {
    return (
        <Link
            to={`/top-up/${product.slug}`}
            className="group relative rounded-2xl overflow-hidden aspect-3/4 block"
        >
            <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />


            <div
                className="absolute inset-0 bg-black/45 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4"
            >
                <div className="flex justify-center mt-4">
                    <div
                        className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-lg"
                    >
                        <img
                            src="/icon.webp"
                            alt="Icon Johen Gaming"
                            className="w-7 h-7 object-cover rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="text-white text-lg font-bold leading-tight">
                        {product.name}
                    </h3>

                    <p className="text-white/70 text-xs mt-1">
                        {product.description}
                    </p>
                </div>
            </div>
            <div
                className="
                    absolute inset-0
                    rounded-2xl
                    border-2 border-white/10
                    group-hover:border-orange-400/70
                    transition-all duration-300
                "
            />
        </Link>
    );
};

export default memo(GameProductCard);
import { Link } from "react-router-dom"
import type { Product } from "../../../types"

type Props = {
    product: Product
}

const PopularCard = ({ product }: Props) => {
    return (
        <Link
            to={`/${
                    product.category === "top-up" || product.category === "voucher"
                        ? "top-up/" + product.slug
                        : "jb-akun?game=" + product.game
                }`
            }
            className="group rounded-xl overflow-hidden bg-purple-300 border-2 border-purple-300 hover:border-white hover:rotate-4 hover:scale-105 transition-all duration-300"
        >
            <div className="overflow-hidden">
                <img
                    src={product.banner}
                    alt={product.name}
                    className="w-full h-30 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 scale-105 group-hover:scale-100"
                />
            </div>

            <div className="p-4 group-hover:bg-purple-600 transition-colors duration-300">
                <h3 className="font-semibold group-hover:text-white">
                    {product.name}
                </h3>
            </div>
        </Link>
    )
}

export default PopularCard
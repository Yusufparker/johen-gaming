
import type { TopupProductDetail } from "../../types";

type Props = {
    product: TopupProductDetail;
};

const Header = ({ product }: Props) => {
    return (
        <div className="relative overflow-hidden border-b border-purple-700">
            <div className="h-60 md:h-80 overflow-hidden">
                <img src={product.banner} alt={product.name}  className="w-full h-full object-center object-cover" />
            </div>
            <img
                src={product.image}
                alt={product.name}
                className="absolute left-5 md:left-10 top-40 md:top-52 w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover border-3 border-white shadow-2xl"
            />
            <div
                className="px-5 md:px-10 pt-24 md:pt-8 pb-8 md:pl-72 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://t4.ftcdn.net/jpg/02/44/36/53/360_F_244365350_su3cLo0NrULPtPodnVddonK8KxIZknaT.jpg')",
                }}
            >
                
                <h1 className="text-3xl md:text-2xl font-black text-white">
                    {product.name}
                </h1>

                <p className="text-white mt-2 text-sm">
                    {product.description}
                </p>

            </div>

        </div>
    );
};

export default Header;
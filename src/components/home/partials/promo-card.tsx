import { Link } from "react-router-dom";
import useCountdown from "../../../hooks/useCountdown";
import type { Promo } from "../../../types";


type Props = {
    promo: Promo;
};

const PromoCard = ({ promo }: Props) => {
    const timeLeft : string = useCountdown(promo.expiresAt);
    return (
        <Link 
            to={`/${
                    promo.category === "top-up" || promo.category === "voucher"
                        ? "top-up/" + promo.product
                        : "jb-akun?game=" + promo.game
                }`
            }
            className="rounded-xl block overflow-hidden bg-purple-800/70 w-full group  hover:bg-purple-800 transition-all duration-300"
        >
            <div
                className="rounded-xl p-6 relative overflow-hidden min-h-16"
                style={{
                    backgroundImage: `url('https://t4.ftcdn.net/jpg/03/18/01/19/360_F_318011925_PVmJXBxXIELYnNCEZQ6kYj5iPrpmZRqo.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-purple-900/80 group-hover:bg-purple-900/50 transition-all duration-300" />

                <div className="relative z-10 text-white">
                    <h3 className="font-bold text-xs leading-tight truncate">
                        {promo.title}
                    </h3>
                    <p className="text-[10px] text-white/80 mt-1 truncate">
                        {promo.description}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
                <div className="bg-orange-500 text-white text-[10px] font-bold px-4 py-1 rounded-full leading-none shadow-lg">
                    {timeLeft}
                </div>
                <div className="text-white font-bold text-xs ">
                    -{promo.discountPercent}%
                </div>
            </div>
        </Link>
    );
};

export default PromoCard;
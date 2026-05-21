import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import { useGetRelatedAccounts } from "../../hooks/useJBAccount";
import { formatRupiah } from "../../utils/format";
import RelatedProductSkeleton from "../ui/skeletons/related-product-skeleton";


type Props = {
    accountId: string;
};

const RelatedAccountProducts = ({ accountId }: Props) => {

    const { data, isLoading } = useGetRelatedAccounts(accountId);

    return (
        <section className="mt-10 overflow-hidden">
            
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-white">
                    Related Product
                </h2>
            </div>

            <Swiper
                modules={[FreeMode]}
                slidesPerView={"auto"}
                spaceBetween={16}
                freeMode
                grabCursor
            >
                { isLoading &&
                    Array.from({ length: 5 }).map((_, i) => (
                        <SwiperSlide
                            key={i}
                            style={{ width: "380px" }}
                        >
                            <RelatedProductSkeleton/>
                        </SwiperSlide>
                    ))}

                {!isLoading &&
                    data?.map((account) => (
                        <SwiperSlide
                            key={account.id}
                            style={{ width: "380px" }}
                        >
                            <Link to={`/jb-akun/${account.id}`} className="bg-purple-800/90 p-4 rounded-lg block hover:bg-purple-800 transition-all duration-300">
                                <div className="flex gap-3 relative">
                                    <div className="flex-1 z-2">
                                        <h4 className="text-white/80  text-sm font-bold">{account.name}</h4>
                                        <p className="text-white/60 text-xs ">{account.specs}</p>

                                        <p className="mt-10 text-sm font-bold  text-white">{formatRupiah(account.price)}</p>
                                    </div>
                                    <img src={account.image} alt={account.game} className="w-16 h-16 object-cover z-2" />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

export default RelatedAccountProducts;
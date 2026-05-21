import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import { useGetPromos } from "../../hooks/useProduct";
import PromoCard from "./partials/promo-card";

const Promo = () => {
    const { data, isLoading } = useGetPromos();

    return (
        <section className=" px-7 pb-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
        
                <div className="">
                    <Swiper
                        modules={[FreeMode]}
                        slidesPerView={"auto"}
                        spaceBetween={16}
                        freeMode
                        grabCursor
                        className="px-7"
                    >
                        {isLoading &&
                            Array.from({ length: 6 }).map((_, i) => (
                                <SwiperSlide
                                    key={i}
                                    style={{ width: "300px" }}
                                >
                                    <div className="h-29 rounded-2xl bg-purple-400 animate-pulse"></div>
                                </SwiperSlide>
                            ))}

                        {!isLoading &&
                            data?.data?.map((promo) => (
                                <SwiperSlide
                                    key={promo.id}
                                    style={{ width: "300px" }}
                                >
                                    <PromoCard promo={promo} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Promo;
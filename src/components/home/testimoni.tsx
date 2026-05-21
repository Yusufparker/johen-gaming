import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useGetTestimonies } from "../../hooks/useTestimonies";
import TestimoniCard from "./partials/testimoni-card";
import TestimoniSkelton from "../ui/skeletons/testimoni-skeleton";


const Testimoni = () => {
    const { data, isLoading } = useGetTestimonies();
    const testimonis = data?.data ?? [];
    return (
        <section className="py-12 ">
            <div className="mx-auto max-w-7xl px-7">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-extrabold text-purple-900 ">
                        ULA<span className="text-orange-500">SAN</span>
                    </h2>
                    <p className="text-sm mt-3 ">
                        Terima kasih kepada semua pelanggan yang memberikan ulasan dan penilaian kepada kami.
                    </p>
                </div>
                <Swiper
                    modules={[FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={12}
                    freeMode
                    grabCursor
                    className="px-7!"
                >
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <SwiperSlide key={i} style={{ width: "280px" }}>
                                <TestimoniSkelton />
                            </SwiperSlide>
                        ))
                    : testimonis.map((t) => (
                        <SwiperSlide key={t.id} style={{ width: "280px" }}>
                            <TestimoniCard testimoni={t} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
};

export default Testimoni;
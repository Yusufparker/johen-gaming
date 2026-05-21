
import { faqs } from "../../data/faq";
import FaqItem from "./partials/faq-item";


const Faq = () => {
    return (
        <section
            className="px-7 pb-29 pt-12  bg-purple-900"
        >
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-9">
                    <h2 className="text-[28px] font-extrabold text-white tracking-tight">
                        TANYA <span className="text-orange-500">JAWAB</span>
                    </h2>
                    <p className="text-sm text-white/55 mt-2.5">
                        Pertanyaan yang sering ditanyakan pelanggan kami
                    </p>
                </div>

                <div className="flex flex-col gap-2.5">
                    {faqs.map((item, i) => (
                        <FaqItem key={i} item={item} />
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default Faq;
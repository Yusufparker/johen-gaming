import type { Testimoni } from "../../../types";


const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
            <svg
                key={i}
                className={`w-3.5 h-3.5 ${i <= rating ? "text-orange-500" : "text-white/20"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

type Props = {
    testimoni: Testimoni;
};

const TestimoniCard = ({ testimoni }: Props) => {
    return (
        <div className="bg-purple-900 rounded-lg p-5 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-3 text-white">
                    <StarRating rating={testimoni.rating} />
                    <span className="text-[10px] ">
                        {new Date(testimoni.createdAt).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                    </span>
                </div>
                <p className="text-[13px] leading-relaxed line-clamp-3 text-white">
                    "{testimoni.comment}"
                </p>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-700">
                <p className="text-sm font-medium text-white">{testimoni.username}</p>
                <p className="text-[11px] text-white mt-0.5">
                    {testimoni.productName}
                </p>
            </div>
        </div>
    )
}


export default TestimoniCard;
import { useState } from "react";
import type { Faq } from "../../../types";

type Props = {
    item : Faq
}

const FaqItem = ({ item }:  Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="bg-white/6  rounded-lg overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4.5 gap-3 text-left cursor-pointer"
            >
                <span className="text-sm font-medium text-white">{item.question}</span>
                <svg
                    className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="px-5 pb-4.5 pt-3.5 border-t border-white/8 text-[13.5px] leading-relaxed text-white/60">
                    {item.answer}
                </div>
            )}
        </div>
    );
}

export default FaqItem;
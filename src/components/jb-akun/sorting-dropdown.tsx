import { ChevronDown, Check, ArrowDownWideNarrow } from "lucide-react";
import { useState } from "react";

const sortOptions = [
    { label: "Harga Rendah ke Tinggi", value: "price_asc" },
    { label: "Harga Tinggi ke Rendah", value: "price_desc" },
];

type Props = {
    className?: string;
    selected: string;
    onChange: (value: string) => void;
};

const SortDropdown = ({ className = "w-fit", selected, onChange }: Props) => {
    const [open, setOpen] = useState(false);
    const selectedLabel = sortOptions.find(o => o.value === selected)?.label ?? "Urutkan";

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setOpen(!open)}
                className="h-8 px-3 md:px-3 w-8 md:w-auto bg-orange-500 text-white flex items-center justify-center md:justify-start gap-2 hover:bg-orange-600 transition-all duration-200 shadow-md shadow-black/10 rounded-lg"
            >
                <ArrowDownWideNarrow size={12} className="text-white shrink-0" />

                <span className="hidden md:block text-xs font-medium whitespace-nowrap">
                    {selectedLabel}
                </span>

                <ChevronDown
                    size={12}
                    className={`hidden md:block text-white transition duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div className="absolute top-[115%] right-0 min-w-52.5 overflow-hidden rounded-xl bg-[#1f1c31] border border-purple-500/10 shadow-2xl z-50 p-1 backdrop-blur-xl">
                    {sortOptions.map((item) => {
                        const active = selected === item.value;  
                        return (
                            <button
                                key={item.value}
                                onClick={() => {
                                    onChange(item.value);  
                                    setOpen(false);
                                }}
                                className={`w-full h-10 px-3 rounded-lg flex items-center justify-between text-sm transition-all duration-150 ${active ? "bg-[#2b2740] text-white" : "text-zinc-300 hover:bg-[#2a2640]"}`}
                            >
                                <span>{item.label}</span>
                                {active && <Check size={15} className="text-white" />}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SortDropdown;
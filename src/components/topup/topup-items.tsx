import { useMemo, useState } from "react";
import type { TopupItem } from "../../types";
import { formatRupiah } from "../../utils/format";
import { Check } from "lucide-react";

interface TopupItemsProps {
    items: TopupItem[];
    onSelect?: (item: TopupItem) => void;
}


const TopupItems = ({ items, onSelect }: TopupItemsProps) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const grouped = useMemo(() => {
        const map = new Map<string, TopupItem[]>();
        for (const item of items) {
            if (!map.has(item.category)) map.set(item.category, []);
            map.get(item.category)!.push(item);
        }
        return map;
    }, [items]);

    const handleSelect = (item: TopupItem) => {
        setSelectedId(item.id);
        onSelect?.(item);
    };

    return (
        <div className="flex flex-col gap-6 min-h-5">
            {Array.from(grouped.entries()).map(([category, categoryItems]) => (
                <div key={category}>
                    <p className="text-sm font-semibold text-white/70 mb-3">{category}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {categoryItems.map((item) => {
                            const isSelected = selectedId === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleSelect(item)}
                                    className={`relative rounded-lg cursor-pointer overflow-hidden  text-left transition-all duration-200  bg-purple-900  hover:bg-[#25043e]/90 ${isSelected ? "border border-orange-500" : ""} `}
                                >
                                    {
                                        isSelected && (
                                            <div className=" absolute top-0 right-0 w-8 h-8 p-3 rounded-bl-full bg-orange-500">
                                                <Check size={16} className="-mt-2 font-bold" />
                                            </div>
                                        )
                                    }
                                    <div className="p-3">
                                        <p className="text-xs font-semibold mb-1 pr-5 ${isSelected text-white">
                                            {item.title}
                                        </p>
                                        <p className="text-xs font-boldtext-emerald-400">
                                            {formatRupiah(item.price)}
                                        </p>

                                    </div>
                                    <div className="p-2 bg-[#25043e]/90">
                                        <div className="h-fit w-fit rounded bg-white p-1 ms-auto">
                                            <img src="/images/pengiriman instan.svg" alt="topup johen gameing instan"  className="h-2.5 w-10"/>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopupItems;
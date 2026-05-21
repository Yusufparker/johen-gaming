
import { useMemo, useState } from "react";
import { paymentMethods } from "../../config/payment-methods";
import type { PaymentMethod } from "../../types";

interface PaymentMethodProps {
    onSelect?: (method: PaymentMethod) => void;
}

const PaymentMethodInput = ({ onSelect }: PaymentMethodProps) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const grouped = useMemo(() => {
        const map = new Map<string, PaymentMethod[]>();
        for (const method of paymentMethods) {
            if (!map.has(method.category)) map.set(method.category, []);
            map.get(method.category)!.push(method);
        }
        return map;
    }, []);

    const handleSelect = (method: PaymentMethod) => {
        setSelectedId(method.id);
        onSelect?.(method);
    };

    return (
        <div className="flex flex-col gap-5">
            {Array.from(grouped.entries()).map(([category, methods]) => (
                <div key={category}>
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                        {category}
                    </p>
                    <div className="flex flex-col gap-2">
                        {methods.map((method) => {
                            const isSelected = selectedId === method.id;
                            return (
                                <button
                                    key={method.id}
                                    onClick={() => handleSelect(method)}
                                    className={`
                                        flex items-center justify-between px-4 py-3 rounded-lg border text-left transition-all duration-150
                                        ${isSelected
                                            ? "border-orange-500 bg-[#25043e]/90 ring-1 ring-orange-500/30"
                                            : "border-white/10 bg-purple-900 hover:border-white/20 hover:bg-[#25043e]/90"
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-6 flex items-center justify-center bg-white rounded p-1">
                                            <img
                                                src={method.logo}
                                                alt={method.name}
                                                className="max-h-full max-w-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = "none";
                                                }}
                                            />
                                        </div>
                                        <span className={`text-sm font-medium ${isSelected ? "text-orange-300" : "text-white"}`}>
                                            {method.name}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {method.adminFee !== undefined && method.adminFee > 0 && (
                                            <span className="text-xs text-white">
                                                +{method.adminFeeType === "percent"
                                                    ? `${method.adminFee}%`
                                                    : `Rp ${method.adminFee.toLocaleString("id-ID")}`
                                                }
                                            </span>
                                        )}
                                        {method.adminFee === 0 && (
                                            <span className="text-xs text-green-300">Gratis</span>
                                        )}

                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? "border-orange-500 bg-orange-500" : "border-white/30"}`}>
                                            {isSelected && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                            )}
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

export default PaymentMethodInput;
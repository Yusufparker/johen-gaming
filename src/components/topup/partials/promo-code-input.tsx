import { useState } from "react";

interface PromoCodeInputProps {
    onApply?: (code: string) => void;
}

const PromoCodeInput = ({ onApply }: PromoCodeInputProps) => {
    const [code, setCode] = useState<string>("");

    const handleApply = () => {
        if (!code.trim()) return;
        onApply?.(code.trim());
    };

    return (
        <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
                Kode Promo
            </label>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Masukkan kode promo"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    onKeyDown={(e) => e.key === "Enter" && handleApply()}
                    className="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                />
                <button
                    onClick={handleApply}
                    className="shrink-0 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors"
                >
                    Terapkan
                </button>
            </div>
        </div>
    );
};

export default PromoCodeInput;
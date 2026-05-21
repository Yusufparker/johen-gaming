
import { ShieldCheck } from "lucide-react";
import type {
    CheckoutState,
    PaymentMethod,
    TopupItem,
} from "../../types";

import { formatRupiah } from "../../utils/format";

interface OrderSummaryProps {
    product: {
        id: string;
        name: string;
        image: string;
    };

    selectedItem: TopupItem | null;
    selectedPayment: PaymentMethod | null;
    customerData: Record<string, string>;
    promoCode?: string;
    onSubmit?: (data: CheckoutState) => void;
}

const OrderSummary = ({
    product,
    selectedItem,
    selectedPayment,
    customerData,
    promoCode,
    onSubmit,
}: OrderSummaryProps) => {

    const basePrice = selectedItem?.price ?? 0;
    const adminFee = selectedPayment?.adminFee
        ? selectedPayment.adminFeeType === "percent"
            ? Math.ceil(
                basePrice *
                (selectedPayment.adminFee / 100)
            )
            : selectedPayment.adminFee
        : 0;

    const total = basePrice + adminFee;
    const canSubmit =
        selectedItem &&
        selectedPayment &&
        Object.values(customerData).every(
            (v) => v.trim() !== ""
        );

    const rows: {
        label: string;
        value: string;
    }[] = [
        {
            label: "Produk",
            value: product.name,
        },

        ...(selectedItem
            ? [{
                label: "Item",
                value: selectedItem.title,
            }]
            : []),

        ...(selectedPayment
            ? [
                {
                    label: "Pembayaran",
                    value: selectedPayment.name,
                },
                {
                    label: "Biaya Admin",
                    value:
                        adminFee === 0
                            ? "Gratis"
                            : selectedPayment.adminFeeType === "percent"
                                ? `${selectedPayment.adminFee}% (${formatRupiah(adminFee)})`
                                : formatRupiah(adminFee),
                },
            ]
            : []),

        ...(promoCode
            ? [{
                label: "Kode Promo",
                value: promoCode,
            }]
            : []),
    ];

    return (
        <div className="sticky top-24 flex flex-col gap-3">
            <div className="rounded-xl bg-purple-700/90 overflow-hidden">
                <div className="flex items-center gap-3 p-4 border-b bg-purple-900 border-white/5">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div>
                        <p className="text-xs text-white/50 mb-0.5">
                            Ringkasan Pesanan
                        </p>
                        <p className="text-sm font-semibold text-white">
                            {product.name}
                        </p>
                    </div>

                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col gap-3">
                    {rows.map((row) => (
                        <div
                            key={row.label}
                            className="flex justify-between items-start gap-3"
                        >
                            <span className="text-xs text-white shrink-0">
                                {row.label}
                            </span>

                            <span className="text-xs text-white text-right font-medium">
                                {row.value}
                            </span>
                        </div>
                    ))}

                    {Object.entries(customerData)
                        .filter(([, v]) => v.trim() !== "")
                        .map(([key, value]) => (
                            <div
                                key={key}
                                className="flex justify-between items-start gap-3"
                            >
                                <span className="text-xs text-white shrink-0 capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}
                                </span>
                                <span className="text-xs text-white text-right font-medium">
                                    {value}
                                </span>
                            </div>
                        ))}
                </div>

                <div className="px-4 pb-4">
                    <div className="flex justify-between items-center py-3 border-t border-white/10">

                        <span className="text-sm font-semibold text-white">
                            Total
                        </span>
                        <span className="text-base font-bold text-white">
                            {selectedItem
                                ? formatRupiah(total)
                                : "-"}
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            if (
                                !selectedItem ||
                                !selectedPayment
                            ) return;

                            onSubmit?.({
                                product: {
                                    id: product.id,
                                    name: product.name,
                                    image: product.image,
                                    price: selectedItem.price,
                                },

                                selectedItem: {
                                    id: selectedItem.id,
                                    title: selectedItem.title,
                                    price: selectedItem.price,
                                },
                                selectedPayment,
                                customerData,
                                promoCode,
                                total,
                            });
                        }}
                        disabled={!canSubmit}
                        className={`
                            w-full py-3 mt-2 rounded-lg text-sm font-semibold transition-all duration-200
                            ${canSubmit
                                ? "bg-purple-900 cursor-pointer text-white hover:opacity-90 active:scale-95"
                                : "bg-white/10 text-white/30 cursor-not-allowed"
                            }
                        `}
                    >
                        {canSubmit
                            ? "Bayar Sekarang"
                            : "Lengkapi Data"}
                    </button>
                </div>
            </div>

            {/* SECURITY */}
            <div className="flex items-center justify-center gap-2 text-white text-xs">
                <ShieldCheck size={14} />
                <span>
                    Transaksi aman & terenkripsi
                </span>

            </div>

        </div>
    );
};

export default OrderSummary;
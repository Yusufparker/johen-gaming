import { ShieldCheck } from "lucide-react";
import type { CheckoutState, PaymentMethod } from "../../types";
import { formatRupiah } from "../../utils/format";
import type { CustomerData } from "./customer-data-form";

interface Props {
    product: {
        id: string;
        name: string;
        image: string;
        price: number;
    };
    selectedPayment: PaymentMethod | null;
    customerData: CustomerData;
    promoCode?: string;
    onSubmit?: (data: CheckoutState) => void;
}

const AccountOrderSummary = ({
    product,
    selectedPayment,
    customerData,
    promoCode,
    onSubmit,
}: Props) => {

    const basePrice = product.price;
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
        selectedPayment &&
        Object.values(customerData).every(
            (v) => v.trim() !== ""
        );

    return (
        <div className="sticky top-24 flex flex-col gap-3">
            <div className="rounded-xl bg-purple-700/90 overflow-hidden">
                <div className="flex items-center gap-3 p-4 border-b bg-purple-900 border-white/5">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div>
                        <p className="text-xs text-white/50 mb-0.5">
                            Ringkasan Pesanan
                        </p>
                        <p className="text-sm font-semibold text-white line-clamp-1">
                            {product.name}
                        </p>
                    </div>

                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col gap-3">
                    <div className="flex justify-between gap-3">
                        <span className="text-xs text-white">
                            Harga
                        </span>
                        <span className="text-xs text-white font-medium text-right">
                            {formatRupiah(basePrice)}
                        </span>
                    </div>

                    {selectedPayment && (
                        <>
                            <div className="flex justify-between gap-3">
                                <span className="text-xs text-white">
                                    Pembayaran
                                </span>
                                <span className="text-xs text-white font-medium text-right">
                                    {selectedPayment.name}
                                </span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <span className="text-xs text-white">
                                    Biaya Admin
                                </span>
                                <span className="text-xs text-white font-medium text-right">
                                    {adminFee === 0
                                        ? "Gratis"
                                        : formatRupiah(adminFee)}
                                </span>
                            </div>
                        </>
                    )}

                    {promoCode && (
                        <div className="flex justify-between gap-3">
                            <span className="text-xs text-white">
                                Kode Promo
                            </span>
                            <span className="text-xs text-green-300 font-medium text-right">
                                {promoCode}
                            </span>

                        </div>
                    )}

                    {customerData.fullName && (
                        <div className="flex justify-between gap-3">
                            <span className="text-xs text-white">
                                Nama
                            </span>
                            <span className="text-xs text-white font-medium text-right">
                                {customerData.fullName}
                            </span>

                        </div>
                    )}

                    {customerData.email && (
                        <div className="flex justify-between gap-3">
                            <span className="text-xs text-white">
                                Email
                            </span>
                            <span className="text-xs text-white font-medium text-right">
                                {customerData.email}
                            </span>

                        </div>
                    )}

                    {customerData.whatsapp && (
                        <div className="flex justify-between gap-3">

                            <span className="text-xs text-white">
                                WhatsApp
                            </span>
                            <span className="text-xs text-white font-medium text-right">
                                {customerData.whatsapp}
                            </span>
                        </div>
                    )}

                </div>

                {/* FOOTER */}
                <div className="px-4 pb-4">
                    <div className="flex justify-between items-center py-3 border-t border-white/10">
                        <span className="text-sm font-semibold text-white">
                            Total
                        </span>

                        <span className="text-base font-bold text-white">
                            {formatRupiah(total)}
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            if (!selectedPayment) return;
                            onSubmit?.({
                            product,
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
                                ? "bg-orange-500 cursor-pointer text-white hover:bg-orange-600 active:scale-[0.98]"
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

export default AccountOrderSummary;
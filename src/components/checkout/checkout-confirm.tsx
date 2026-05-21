import {
    Navigate,
    useLocation,
    Link,
} from "react-router-dom";

import {
    CheckCircle2,
    ShieldCheck,
    Wallet,
    Ticket,

} from "lucide-react";

import { formatRupiah } from "../../utils/format";
import type { CheckoutState } from "../../types";

const CheckoutConfirm = () => {
    const location = useLocation();

    const state = location.state as CheckoutState | null;
    if (!state) {
        return <Navigate to="/" replace />;
    }
    const {
        product,
        selectedItem,
        selectedPayment,
        customerData,
        promoCode,
        total,
    } = state;

    const basePrice =
        selectedItem?.price || product.price;

    const adminFee = total - basePrice;

    return (
        <div className="mt-15 md:mt-22 min-h-screen py-20 bg-[#100021] px-4 pb-10">
            <div className="max-w-2xl mx-auto">
                <div className="border border-white/10 bg-purple-900/60 backdrop-blur-xl overflow-hidden shadow-xl">
                    {/* HEADER */}
                    <div className="border-b border-white/10 px-5 py-6 text-center">
                        <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-3">
                            <CheckCircle2
                                size={30}
                                className="text-green-400"
                            />
                        </div>
                        <h1 className="text-lg md:text-xl font-bold text-white">
                            Pesanan Berhasil Dibuat
                        </h1>
                        <p className="text-[11px] md:text-xs text-white/60 mt-1">
                            Silakan lanjutkan pembayaran untuk memproses pesanan.
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px]">
                        <div className="p-4 md:p-5 border-b lg:border-b-0 lg:border-r border-white/10">
                            <div className="flex gap-3 pb-4 border-b border-white/10">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-16 h-16 rounded-md object-cover shrink-0"
                                />
                                <div className="min-w-0">
                                    <p className="text-[10px] text-white/40 mb-1">
                                        Produk
                                    </p>
                                    <h2 className="text-sm font-semibold text-white line-clamp-2">
                                        {product.name}
                                    </h2>
                                    {selectedItem && (
                                        <p className="text-[11px] text-white/60 mt-1 line-clamp-1">
                                            {selectedItem.title}
                                        </p>
                                    )}
                                    <p className="text-orange-400 text-sm font-semibold mt-2">
                                        {formatRupiah(basePrice)}
                                    </p>
                                </div>
                            </div>

                            {/* CUSTOMER */}
                            <div className="py-4 border-b border-white/10">
                                <h3 className="text-sm font-semibold text-white mb-4">
                                    Informasi Pelanggan
                                </h3>
                                <div className="space-y-3">
                                    {Object.entries(customerData).map(([key, value]) => {
                                        if (!value) return null;
                                        const label = key
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, (str) =>
                                                str.toUpperCase()
                                            );
                                        return (
                                            <div
                                                key={key}
                                                className="flex gap-2.5 items-start"
                                            >
                                                <div className="min-w-0">
                                                    <p className="text-[10px] text-white/40">
                                                        {label}
                                                    </p>
                                                    <p className="text-xs text-white wrap-break-word">
                                                        {value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>

                            <div className="pt-4">
                                <h3 className="text-sm font-semibold text-white mb-4">
                                    Metode Pembayaran
                                </h3>
                                <div className="flex items-center gap-3 bg-black/20 border border-white/10 p-3">
                                    <div className="w-12 h-8 bg-white rounded p-1 flex items-center justify-center shrink-0">
                                        <img
                                            src={selectedPayment.logo}
                                            alt={selectedPayment.name}
                                            className="max-h-full object-contain"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs font-medium text-white">
                                            {selectedPayment.name}
                                        </p>
                                        <p className="text-[10px] text-white/40">
                                            Pembayaran otomatis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:p-5 bg-black/10">
                            <h3 className="text-sm font-semibold text-white mb-4">
                                Ringkasan
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs text-white/60">
                                        Harga
                                    </span>
                                    <span className="text-xs text-white text-right">
                                        {formatRupiah(basePrice)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs text-white/60">
                                        Biaya Admin
                                    </span>
                                    <span className="text-xs text-white text-right">
                                        {adminFee === 0
                                            ? "Gratis"
                                            : formatRupiah(adminFee)}
                                    </span>
                                </div>

                                {promoCode && (
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs text-white/60 flex items-center gap-1">
                                            <Ticket size={12} />
                                            Promo
                                        </span>
                                        <span className="text-xs text-green-300 text-right">
                                            {promoCode}
                                        </span>

                                    </div>
                                )}

                                <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-3">
                                    <span className="text-sm font-semibold text-white">
                                        Total
                                    </span>
                                    <span className="text-lg font-bold text-orange-400 text-right">
                                        {formatRupiah(total)}
                                    </span>
                                </div>
                            </div>

                            <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white text-sm font-semibold py-3 flex items-center justify-center gap-2 active:scale-[0.98]">
                                <Wallet size={16} />
                                Bayar Sekarang
                            </button>

                            <Link
                                to="/"
                                className="w-full mt-2 border border-white/10 hover:bg-white/5 transition-all duration-200 text-white text-sm font-medium py-3 flex items-center justify-center"
                            >
                                Kembali ke Beranda
                            </Link>

                            
                            <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 mt-5">
                                <ShieldCheck size={12} />
                                <span>
                                    Transaksi aman & terenkripsi
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutConfirm;
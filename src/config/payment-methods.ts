import type { PaymentMethod } from "../types";

export const paymentMethods: PaymentMethod[] = [
    // Transfer Bank
    { id: "bca",     name: "BCA",      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg",      category: "Transfer Bank", adminFee: 4000,  adminFeeType: "flat" },
    { id: "bni",     name: "BNI",      logo: "https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg",                    category: "Transfer Bank", adminFee: 4000,  adminFeeType: "flat" },
    { id: "bri",     name: "BRI",      logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg",          category: "Transfer Bank", adminFee: 4000,  adminFeeType: "flat" },
    { id: "mandiri", name: "Mandiri",  logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg", category: "Transfer Bank", adminFee: 4000,  adminFeeType: "flat" },

    // E-Wallet
    { id: "gopay",   name: "GoPay",    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg",             category: "E-Wallet", adminFee: 2,  adminFeeType: "percent" },
    { id: "ovo",     name: "OVO",      logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg",        category: "E-Wallet", adminFee: 2,  adminFeeType: "percent" },
    { id: "dana",    name: "DANA",     logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg",         category: "E-Wallet", adminFee: 2,  adminFeeType: "percent" },
    { id: "shopeepay", name: "ShopeePay", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg",             category: "E-Wallet", adminFee: 2,  adminFeeType: "percent" },

    // QRIS
    { id: "qris",    name: "QRIS",     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg",              category: "QRIS",    adminFee: 0,  adminFeeType: "flat" },
];
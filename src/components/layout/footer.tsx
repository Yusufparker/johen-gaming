const Footer = () => {
    return (
        <footer className="border-t border-white/10 px-7 pt-10 pb-7 bg-[#25043e]">
            <div className="mx-auto max-w-7xl">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

                    <div>
                        <a href="/" className="flex items-center gap-3 mb-3">
                            <img
                                src="/icon.webp"
                                alt="Logo"
                                className="h-12 w-12 object-contain"
                            />
                            <div>
                                <h2 className="text-sm font-semibold text-white">Johen Gaming</h2>
                                <p className="text-xs text-white/50">Topup & Jual Beli Akun</p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-3">
                            Layanan
                        </p>
                        <ul className="flex flex-col gap-2">
                            {["Top Up Game", "Voucher", "Jual Beli Akun", "Promo"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-3">
                            Bantuan
                        </p>
                        <ul className="flex flex-col gap-2">
                            {["Cara Pembelian", "FAQ", "Hubungi Kami", "Kebijakan Privasi"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-5">
                    <p className="text-[12px] text-white/35">
                        © {new Date().getFullYear()} Johen Gaming. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
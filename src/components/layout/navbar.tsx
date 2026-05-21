import { useState } from "react";
import {
    Gem,
    Menu,
    Search,
    ShoppingBag,
    X,
} from "lucide-react";
import { useSearchProducts } from "../../hooks/useProduct";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [mobileSearch, setMobileSearch] = useState<boolean>(false);

    const [search, setSearch] = useState<string>("");
    const [debouncedSearch] = useDebounce<string>(search, 500);
    const {data, isLoading} = useSearchProducts(debouncedSearch);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#25043e]/90 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between gap-3">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/icon.webp"
                        alt="Logo"
                        className="h-9 w-9 object-contain"
                    />
                    <div className="hidden sm:block">
                    <h1 className="text-sm font-semibold text-white">
                        Johen Gaming
                    </h1>

                    <p className="text-xs text-white/50">
                        Topup & Jual Beli Akun
                    </p>
                    </div>
                </Link>

                {/* SEARCH DESKTOP */}
                <div className="hidden flex-1 px-2 md:block">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari Game atau Voucher"
                            className="h-7 w-full rounded-2xl border border-white/10 bg-white/10 pl-12 pr-4 py-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-orange-400 focus:bg-white/15"
                        />

                        {/* SEARCH RESULT */}
                        {search && (
                            <div className="absolute top-full mt-3 max-h-105 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#1f1f23] p-2 shadow-2xl">
                                
                                {isLoading ? (
                                    <div className="p-4 text-sm text-white/60">
                                        Loading...
                                    </div>
                                ) : data?.data.length ? (
                                    <div className="space-y-1">
                                        {data.data.map((product) => (
                                            <Link
                                                key={product.id}
                                                to={`/${
                                                    product.category === "top-up" || product.category === "voucher"
                                                        ? "top-up/" + product.slug
                                                        : "jb-akun?game=" + product.game
                                                }`
                                            }
                                                className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/5"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-14 w-14 rounded-xl object-cover"
                                                />

                                                <div className="min-w-0">
                                                    <h3 className="truncate text-sm font-semibold text-white">
                                                        {product.name}
                                                    </h3>

                                                    <p className="mt-1 text-xs capitalize text-orange-300">
                                                        {product.category}
                                                    </p>

                                                    <p className="mt-1 line-clamp-1 text-xs text-white/50">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-4 text-sm text-white/60">
                                        Product tidak ditemukan
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                    onClick={() => setMobileSearch(!mobileSearch)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
                    >
                    {mobileSearch ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Search className="h-5 w-5" />
                    )}
                    </button>

                    {/* MENU MOBILE */}
                    <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
                    >
                    {mobileMenu ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                    </button>
                </div>
                </div>

                {/* MOBILE SEARCH */}
                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        mobileSearch
                            ? "max-h-150 pb-4 opacity-100"
                            : "max-h-0 opacity-0"
                    } md:hidden`}
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-5 h-5 w-5 -translate-y-1/2 text-white/40" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari Game atau Voucher"
                            className="h-11 w-full rounded-2xl border-2 border-orange-400 bg-white/10 pl-12 pr-4 text-sm text-white placeholder:text-white/40 outline-none"
                        />

                        {/* MOBILE RESULT */}
                        {search && (
                            <div className="mt-3 max-h-80 overflow-y-auto rounded-2xl border border-white/10 bg-[#1f1f23] p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                
                                {isLoading ? (
                                    <div className="p-4 text-sm text-white/60">
                                        Loading...
                                    </div>
                                ) : data?.data.length ? (
                                    <div className="space-y-1">
                                        {data.data.map((product) => (
                                            <Link
                                                key={product.id}
                                                to={`/${
                                                    product.category === "top-up" || product.category === "voucher"
                                                        ? "top-up/" + product.slug
                                                        : "jb-akun?game=" + product.game
                                                }`}
                                                className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/5"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-14 w-14 rounded-xl object-cover"
                                                />

                                                <div className="min-w-0">
                                                    <h3 className="truncate text-sm font-semibold text-white">
                                                        {product.name}
                                                    </h3>

                                                    <p className="mt-1 text-xs capitalize text-orange-300">
                                                        {product.category}
                                                    </p>

                                                    <p className="mt-1 line-clamp-1 text-xs text-white/50">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-4 text-sm text-white/60">
                                        Product tidak ditemukan
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        mobileMenu
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                    }`}
                >
                <nav className="flex flex-col gap-1 border-t border-white/10 py-3 md:h-10 md:flex-row md:items-center md:gap-8 md:border-t">
                    <Link
                        to="/"
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] font-medium text-white transition hover:bg-white/10 md:px-0 md:hover:bg-transparent md:hover:text-orange-300"
                    >
                        <Gem className="h-4 w-4" />
                        Topup
                    </Link>

                    <Link
                        to="/jb-akun"
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] font-medium text-white transition hover:bg-white/10 md:px-0 md:hover:bg-transparent md:hover:text-orange-300"
                    >
                        <ShoppingBag className="h-4 w-4" />
                            Jual Beli Akun
                    </Link>
                </nav>
                </div>
            </div>
        </nav>
    );
}
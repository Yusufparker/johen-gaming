import { SlidersHorizontal, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SortDropdown from "../components/jb-akun/sorting-dropdown";
import Filter, { type Filters } from "../components/jb-akun/filter";
import { useSearchAccounts } from "../hooks/useJBAccount";
import AccountCard from "../components/jb-akun/account-card";

const JBAkun = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [sort, setSort] = useState<string>("price_asc");
    const [searchInput, setSearchInput] = useState<string>(searchParams.get("search") ?? "");
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchParams(prev => {
                const next = new URLSearchParams(prev);
                if (searchInput) next.set("search", searchInput);
                else next.delete("search");
                return next;
            }, { replace: true });
            setPage(1); 
        }, 400);
        return () => clearTimeout(timeout);
    }, [searchInput]);

    const filters: Filters = {
        minPrice: searchParams.get("minPrice") ?? "",
        maxPrice: searchParams.get("maxPrice") ?? "",
        games: searchParams.getAll("game"),
    };

    const updateFilters = (newFilters: Filters) => {
        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            if (newFilters.minPrice) next.set("minPrice", newFilters.minPrice);
            else next.delete("minPrice");
            if (newFilters.maxPrice) next.set("maxPrice", newFilters.maxPrice);
            else next.delete("maxPrice");
            next.delete("game");
            newFilters.games.forEach(g => next.append("game", g));
            return next;
        }, { replace: true });
        setPage(1); 
    };

    const { data, isLoading } = useSearchAccounts({
        search: searchParams.get("search") || undefined,
        sort,
        minPrice: filters.minPrice || undefined,
        maxPrice: filters.maxPrice || undefined,
        games: filters.games.length ? filters.games : undefined,
        page,
    });

    const pagination = data?.pagination;

    return (
        <div className="mt-15 md:mt-25 bg-[#100021] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">

                    <aside className="hidden lg:block h-fit sticky top-24">
                        <Filter filters={filters} setFilters={updateFilters} />
                    </aside>

                    <div>
                        {/* Topbar */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Cari akun"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className="w-full h-8 bg-white/90 rounded-lg pl-3 pr-10 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                                />
                            </div>

                            <SortDropdown
                                className="w-fit shrink-0"
                                selected={sort}
                                onChange={(val) => { setSort(val); setPage(1); }}
                            />

                            <button
                                onClick={() => setOpenFilter(true)}
                                className="lg:hidden h-8 w-8 rounded-lg bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition"
                            >
                                <SlidersHorizontal size={14} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-5">
                            {isLoading ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="h-28 rounded-xl bg-white/5 animate-pulse" />
                                    ))}
                                </div>
                            ) : data?.data.length === 0 ? (
                                <div className="text-center py-20 text-white/40 text-sm">
                                    Tidak ada akun ditemukan
                                </div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {data?.data.map((account) => (
                                            <AccountCard key={account.id} account={account} />
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    {pagination && pagination.totalPages > 1 && (
                                        <div className="flex items-center justify-center gap-2 mt-20">
                                            <button
                                                onClick={() => setPage(p => p - 1)}
                                                disabled={!pagination.hasPrevPage}
                                                className="h-8 px-3 rounded-lg text-xs text-white bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                            >
                                                Prev
                                            </button>

                                            {Array.from({ length: pagination.totalPages }).map((_, i) => {
                                                const p = i + 1;
                                                return (
                                                    <button
                                                        key={p}
                                                        onClick={() => setPage(p)}
                                                        className={`h-8 w-8 rounded-lg text-xs transition ${page === p ? "bg-orange-500 text-white" : "bg-white/5 text-white hover:bg-white/10"}`}
                                                    >
                                                        {p}
                                                    </button>
                                                );
                                            })}

                                            <button
                                                onClick={() => setPage(p => p + 1)}
                                                disabled={!pagination.hasNextPage}
                                                className="h-8 px-3 rounded-lg text-xs text-white bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {openFilter && (
                <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
                    <div className="absolute left-0 top-0 h-full w-full bg-[#100021] p-4 overflow-y-auto">
                        <div className="flex items-center justify-between mb-5">
                            <button onClick={() => setOpenFilter(false)} className="text-white">
                                <X size={18} />
                            </button>
                        </div>
                        <Filter filters={filters} setFilters={updateFilters} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default JBAkun;
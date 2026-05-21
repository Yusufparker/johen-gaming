import { useGetGames } from "../../hooks/useGame";

export type Filters = {
    minPrice: string;
    maxPrice: string;
    games: string[];
};

type Props = {
    filters: Filters;
    setFilters: (filters: Filters) => void;
};

const Filter = ({ filters, setFilters }: Props) => {

    const { data, isLoading } = useGetGames();

    const toggleGame = (value: string) => {
        setFilters({
            ...filters,
            games: filters.games.includes(value)
                ? filters.games.filter((g) => g !== value)
                : [...filters.games, value],
        });
    };

    return (
        <div className="text-white">
            <div className="bg-purple-900/90 rounded p-5">
                <div className="pb-4 border-b border-purple-500/50">
                    <h5 className="font-semibold text-sm">
                        Filter
                    </h5>
                </div>
                <div className="mt-5 space-y-6">

                    {/* Harga */}
                    <div>
                        <h6 className="text-xs font-medium text-zinc-300 mb-3">
                            Harga
                        </h6>
                        <div className="space-y-2">
                            <input
                                type="number"
                                placeholder="Minimum"
                                value={filters.minPrice}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        minPrice: e.target.value,
                                    })
                                }
                                className="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                            />
                            <input
                                type="number"
                                placeholder="Maximum"
                                value={filters.maxPrice}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        maxPrice: e.target.value,
                                    })
                                }
                                className="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                            />
                        </div>
                    </div>

                    {/* Game category */}
                    <div>
                        <h6 className="text-xs font-medium text-zinc-300 mb-3">
                            Game
                        </h6>
                        <div className="space-y-2">
                            {isLoading ? (
                                <div className="animate-pulse space-y-2">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-4 bg-[#2b2740] rounded w-full"
                                        />
                                    ))}
                                </div>
                            ) : (
                                data?.data?.map((game) => (
                                    <label
                                        key={game.id}
                                        className="flex items-center gap-3 text-sm text-zinc-300 cursor-pointer hover:text-white transition"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={filters.games.includes(game.slug)}
                                            onChange={() =>
                                                toggleGame(game.slug)
                                            }
                                            className="w-4 h-4 rounded accent-orange-500 bg-[#2b2740] border border-purple-500/20"
                                        />

                                        <div className="flex items-center gap-2">
                                            <img
                                                src={game.icon}
                                                alt={game.name}
                                                className="w-4 h-4 rounded object-cover"
                                            />
                                            <span>
                                                {game.name}
                                            </span>
                                        </div>
                                    </label>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
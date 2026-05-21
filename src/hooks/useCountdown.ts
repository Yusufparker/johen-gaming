import { useEffect, useState } from "react";

function useCountdown(expiresAt: string) {
    const getTimeLeft = () => {
        const diff = new Date(expiresAt).getTime() - Date.now();
        if (diff <= 0) return "Berakhir";

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor((diff / 1000 / 60 / 60) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        if (d > 0) {
            return `${d}h ${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
        }

        return [h, m, s]
            .map((v) => String(v).padStart(2, "0"))
            .join(":");
    };

    const [timeLeft, setTimeLeft] = useState<string>(getTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [expiresAt]);

    return timeLeft;
}

export default useCountdown;
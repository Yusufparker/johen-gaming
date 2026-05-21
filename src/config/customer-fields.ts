import type { CustomerField } from "../types";

export const customerFieldsConfig: Record<string, CustomerField[]> = {
    "mobile-legends": [
        { key: "userId",   label: "User ID",   placeholder: "123456789",  colSpan: "half", inputType: "number" },
        { key: "serverId", label: "Server ID",  placeholder: "1234",      colSpan: "half", inputType: "number" },
    ],
    "free-fire": [
        { key: "userId", label: "User ID", placeholder: "123456789", colSpan: "full", inputType: "number" },
    ],
    "pubg-mobile": [
        { key: "userId", label: "Player ID", placeholder: "123456789", colSpan: "full", inputType: "number" },
    ],
    "valorant": [
        { key: "riotId", label: "Riot ID", placeholder: "Username#TAG", colSpan: "full", inputType: "text" },
    ],
    "roblox": [
        { key: "username", label: "Username Roblox", placeholder: "YourUsername", colSpan: "full", inputType: "text" },
    ],
    "honor-of-kings": [
        { key: "userId", label: "User ID",  placeholder: "123456789", colSpan: "half", inputType: "number" },
        { key: "zoneId", label: "Zone ID",  placeholder: "1234",      colSpan: "half", inputType: "number" },
    ],
    "genshin-impact": [
        { key: "userId",   label: "UID",    placeholder: "123456789", colSpan: "half", inputType: "number" },
        { key: "serverId", label: "Server", colSpan: "half",          inputType: "select", options: [
            { label: "Asia",      value: "asia" },
            { label: "America",   value: "america" },
            { label: "Europe",    value: "europe" },
            { label: "TW/HK/MO", value: "twhkmo" },
        ]},
    ],
    "default": [],
};
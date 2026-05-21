import { useState } from "react";
import { customerFieldsConfig } from "../../config/customer-fields";
import type { CustomerField } from "../../types";

interface CustomerInfoProps {
    game: string;
    onChange?: (data: Record<string, string>) => void;
}

const CustomerInfo = ({ game, onChange }: CustomerInfoProps) => {
    const fields = customerFieldsConfig[game] ?? customerFieldsConfig["default"];
    const [data, setData] = useState<Record<string, string>>(
        Object.fromEntries(fields.map((f) => [f.key, ""]))
    );
    const [whatsapp, setWhatsapp] = useState("");

    const handleChange = (key: string, value: string, inputType?: string) => {
        if (inputType === "number" && !/^\d*$/.test(value)) return;
        const updated = { ...data, [key]: value };
        setData(updated);
        onChange?.({ ...updated, whatsapp });
    };

    const handleWhatsapp = (value: string) => {
        if (!/^\d*$/.test(value)) return; 
        setWhatsapp(value);
        onChange?.({ ...data, whatsapp: value });
    };

    const inputClass ="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all";
    const selectClass ="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all";

    const renderField = (field: CustomerField) => {
        if (field.inputType === "select") {
            return (
                <select
                    key={field.key}
                    value={data[field.key] ?? ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className={selectClass}
                >
                    <option value="" disabled>Pilih {field.label}</option>
                    {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <input
                key={field.key}
                type="text"
                inputMode={field.inputType === "number" ? "numeric" : "text"}
                placeholder={field.placeholder}
                value={data[field.key] ?? ""}
                onChange={(e) => handleChange(field.key, e.target.value, field.inputType)}
                className={inputClass}
            />
        );
    };

    const halfFields = fields.filter((f) => f.colSpan !== "full");
    const fullFields = fields.filter((f) => f.colSpan === "full");

    return (
        <div className="flex flex-col gap-4">
            {halfFields.length > 0 && (
                <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                        {halfFields.map((f) => f.label).join(" & ")}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {halfFields.map((field) => renderField(field))}
                    </div>
                </div>
            )}

            {fullFields.map((field) => (
                <div key={field.key}>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                        {field.label}
                    </label>
                    {renderField(field)}
                </div>
            ))}

            <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                    Nomor WhatsApp
                </label>
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="08xxxxxxxxx"
                    value={whatsapp}
                    onChange={(e) => handleWhatsapp(e.target.value)}
                    className={inputClass}
                />
            </div>
        </div>
    );
};

export default CustomerInfo;
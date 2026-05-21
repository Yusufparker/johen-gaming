export type CustomerData = {
    fullName: string;
    email: string;
    whatsapp: string;
};

type Props = {
    value: CustomerData;
    onChange: (value: CustomerData) => void;
};

const CustomerDataForm = ({
    value,
    onChange,
}: Props) => {

    return (
        <div className="flex flex-col gap-4">

            <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                    Nama Lengkap
                </label>

                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={value.fullName}
                    onChange={(e) =>
                        onChange({
                            ...value,
                            fullName: e.target.value,
                        })
                    }
                    className="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                    Email
                </label>

                <input
                    type="email"
                    placeholder="Email"
                    value={value.email}
                    onChange={(e) =>
                        onChange({
                            ...value,
                            email: e.target.value,
                        })
                    }
                    className="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                    Nomor WhatsApp
                </label>

                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="08xxxxxxxxx"
                    value={value.whatsapp}
                    onChange={(e) =>
                        onChange({
                            ...value,
                            whatsapp: e.target.value.replace(/\D/g, ""),
                        })
                    }
                    className="w-full bg-white/90 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-xs outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                />
            </div>

        </div>
    );
};

export default CustomerDataForm;
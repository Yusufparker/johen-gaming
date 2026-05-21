import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="mt-15 bg-[#100021] min-h-screen flex items-center justify-center px-15">
            <div className="max-w-md w-full text-center">
                <h1 className="text-4xl font-black text-white mb-3">
                    404
                </h1>
                <h2 className="text-xl font-semibold text-white mb-3">
                    Halaman Tidak Ditemukan
                </h2>

                <p className="text-xs text-white/60 leading-relaxed mb-8">
                    Halaman yang kamu cari mungkin sudah dihapus,
                    dipindahkan, atau URL yang dimasukkan salah.
                </p>

                <Link
                    to="/"
                    className="w-50 text-sm inline-flex items-center justify-center  bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-2"
                >
                    Kembali ke Beranda
                </Link>

            </div>
        </div>
    );
};

export default NotFound;
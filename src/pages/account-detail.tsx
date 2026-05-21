import {Link, useParams } from "react-router-dom"
import { useGetAccountByID } from "../hooks/useJBAccount"
import { formatRupiah } from "../utils/format"
import { Headset, ShieldCheck, Zap } from "lucide-react"
import RelatedAccountProducts from "../components/jb-akun/related-account-product"


const AccountDetail = () => {
    const { id } = useParams<{id : string}>()
    const {data : product} = useGetAccountByID(id!)

    if(!product) {
        return (
            <div className="mt-15 md:mt-25 bg-[#100021] min-h-screen flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Produk tidak ditemukan</h2>
            </div>
        )
    }

    return (
        <div className="mt-15 md:mt-25 bg-[#100021] min-h-screen ">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-white">{product?.name}</h2>
                        <div className="h-80 overflow-hidden my-5">
                            <img
                                src={product?.image}
                                alt=""
                                className="w-full h-full object-cover object-center rounded-lg"
                            />
                        </div>
                        <div className="bg-purple-800/90 p-4 rounded-lg">
                            <div>
                                <h2 className="text-white font-semibold text-sm mb-2">
                                    Deskripsi
                                </h2>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {product?.description}
                                </p>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-white font-semibold text-sm mb-2">
                                    Spesifikasi
                                </h2>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {product?.specs}
                                </p>
                            </div>
                        </div>

                    
                    </div>
                    <div className="lg:sticky lg:top-24 py-4 px-6 text-white/70 bg-purple-800/90 rounded-lg">
                        <div className="py-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white">
                                {formatRupiah(product?.price || 0)}
                            </h2>
                        </div>

                        <div className="divide-y divide-white/5">
                            <div className="flex items-center justify-between py-5">
                                <div className="flex items-center gap-2 text-sm text-white/70">
                                    <span>Waktu pengiriman</span>
                                    <span>ⓘ</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-cyan-400 font-semibold">
                                    <Zap size={14} />
                                    <span className="text-white ">Instan</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-5">
                                <div className="flex items-center gap-2 text-sm text-white/70">
                                    <span>Garansi</span>
                                    <span>ⓘ</span>
                                </div>
                                <span className="text-white text-sm ">5 Hari</span>
                            </div>

                        </div>
                        <div className="mt-5">
                            <Link to={`/jb-akun/${product.id}/checkout`} className="w-full block text-center rounded-lg text-white cursor-pointer bg-orange-500 hover:bg-orange-600 transition-all duration-300  font-bold text-sm py-4">
                                Beli sekarang
                            </Link>
                        </div>

                        <div className="py-6 space-y-7 mt-4 text-sm">
                            <div className="flex items-center gap-4">
                                <div className="text-blue-300 text-xl">
                                    <ShieldCheck size={18} />
                                </div>
                                <p className="text-white/80">
                                    Jaminan Uang Kembali
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-blue-300">
                                    <Zap size={18} />
                                </div>
                                <p className="text-white/80">
                                    Opsi Checkout Cepat
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-blue-300">
                                    <Headset size={18} />
                                </div>
                                <p className="text-white/80">
                                    Dukungan Langsung 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    id && (
                        <div>
                            <RelatedAccountProducts accountId={id} />
                        </div>
                    )
                }
            </div>
        </div>
    )
    }

export default AccountDetail

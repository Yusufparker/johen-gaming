import { Link } from "react-router-dom"
import type { AccountProduct } from "../../types"
import { formatRupiah } from "../../utils/format"


type Props = {
    account : AccountProduct
}

const AccountCard = ({account} : Props ) => {
    return (
        <Link
            to={`/jb-akun/${account.id}`}
            className="bg-purple-900/90 shadow-2xl group p-4 rounded-sm overflow-hidden hover:bg-purple-800 transition-all duration-300"
        >
            <div className="flex gap-3 relative">
                <div className="flex-1 z-2">
                    <h4 className="text-white/80  text-sm font-bold">{account.name}</h4>
                    <p className="text-white/80 text-xs ">{account.specs}</p>

                    <p className="mt-20 text-xl font-bold  text-white">{formatRupiah(account.price)}</p>
                </div>
                <img src={account.image} alt={account.game} className="w-16 h-16 object-cover z-2" />
                <div className="absolute w-40 h-40 bg-purple-800 rounded-full top-25 -right-10 group-hover:-translate-x-200 group-hover:-translate-y-100 group-hover:bg-purple-900/90 transition-all duration-700"></div>
            </div>
        </Link>
    )
}

export default AccountCard

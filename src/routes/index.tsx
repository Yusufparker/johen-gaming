import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/main-layout";
import Home from "../pages/home";
import JBAkun from "../pages/jb-akun";
import TopUp from "../pages/topup";
import AccountDetail from "../pages/account-detail";
import AccountCheckout from "../pages/account-checkout";
import NotFound from "../components/not-found";
import CheckoutConfirm from "../components/checkout/checkout-confirm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index : true,
                element : <Home/>
            },
            {
                path : "/top-up/:slug",
                element : <TopUp/>
            },
            {
                path : "/jb-akun",
                element : <JBAkun/>
            },
            {
                path : "/jb-akun/:id",
                element : <AccountDetail/>
            },
            {
                path : "/jb-akun/:id/checkout",
                element : <AccountCheckout/>
            },
            {
                path : "/checkout/confirm",
                element : <CheckoutConfirm/>

            },
            {
                path: "*",
                element: <NotFound />
            }

        ]
    }
])
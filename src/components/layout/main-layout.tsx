import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <main className=" mx-auto">
                <Outlet />
            </main>
            {/* footer */}
            <Footer/>

        </div>
    );
}

import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Navigation />
            <Outlet />
        </div>
    );
}

import { Link } from "react-router-dom";

export default function BottomNavigation(props: { active: string }) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center p-3 shadow-lg">

            <Link to="/diary" className={`flex flex-col items-center ${props.active === "diary" ? "bg-[#E0F2F7]" : "bg-white"} p-2 rounded-lg w-[100px]`}>
            <div className="text-2xl">📖</div>
            <span className="text-xs mt-1">Дневник</span>
            </Link>

            <Link to="/" className={`flex flex-col items-center ${props.active === "home" ? "bg-[#E0F2F7]" : "bg-white"} p-2 rounded-lg w-[100px]`}> {/* Active state */}
            <div className="text-2xl text-white">🏠</div>
            <span className="text-xs mt-1">Домой</span> 
            </Link>

            <Link to="/schedule" className={`flex flex-col items-center ${props.active === "schedule" ? "bg-[#E0F2F7]" : "bg-white"} p-2 rounded-lg w-[100px]`}>
            <div className="text-2xl">🗓️</div>
            <span className="text-xs mt-1">Расписание</span>
            </Link>

        </nav>
    );
}
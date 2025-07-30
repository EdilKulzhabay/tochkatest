import { Link } from "react-router-dom";

export default function BottomNavigation(props: { active: string }) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center p-3 shadow-lg">

            <Link to="/diary" className={`flex flex-col items-center ${props.active === "diary" ? "bg-gray-100" : "bg-white"} p-2 rounded-lg w-[100px]`}>
                <div><img src={'/icons/diary.png'} alt="diary" className="w-10 h-10" /></div>
                <span className="text-xs mt-1">Дневник ОБД</span>
            </Link>

            <Link to="/" className={`flex flex-col items-center ${props.active === "home" ? "bg-gray-100" : "bg-white"} p-2 rounded-lg w-[100px]`}> {/* Active state */}
                <div><img src={'/icons/home.png'} alt="home" className="w-10 h-10" /></div>
                <span className="text-xs mt-1">Домой</span> 
            </Link>

            <Link to="/schedule" className={`flex flex-col items-center ${props.active === "schedule" ? "bg-gray-100" : "bg-white"} p-2 rounded-lg w-[100px]`}>
                <div><img src={'/icons/schedule.png'} alt="schedule" className="w-10 h-10" /></div>
                <span className="text-xs mt-1">Расписание</span>
            </Link>

        </nav>
    );
}
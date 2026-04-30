import { Link } from "react-router";


function Header() {
    return (
        <div className="w-full mx-auto py-2">
            <div className="flex justify-between px-1 items-center border-b border-gray-300 pb-2">
                <div className="flex w-[50%] md:w-[75%] items-center h-auto">
                    <div className="text-3xl font-bold mr-3">Trayly</div>
                    <nav className="hidden hd:flex justify-around items-center px-2 font-semibold w-[60%] h-[100%]">
                        <Link to="/">Home</Link>
                        <Link to="/info">Surgeries</Link>
                        <Link to="/study">Study</Link>
                        <Link to="/notes">Notes</Link>
                    </nav>
                </div>
                <div className="w-[50%] hd:w-[25%] flex justify-end px-1">
                    <button className="border border-gray-300 rounded px-4 py-1 mr-1">Login</button>
                    <button className="border border-gray-300 rounded px-4 py-1">Sign up</button>
                </div>
            </div>
            <nav className="flex justify-between px-4 hd:px-[15%] py-2 font-semibold border-b border-gray-300 hd:hidden">
                <Link to="/">Home</Link>
                <Link to="/info">Surgeries</Link>
                <Link to="/study">Study</Link>
                <Link to="/notes">Notes</Link>
            </nav>
        </div>
    )
}

export default Header;
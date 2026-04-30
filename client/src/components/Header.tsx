import { Link } from "react-router";


function Header() {
    return (
        <div className="w-[100%] pt-2 border-b-1">
            <div className="flex justify-between px-2 items-center border-b-1 pb-2">
                <div className="text-3xl font-bold">Trayly</div>
                <div className="">
                    <button className="mr-3 border-1 px-4 py-2">Login</button>
                    <button className="border-1 px-4 py-2">Sign up</button>
                </div>
            </div>
            <nav className="flex justify-between md:justify-around px-4 md:px-[15%] py-2 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/info">Surgeries</Link>
                <Link to="/study">Study</Link>
                <Link to="/notes">Notes</Link>
            </nav>
        </div>
    )
}

export default Header;
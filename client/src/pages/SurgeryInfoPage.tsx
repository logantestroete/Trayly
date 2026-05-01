import Header from "../components/Header";
import SearchIcon from "../assets/search_icon.svg"
import SurgeryInfoHero from "../components/SurgeryInfo/SurgeryInfoHero";
import SurgeryInfoContent from "../components/SurgeryInfo/SurgeryInfoContent";

function SurgeryInfoPage() {
    return (
        <div className="max-w-[1280px] flex flex-col justify-center mx-auto">
            <Header />
            <div className="relative w-[clamp(80%,85vw,90%)] mx-auto">
                <div className="border border-gray-300 rounded flex items-center px-1 mb-3">
                    <img src={SearchIcon} alt="" />
                    <input type="text" id="surgLookup" name="surgLookup"
                        className="w-[95%] p-2 focus:outline-0 h-[2.5rem]"
                        placeholder="Search for a procedure..." />
                </div>
                <div className="absolute left-0 top-10 w-full mt-1 bg-gray-100 shadow z-10 p-[clamp(0.175rem,4vw,0.5rem)]">
                    
                </div>
            </div>
            <SurgeryInfoHero />
            <SurgeryInfoContent />
        </div>
    )
}

export default SurgeryInfoPage;
import Header from "../components/Header";
import SearchIcon from "../assets/search_icon.svg"
import SurgeryInfoHero from "../components/SurgeryInfo/SurgeryInfoHero";
import SurgeryInfoContent from "../components/SurgeryInfo/SurgeryInfoContent";

function SurgeryInfoPage() {
    return (
        <div className="max-w-[1280px] flex flex-col justify-center mx-auto relative">
            <Header />
            <div className="w-[90%] hd:w-[60%] border border-gray-300 rounded mx-auto flex items-center px-1 mb-3">
                <img src={SearchIcon} alt=""/>
                <input type="text" id="surgLookup" name="surgLookup"
                className="w-[95%] p-2 focus:outline-0 h-[2.5rem]"
                placeholder="Search for a procedure..." />
            </div>
            <div className="w-[90%] hd:w-[60%] px-[3%] bg-gray-100 rounded z-10 absolute top-[145px] hd:top-[104px] left-[5%] hd:left-[20%]">
                
            </div>
            <SurgeryInfoHero />
            <SurgeryInfoContent />
        </div>
    )
}

export default SurgeryInfoPage;
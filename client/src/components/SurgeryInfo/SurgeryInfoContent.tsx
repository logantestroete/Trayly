import { SurgeryInfoNavProvider } from "../../context/SurgeryInfoTabNavigation";
import SurgeryInfoContentBody from "./SurgeryInfoContentBody";
import SurgeryInfoContentTab from "./SurgeryInfoContentTab";


function SurgeryInfoContent() {
    return (
        <SurgeryInfoNavProvider>
            <div className="overflow-x-scroll scroll-smooth no-scrollbar whitespace-nowrap border-y lg:border lg:rounded border-gray-300 mt-2 flex justify-around">
                <SurgeryInfoContentTab name="Overview"/>
                <SurgeryInfoContentTab name="Positioning"/>
                <SurgeryInfoContentTab name="Prep"/>
                <SurgeryInfoContentTab name="Draping"/>
                <SurgeryInfoContentTab name="Steps"/>
                <SurgeryInfoContentTab name="Complications"/>
            </div>
            <div className="h-[1000px] overflow-y-scroll scroll-smooth no-scrollbar">
                <SurgeryInfoContentBody />
            </div>
        </SurgeryInfoNavProvider>
    );
}

export default SurgeryInfoContent;
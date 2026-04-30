import SurgeryInfoHeroOverview from "./SurgeryInfoHeroOverview";
import SurgeryInfoHeroStepsTools from "./SurgeryInfoHeroStepsTools";
import { useState } from "react";
function SurgeryInfoHero() {
    const [tools, setTools] = useState<string[]>(['Scalpel', 'Forceps', 'Retractor']);
    return (
        <div className="w-[95%] mx-auto ">
            <div className="flex flex-col lg:flex-row">
                <SurgeryInfoHeroOverview />
                <SurgeryInfoHeroStepsTools stepCount="12" topTools={tools}/>
            </div>
            <img src="" alt="" className="w-full lg:w-[80%] h-[200px] lg:h-[400px] mx-auto bg-gray-500 rounded"/>
        </div>
    );
}

export default SurgeryInfoHero;
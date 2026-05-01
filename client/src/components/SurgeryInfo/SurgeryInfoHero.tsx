import SurgeryInfoHeroOverview from "./SurgeryInfoHeroOverview";
import SurgeryInfoHeroStepsTools from "./SurgeryInfoHeroStepsTools";
import { useState } from "react";
function SurgeryInfoHero() {
    const [tools, setTools] = useState<string[]>(['Scalpel', 'Forceps', 'Retractor']);
    return (
        <div className="w-[95%] mx-auto">
            <div className="grid grid-cols-[2fr] lg:grid-cols-[1fr_1fr] mb-2">
                <SurgeryInfoHeroOverview />
                <SurgeryInfoHeroStepsTools stepCount="12" topTools={tools}/>
            </div>
            <svg href="" className="w-full lg:w-[80%] h-[150px] lg:h-[300px] mx-auto bg-gray-500 rounded"/>
        </div>
    );
}

export default SurgeryInfoHero;
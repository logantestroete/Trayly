import CategoryIcon from "../../assets/category_icon.svg"
import DifficultyIcon from "../../assets/difficulty_icon.svg"
import DurationIcon from "../../assets/duration_icon.svg"
import SurgeryInfoHeroOverviewPill from "./SurgeryInfoHeroOverviewPill"

function SurgeryInfoHeroOverview() {
    return (
        <div className="border border-gray-300 rounded px-5 py-3 lg:px-3 lg:pt-8 w-full lg:w-[50%] lg:h-[350px]">
            <div className="">
                <p className="font-bold text-3xl mb-2">Appendectomy</p>
                <p className="text-gray-700 w-full lg:w-[70%]">Surgical removal of the appendix, typically performed for the appendicitis</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-around lg:mt-20">
                <SurgeryInfoHeroOverviewPill iconUrl={CategoryIcon} name="Category" value="General Surgery"/>
                <SurgeryInfoHeroOverviewPill iconUrl={DifficultyIcon} name="Difficulty" value="Intermediate"/>
                <SurgeryInfoHeroOverviewPill iconUrl={DurationIcon} name="Duration" value="60-90 min"/>
            </div>
        </div>
    )
}

export default SurgeryInfoHeroOverview;
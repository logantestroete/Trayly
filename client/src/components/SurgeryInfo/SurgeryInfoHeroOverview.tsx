import CategoryIcon from "../../assets/category_icon.svg?react"
import DifficultyIcon from "../../assets/difficulty_icon.svg?react"
import DurationIcon from "../../assets/duration_icon.svg?react"
import SurgeryInfoHeroOverviewPill from "./SurgeryInfoHeroOverviewPill"
import { textStyles } from "../../utilities/responsiveClasses"
import { Card } from "../Card"

function SurgeryInfoHeroOverview() {
    return (
        <Card className="mb-2 lg:mb-0">
            <div className="">
                <p className={textStyles.pageTitle}>Appendectomy</p>
                <p className={textStyles.body}>Surgical removal of the appendix, typically performed for the appendicitis</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-around lg:mt-20">
                <SurgeryInfoHeroOverviewPill Icon={CategoryIcon} name="Category" value="General Surgery"/>
                <SurgeryInfoHeroOverviewPill Icon={DifficultyIcon} name="Difficulty" value="Intermediate"/>
                <SurgeryInfoHeroOverviewPill Icon={DurationIcon} name="Duration" value="60-90 min"/>
            </div>
        </Card>
    )
}

export default SurgeryInfoHeroOverview;
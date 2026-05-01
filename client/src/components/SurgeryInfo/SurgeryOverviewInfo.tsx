import { Card } from "../Card";
import SummaryIcon from "../../assets/summary_icon.svg?react"
import DescriptionCard from "../DescriptionCard";
import ProcedureSummary from "../../assets/stack_icon.svg?react"
import { textStyles } from "../../utilities/responsiveClasses";
import SurgeryInfoProcedureSummaryPhase from "./SurgeryInfoProcedureSummaryPhase";
import RightArrow from "../../assets/rigth_arrow_icon.svg?react";
import DownArrow from "../../assets/arrow_down_icon.svg?react";
import AnatomyInvolvedCard from "./AnatomyInvolvedCard";
import SurgicalApproachesCard from "./SurgicalApproachesCard";
import PatientDescriptionCard from "./PatientDescriptionCard";

function SurgeryOverviewInfo() {
    const summaryDes = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis sed architecto praesentium mollitia, reprehenderit, laboriosam quos expedita animi cum consequuntur libero sequi explicabo excepturi autem esse aliquam, molestias ea similique?"
    const purposeDes = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis sed architecto praesentium mollitia, reprehenderit, laboriosam quos expedita animi cum consequuntur libero sequi explicabo excepturi autem esse aliquam, molestias ea similique?"
    const phaseDes = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem molestiae nobis voluptas rem tempore quia nesciunt vero temporibus"
    return (
        <div className="p-[clamp(0.25rem,2vw,1.5rem)]">

            {/* Summary an Purpose Sections */}
            <div className="grid grid-cols-[2fr] md:grid-cols-[1fr_1fr] gap-[clamp(0.5rem,2vw,1rem)] mb-2">
                <DescriptionCard Icon={SummaryIcon} title="Summary" description={summaryDes} />
                <DescriptionCard Icon={SummaryIcon} title="Purpose" description={purposeDes} />
            </div>

            {/* Procedure Summary Section */}
            <Card className="mb-2">
                <div className="flex mb-[clamp(2rem,2vh,3rem)]">
                    <span className="mr-[clamp(0.25rem,1rem,1.5rem)]">
                        <ProcedureSummary className={`size-[clamp(3.5em,6vw,5rem)] p-[0.5rem] bg-slate-100 rounded`} />
                    </span>
                    <div>
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Procedure Summary</h3>
                        <p className={`${textStyles.body} text-gray-600`}>The procedure is divided into the following high-level phases:</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[0.48fr_0.04fr_0.48fr_0.04fr_0.48fr_0.04fr_0.48fr] gap-[clamp(0.25rem,0.5rem,0.75rem)]">
                    <SurgeryInfoProcedureSummaryPhase stepNum={1} stepName="Access" stepContent={phaseDes} />
                    <div className="flex justify-center items-center hidden md:block">
                        <RightArrow />
                    </div>
                    <div className="flex justify-center items-center md:hidden">
                        <DownArrow />
                    </div>
                    <SurgeryInfoProcedureSummaryPhase stepNum={1} stepName="Access" stepContent={phaseDes} />
                    <div className="flex justify-center items-center hidden md:block">
                        <RightArrow />
                    </div>
                    <div className="flex justify-center items-center md:hidden">
                        <DownArrow />
                    </div>
                    <SurgeryInfoProcedureSummaryPhase stepNum={1} stepName="Access" stepContent={phaseDes} />
                    <div className="flex justify-center items-center hidden md:block">
                        <RightArrow />
                    </div>
                    <div className="flex justify-center items-center md:hidden">
                        <DownArrow />
                    </div>
                    <SurgeryInfoProcedureSummaryPhase stepNum={1} stepName="Access" stepContent={phaseDes} />
                </div>
            </Card>

            <div className="grid grid-cols-[2fr] md:grid-cols-[0.33fr_0.33fr_0.33fr] gap-[clamp(0.25rem,0.45rem,0.75rem)] ">
                <AnatomyInvolvedCard />
                <SurgicalApproachesCard />
                <PatientDescriptionCard />
            </div>
        </div>
    );
}

export default SurgeryOverviewInfo;
import { textStyles } from "../../utilities/responsiveClasses";

type ProcedureSummaryPhaseType = {
    stepNum: number;
    stepName: string;
    stepContent: string;
}

function SurgeryInfoProcedureSummaryPhase({stepNum, stepName, stepContent}: ProcedureSummaryPhaseType) {
    return (
        <div className="grid grid-col-[1fr] place-items-center">
            <div className="size-[clamp(2em,2.5em,3em)] flex justify-center items-center border rounded-full mb-[clamp(1em,1.5em,2em)]">{stepNum}</div>
            <div className={`${textStyles.body} font-semibold mb-[clamp(0.5em,1em,1.5em)]`}>{stepName}</div>
            <p className={`${textStyles.small} text-center`}>{stepContent}</p>
        </div>
    );
}

export default SurgeryInfoProcedureSummaryPhase;
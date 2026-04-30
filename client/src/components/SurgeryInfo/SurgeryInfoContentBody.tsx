import useSurgeryInfoNav from "../../hooks/SurgeryInfoTabNavHook";
import SurgeryComplicationsInfo from "./SurgeryComplicationsInfo";
import SurgeryDrapingInfo from "./SurgeryDrapingInfo";
import SurgeryOverviewInfo from "./SurgeryOverviewInfo";
import SurgeryPositioningInfo from "./SurgeryPositioningInfo";
import SurgeryPrepInfo from "./SurgeryPrepInfo";
import SurgeryStepsInfo from "./SurgeryStepsInfo";

export function SurgeryInfoContentBody() {
    const nav = useSurgeryInfoNav();

    if (nav.cur.localeCompare("Overview") == 0) return <SurgeryOverviewInfo />
    if (nav.cur.localeCompare("Positioning") == 0) return <SurgeryPositioningInfo />
    if (nav.cur.localeCompare("Prep") == 0) return <SurgeryPrepInfo />
    if (nav.cur.localeCompare("Draping") == 0) return <SurgeryDrapingInfo />
    if (nav.cur.localeCompare("Steps") == 0) return <SurgeryStepsInfo />
    if (nav.cur.localeCompare("Complications") == 0) return <SurgeryComplicationsInfo />
}

export default SurgeryInfoContentBody;
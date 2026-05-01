import { Card } from "../Card";
import GroupIcon from '../../assets/group_icon.svg?react';
import { textStyles } from "../../utilities/responsiveClasses";
import ListViewCard from "../ListViewCard";

function PatientDescriptionCard() {
    const commonConditions = ['Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis'];
    const commonPatientFactors = ['Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis'];
    const surgRecommended = ['Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis', 'Acute or chronic cholecystitis'];

    return (
        <Card>
            <div className="flex mb-4 items-center">
                <span>
                    <GroupIcon className={`size-[clamp(3.5em,6vw,5rem)] p-[0.5rem] bg-slate-100 rounded mr-[clamp(1rem,2vw,2rem)]`} />
                </span>
                <h3 className={`${textStyles.sectionTitle}`}>Anatomy Involved</h3>
            </div>
            <div className="flex flex-col">
                <ListViewCard title="Common Conditions" items={commonConditions} className="border-b border-gray-300 mb-2 pb-1"/>
                <ListViewCard title="Common Patient Factors" items={commonPatientFactors} className="border-b border-gray-300 mb-2 pb-1"/>
                <ListViewCard title="When Surgery is Recommended" items={surgRecommended} />
            </div>
        </Card>
    );
}



export default PatientDescriptionCard;
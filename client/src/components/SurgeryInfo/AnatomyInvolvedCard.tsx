import { Card } from "../Card";
import BodyIcon from "../../assets/body_icon.svg?react";
import { textStyles } from "../../utilities/responsiveClasses";
import ListDescriptionCard from "../ListDescriptionCard";


function AnatomyInvolvedCard() {
    const parts = [
        { part: "Gallbladder", description: "Stores bile and is removed during the procedure"},
        { part: "Gallbladder", description: "Stores bile and is removed during the procedure"},
        { part: "Gallbladder", description: "Stores bile and is removed during the procedure"},
        { part: "Gallbladder", description: "Stores bile and is removed during the procedure"},
        { part: "Gallbladder", description: "Stores bile and is removed during the procedure"}    
    ];
    return (
        <Card>
            <div className="flex mb-4 items-center">
                <span>
                    <BodyIcon className={`size-[clamp(3.5em,6vw,5rem)] p-[0.5rem] bg-slate-100 rounded mr-[clamp(1rem,2vw,2rem)]`} />
                </span>
                <h3 className={`${textStyles.sectionTitle}`}>Anatomy Involved</h3>
            </div>
            <div className="flex flex-col justify-around gap-[clamp(0.25rem,0.5rem,0.75rem)]">
                {parts.map((part) => {
                    return <ListDescriptionCard part={part.part} description={part.description} key={part.part} />
                })}
            </div>
        </Card>
    );
}


export default AnatomyInvolvedCard;
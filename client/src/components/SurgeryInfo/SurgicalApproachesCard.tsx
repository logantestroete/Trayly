import { Card } from "../Card";
import ScalpelIcon from "../../assets/scalpel_icon.svg?react";
import { textStyles } from "../../utilities/responsiveClasses";
import ListDescriptionCard from "../ListDescriptionCard";

function SurgicalApproachesCard() {
    const approaches = [
        { approach: "Laparoscopic (Standard)", description: "Most common approach using four small ports, camera and instruments. Benefits include less pain, shorter hospital stay, and faster recovery" },
        { approach: "Laparoscopic (Standard)", description: "Most common approach using four small ports, camera and instruments. Benefits include less pain, shorter hospital stay, and faster recovery" },
        { approach: "Laparoscopic (Standard)", description: "Most common approach using four small ports, camera and instruments. Benefits include less pain, shorter hospital stay, and faster recovery" },
    ];

    return (
        <Card>
            <div className="flex mb-4 items-center">
                <span>
                    <ScalpelIcon className={`size-[clamp(3.5em,6vw,5rem)] p-[0.5rem] bg-slate-100 rounded mr-[clamp(1rem,2vw,2rem)]`} />
                </span>
                <h3 className={`${textStyles.sectionTitle}`}>Anatomy Involved</h3>
            </div>
            <div className="flex flex-col justify-around gap-[clamp(0.25rem,0.5rem,0.75rem)]">
                {approaches.map((approach) => {
                    return <ListDescriptionCard part={approach.approach} description={approach.description} key={approach.approach} />
                })}
            </div>
        </Card>
    );
}

export default SurgicalApproachesCard;
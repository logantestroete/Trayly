import FilledCircle from "../assets/filled_circle_icon.svg?react";
import { textStyles } from "../utilities/responsiveClasses";

function ListDescriptionCard({part, description, key}: {part: string, description: string, key: string}) {
    return (
        <div key={key} className="pb-1 border-b border-gray-300 grid grid-cols-[0.2fr_1.8fr] gap-[clamp(0.25rem,0.5rem,0.75rem)] place-items-start">
            <span className="p-2">
                <FilledCircle className="size-[0.5em]"/>
            </span>
            <div>
                <h5 className={`${textStyles.body} font-semibold`}>{part}</h5>
                <p className={`${textStyles.body} text-gray-700`}>{description}</p>
            </div>
        </div>
    )
}

export default ListDescriptionCard;
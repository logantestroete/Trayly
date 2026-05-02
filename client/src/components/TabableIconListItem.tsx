import { useState } from "react";
import { iconSizes, textStyles } from "../utilities/responsiveClasses";

type TabableIconListItemType = {
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function TabableIconListItem({title, description, Icon}: TabableIconListItemType) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="grid grid-cols-[0.2fr_0.3fr_1.5fr] place-items-center not-last:border-b py-1 border-gray-300 pb-1">
            <button className={`btn border-none `} onClick={() => {setIsActive(!isActive)}}>
                <Icon className={`${iconSizes.lg}`}/> 
            </button>
            <p className={`${textStyles.body} font-semibold`}>{title}</p>
            <p className={`${textStyles.body} ${isActive ? "" : "hidden"}`}>{description}</p>
        </div>
    );
}

export default TabableIconListItem;
import { textStyles } from "../utilities/responsiveClasses";
import FilledCircle from "../assets/filled_circle_icon.svg?react";

type ListViewType = {
    className?: string;
    title: string;
    cols?: string;
    items: string[];
}

function ListViewCard({className,title,items,cols}: ListViewType) {
    return (
        <div className={`${className}`}>
            <h3 className={`${textStyles.body} font-semibold`}>{title}</h3>
            <div className={`grid grid-cols-${cols ? cols : "1"} place-items-start`}>
                {items.map((item) => {
                    return (
                        <div className="flex items-center">
                            <span className="mr-[clamp(0.5rem,1rem,1.5rem)]">
                                <FilledCircle className="size-[0.5em]"/>
                            </span>
                            <span className={`${textStyles.body}`}>{item}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListViewCard;
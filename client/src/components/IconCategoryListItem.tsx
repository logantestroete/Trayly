import { textStyles } from "../utilities/responsiveClasses";

type IconListItemType = {
    category: string;
    value: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    valueTextColor?: string;
}

function IconCategoryListItem({ category, value, Icon, valueTextColor }: IconListItemType) {
    return (
        <div className="grid grid-cols-[0.1fr_0.4fr_1.5fr] mt-2 place-items-start">
            <span>
                <Icon  className="size-[1.5rem]"/>
            </span>
            <h5 className={`${textStyles.body} font-semibold mr-3 text-nowrap`}>{`${category}:`}</h5>
            <p className={`${valueTextColor} ${textStyles.body} `}>{value}</p>
        </div>
    );
}

export default IconCategoryListItem;
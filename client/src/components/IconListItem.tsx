import { iconSizes, textStyles } from "../utilities/responsiveClasses";

type TabableIconListItemType = {
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function IconListItem({ title, description, Icon }: TabableIconListItemType) {

    return (
        <div className="grid grid-cols-[0.1fr_0.4fr_1.5fr] gap-[clamp(0.25rem,0.5rem,0.75rem)] place-items-center not-last:border-b py-1 border-gray-300 pb-1">
            <Icon className={`${iconSizes.lg}`} />
            <p className={`${textStyles.body} font-semibold text-center`}>{title}</p>
            <p className={`${textStyles.body}`}>{description}</p>
        </div>
    );
}

export default IconListItem;
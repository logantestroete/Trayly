import { textStyles, spacing } from "../../utilities/responsiveClasses";

type InfoPillProps = {
  name: string;
  value: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function SurgeryInfoHeroOverviewPill({Icon, name, value}: InfoPillProps) {
    return (
        <div className="flex px-1 py-4 w-full justify-start border border-gray-300 rounded m-auto text-sm my-1 lg:my-0 lg:mx-1">
            <span>
                <Icon />
            </span>
            <div className="flex lg:flex-col ml-3 lg:mb-1 items-center lg:items-start">
                <p className={`${textStyles.body} font-semibold mr-3 lg:mr-0`}>{name}</p>
                <div className="size-[0.25em] mr-3 bg-gray-300 rounded-full lg:hidden"></div>
                <p className="text-xs">{value}</p>
            </div>
        </div>
    )
}

export default SurgeryInfoHeroOverviewPill;
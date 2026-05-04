import { textStyles } from "../../utilities/responsiveClasses";

type InstrumentsType = {
    title: string;
    Image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
}

function InstrumentSection({title,Image,description}: InstrumentsType) {
    return (
        <div className="flex flex-col items-start">
            <h4 className={`${textStyles.body} font-semibold`}>{title}</h4>
            <Image className="my-2 w-full h-[clamp(100px,200px,300px)]"/>
            <p className={`${textStyles.small} text-gray-600`}>{description}</p>
        </div>
    )
}

export default InstrumentSection;
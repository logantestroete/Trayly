import { Card } from "./Card";
import { textStyles } from "../utilities/responsiveClasses";

type DescriptionCardProps = {
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}


function DescriptionCard({Icon, title, description}: DescriptionCardProps) {
    return (
        <Card className="grid grid-cols-[0.3fr_1.7fr] place-items-start">
            <span className="mr-[clamp(0.25rem,1rem,1.5rem)]">
                <Icon className={`size-[clamp(3.5em,6vw,5rem)] p-[0.5rem] bg-slate-200 rounded`}/>
            </span>
            <div>
                <h3 className={`${textStyles.sectionTitle} mb-2`}>{title}</h3>
                <p className={`${textStyles.body} text-gray-600`}>{description}</p>
            </div>
        </Card>
    )
}

export default DescriptionCard
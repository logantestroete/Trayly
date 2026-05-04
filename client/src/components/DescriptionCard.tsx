import { Card } from "./Card";
import { textStyles } from "../utilities/responsiveClasses";
import { useState } from 'react'

type DescriptionCardProps = {
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}


function DescriptionCard({ Icon, title, description }: DescriptionCardProps) {
    const [active, setActive] = useState(false);

    return (
        <Card className="flex flex-col w-full">
            <button className="flex btn" onClick={() => {setActive(!active)}}>
                <Icon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                <h3 className={`${textStyles.sectionTitle} mb-2`}>{title}</h3>
            </button>
            <p className={`${textStyles.body} ${(active) ? "" : "hidden"} mt-2 text-gray-600 ml-[clamp(0.5rem,1rem,2rem)]`}>{description}</p>
        </Card>
    )
}

export default DescriptionCard
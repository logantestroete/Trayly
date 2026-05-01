import StepsIcon from "../../assets/steps_icon.svg"
import { Card } from "../Card"

type StepsToolsProps = {
    stepCount: string;
    topTools: string[]
}

const iconBase =
    "shrink-0 rounded-full bg-slate-100 p-1";

const statIcon =
    `${iconBase}hd:block size-[clamp(5rem,8vw,8rem)] lg:size-[clamp(4rem,6vw,6rem)]`;

const toolIcon =
    `${iconBase} size-[clamp(2.5rem,5vw,4rem)]`;

const panelPadding =
    "py-[clamp(0.75rem,2vw,1.25rem)]";

const titleText =
    "text-[clamp(0.9rem,1.5vw,1.1rem)] font-semibold";

const stepNumber =
    "my-2 w-full text-center text-[clamp(3.5rem,10vw,6rem)] leading-none";

const toolText =
    "text-[clamp(0.875rem,1.5vw,1.125rem)]";

function SurgeryInfoHeroStepsTools({ stepCount, topTools }: StepsToolsProps) {
    return (
        <Card className="lg:ml-2 flex w-full">
            <div className="grid grid-cols-[minmax(8rem,0.9fr)_1.1fr] lg:grid-cols-[0.8fr_1.2fr] w-full">
                <div
                    className={`
                        ${panelPadding}
                        flex flex-col items-center justify-center gap-[clamp(0.75rem,2vw,1.5rem)]
                        border-r border-gray-300
                    `}
                >
                    <img
                        src={StepsIcon}
                        alt=""
                        className={statIcon}
                    />

                    <div className="flex flex-col items-center">
                        <p className={titleText}>Steps</p>
                        <div className={stepNumber}>{stepCount}</div>
                        <p className="text-center text-sm text-gray-600">Total Steps</p>
                    </div>
                </div>

                <div
                    className={`
                        ${panelPadding}
                        flex min-w-0 flex-col justify-center items-start gap-[clamp(0.75rem,2vw,1.25rem)]
                        px-[clamp(0.75rem,2vw,1.5rem)]
                    `}
                >
                    <div className={`w-full text-center ${titleText}`}>
                        Top Tools
                    </div>

                    <div className="flex w-full flex-col gap-[clamp(0.5rem,1.5vw,0.875rem)] px-[clamp(0rem,5vw,5.5rem)]">
                        {topTools.map((tool: string) => (
                            <div
                                key={tool}
                                className="flex w-full items-center gap-[clamp(0.75rem,2vw,1.25rem)]"
                            >
                                <img
                                    src={StepsIcon}
                                    alt=""
                                    className={toolIcon}
                                />

                                <div className={`${toolText} min-w-0`}>
                                    {tool}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mx-auto w-full max-w-xs rounded border border-gray-300 px-6 py-2 text-[clamp(0.875rem,1.5vw,1rem)]">
                        View All Tools
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default SurgeryInfoHeroStepsTools;
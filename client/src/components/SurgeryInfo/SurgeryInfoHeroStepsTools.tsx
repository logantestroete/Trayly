import StepsIcon from "../../assets/steps_icon.svg"

type StepsToolsProps = {
    stepCount: string;
    topTools: string[]
}

function SurgeryInfoHeroStepsTools({stepCount, topTools}: StepsToolsProps) {
    return (
        <div className="border border-gray-300 rounded lg:px-6 lg:py-2 w-full lg:w-[45%] mx-auto flex items-center my-2 lg:mt-0 lg:h-[350px]">
            <div className="border-r border-gray-300 w-[45%] lg:w-[30%] flex lg:flex-col justify-around items-center py-5">
                <img src={StepsIcon} alt="" className="hidden hd:block hd:size-[8rem] lg:size-[6rem] bg-slate-100 rounded-full p-1"/>
                <div className="flex flex-col items-center mt-2">
                    <p className="">Steps</p>
                    <div className="text-8xl lg:text-5xl my-2 text-center w-full">{stepCount}</div>
                    <p className="text-center">Total Steps</p>
                </div>
            </div>
            <div className="w-[45%] lg:w-[60%] mx-auto flex flex-col justify-around md:justify-start items-start h-full py-1 md:py-5">
                <div className="text-center w-full font-semibold">Top Tools</div>
                <div className="w-full lg:ml-[5%] my-1 flex flex-col items-start">
                    {topTools.map((tool: string) => {
                        return (
                            <div className="flex my-2 items-center justify-start w-full" id={tool}>
                                <img src={StepsIcon} alt="" className=" hd:size-[4rem] lg:size-[3rem] bg-slate-100 rounded-full mx-auto mr-5 p-1 my-auto"/>
                                <div className="text-sm hd:text-lg w-full">{tool}</div>
                            </div>
                        )
                    })}
                </div>
                <button className=" text-sm lg:text-base lg:w-[80%] py-2 lg:py-1 px-8 mx-auto border border-gray-300 rounded lg:mt-5">View All Tools</button>
            </div>
        </div>
    )
}

export default SurgeryInfoHeroStepsTools;
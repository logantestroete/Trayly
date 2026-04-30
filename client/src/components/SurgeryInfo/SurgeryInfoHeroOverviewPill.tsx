

function SurgeryInfoHeroOverviewPill({iconUrl, name, value}: {iconUrl: string, name: string, value: string}) {
    return (
        <div className="flex px-1 py-4 w-full justify-start border border-gray-300 rounded m-auto text-sm my-1 lg:my-0 lg:mx-1">
            <img src={iconUrl} alt="" className="h-full"/>
            <div className="flex lg:flex-col ml-3 lg:mb-1 items-center lg:items-start">
                <p className="mr-3 lg:mr-0 font-semibold">{name}</p>
                <div className="size-[0.25em] mr-3 bg-gray-300 rounded-full lg:hidden"></div>
                <p className="text-xs">{value}</p>
            </div>
        </div>
    )
}

export default SurgeryInfoHeroOverviewPill;
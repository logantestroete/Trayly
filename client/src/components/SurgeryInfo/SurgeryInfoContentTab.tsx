import useSurgeryInfoNav from "../../hooks/SurgeryInfoTabNavHook";

type SurgeryInfoTabType = {
    name: string
}

function SurgeryInfoContentTab({name}: SurgeryInfoTabType) {
    const nav = useSurgeryInfoNav();

    const tabClicked = (tab: string) => {
        nav.setCur(tab);
    }

    return <button className={`${(nav.cur.localeCompare(name) === 0) ? 'si-tab-active' : ''} si-tab  mx-4 py-2`}
                onClick={() => { tabClicked(name) }}>{name}</button>
}

export default SurgeryInfoContentTab;
import DescriptionCard from "../DescriptionCard";
import SurgicalIcon from '../../assets/scalpel_icon.svg?react';
import { useState } from "react";
import { textStyles } from "../../utilities/responsiveClasses";
import { Card } from "../Card";
import IconCategoryListItem from "../IconCategoryListItem";
import IconListItem from "../IconListItem";
import ListViewCard from "../ListViewCard";
import InstrumentSection from "./InstrumentsSection";
import ImageWithLeftList from "../ImageWithLeftList";


function SurgeryPrepInfo() {

    // State buttons for tabs
    const [patPrepIsActive, setPatPrepIsActive] = useState(false);
    const [roomSetupIsActive, setRoomSetupIsActive] = useState(false);
    const [suppliesIsActive, setSuppliesIsActive] = useState(false);
    const [instrumentsIsActive, setInstrumentsIsActive] = useState(false);
    const [backTableIsActice, setBackTableIsActive] = useState(false);
    const [mayoStandIsActive, setMayoStandIsActive] = useState(false);


    // variables for displayed data
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo tenetur sint perferendis maiores deserunt quisquam commodi dolores quo at, blanditiis laborum ratione necessitatibus soluta accusamus molestiae alias porro nemo?";
    const patientPrep = [
        { field: "Prep Area", description: "from nipples to mid-thigh, laterally to table edges" },
        { field: "Prep Solution", description: "Chlorhexidine or Povidoneiodine (per facility protocol)" },
        { field: "Special Considerations", description: "Ensure umbilicus is included in prep area. Foley catheter if ordered" }
    ];
    const roomSetup = [
        "Laparoscopy tower and monitor", 'Camera, light source, cords',
        'Insufflator & CO_2 tank', 'Suction/irrigation with tubing',
        'Bovie/Electosurgical unit', 'OR bed in reverse Tredelenburg (15-30 degrees)',
        'Safety Strap', 'arm boards', 'gel pads', 'Light handles with sterile covers'
    ]
    const supplies = [
        'Drapes', 'Sutures (2-0,3-0)', 'Allis clamps', 'Needles (SH,CT)',
        'Sponges', 'Specimen cup', 'Ray-Tec sponges', 'Sterile Cups',
        '10 mL syringes', 'Irrigation solution', '18G needle', 'Clip applier reloads',
        'Blades (#10, #11)', 'Hem-o-lok clips'
    ]
    const instruments = [
        { type: "Basic / Core Instruments", instruments: 'Hemostats,scissors,needle holders,forceps,scalpel handle' },
        { type: "Procedure-Specific Instruments", instruments: 'Trocars,graspers,clip applier,hook cautery,suction irrigator,endo scissors' },
        { type: 'Accessories', instruments: 'Light cord,camera head,suction/irrigation tips,CO_2 tubing,clip applier reloads' }
    ]
    const backTable = [
        'Scissor', 'needles', 'big ass syringe',
        'Heostat', '8 mL syringe', 'another needle',
        'blueberries', 'Quatamala'
    ]
    const mayoStand = [
        'Knife + Blade', 'Pickups', 'Hemostat',
        'Retractor', 'Scissors', 'Towel Clamp'
    ]

    return (
        <div className="p-[clamp(0.25rem,2vw,1.5rem)]">

            {/* 
            ============================================================
                Prep Overview and Prep Overview image section
            ============================================================
            */}
            <div className="grid grid-cols-[2fr] md:grid-cols-[1fr_1fr] gap-2 place-items-start">
                <DescriptionCard title="Prep Overview" description={lorem} Icon={SurgicalIcon} />
                <div className="bg-slate-600 w-full h-[200px]">

                </div>
            </div>


            <div className="grid grid-cols-[2fr] lg:grid-cols-[1fr_1fr] gap-2 place-items-start mt-2">

                {/* 
                ============================================================
                    Patient Prep Section
                ============================================================
                */}
                <Card>
                    <button className="flex btn" onClick={() => { setPatPrepIsActive(!patPrepIsActive) }}>
                        <SurgicalIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Patient Prep</h3>
                    </button>
                    <div className={`${patPrepIsActive ? "" : "hidden"}`}>
                        {patientPrep.map((category) => {
                            return <IconCategoryListItem category={category.field} value={category.description} Icon={SurgicalIcon} key={category.field} />
                        })}
                    </div>
                </Card>
                <div className="bg-slate-600 w-full h-[200px]">

                </div>

                {/* 
                ============================================================
                    Equipment and Room Setup Section
                ============================================================
                */}
                <Card>
                    <button className="flex btn" onClick={() => { setRoomSetupIsActive(!roomSetupIsActive) }}>
                        <SurgicalIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Equipment & Room Setup</h3>
                    </button>
                    <div className={`${roomSetupIsActive ? "" : "hidden"}`}>
                        {roomSetup.map((setup) => {
                            return <IconListItem title="" description={setup} Icon={SurgicalIcon} key={setup} />
                        })}
                    </div>
                </Card>

                {/* 
                ============================================================
                    Supplies Section
                ============================================================
                */}
                <Card>
                    <button className="flex btn" onClick={() => { setSuppliesIsActive(!suppliesIsActive) }}>
                        <SurgicalIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Supplies</h3>
                    </button>
                    <ListViewCard items={supplies} className={`${suppliesIsActive ? "" : "hidden"}`} title="" cols="2" />
                </Card>
            </div>

            {/* 
            ============================================================
                Prep Overview and Prep Overview image section
            ============================================================
            */}
            <Card className="mt-2">
                <button className="flex btn" onClick={() => { setInstrumentsIsActive(!instrumentsIsActive) }}>
                    <SurgicalIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                    <h3 className={`${textStyles.sectionTitle} mb-2`}>Instruments</h3>
                </button>
                <div className={`${instrumentsIsActive ? "" : "hidden"} grid grid-cols-[3fr] lg:grid-cols-[1fr_1fr_1fr] mt-3 gap-[clamp(2em,4vw,4em)] place-items-center`}>
                    {instruments.map((field) => {
                        return <InstrumentSection title={field.type} description={field.instruments} Image={SurgicalIcon} key={field.type} />
                    })}
                </div>
            </Card>

            {/* 
            ============================================================
                Back table and Mayo stand sections
            ============================================================
            */}
            <div className="grid grid-cols-[2fr] lg:grid-cols-[1fr_1fr] gap-2">
                <Card className="mt-2">
                    <button className="flex btn" onClick={() => { setBackTableIsActive(!backTableIsActice) }}>
                        <SurgicalIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Back Table Setup</h3>
                    </button>
                    <div className={`${backTableIsActice ? "" : "hidden"}`}>
                        <ImageWithLeftList Image={SurgicalIcon} list={backTable} />
                    </div>
                </Card>
                <Card className="mt-2">
                    <button className="flex btn" onClick={() => { setMayoStandIsActive(!mayoStandIsActive) }}>
                        <SurgicalIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Mayo Stand Setup</h3>
                    </button>
                    <div className={`${mayoStandIsActive ? "" : "hidden"}`}>
                        <ImageWithLeftList Image={SurgicalIcon} list={mayoStand} />
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default SurgeryPrepInfo;
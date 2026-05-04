import { useState } from 'react'
import { textStyles } from '../../utilities/responsiveClasses';
import PositioningIcon from '../../assets/body_icon.svg?react';
import DescriptionCard from '../DescriptionCard';
import IconCategoryListItem from '../IconCategoryListItem';
import { Card } from '../Card';
import ListDescriptionCard from '../ListDescriptionCard';
import TabableIconListItem from '../IconListItem';
import ListViewCard from '../ListViewCard';

function SurgeryPositioningInfo() {

    // State variables for toggling tabs
    const [posIsActive, setPosIsActive] = useState(false);
    const [setupIsActive, setSetupIsActive] = useState(false);
    const [equipmentIsActive, setEquipmentIsActive] = useState(false);
    const [consIsActive, setConsIsActive] = useState(false);
    const [mistakesIsActive, setMistakesIsActive] = useState(false);

    // variables for data being displayed
    const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ea nisi, sequi inventore impedit suscipit nihil dignissimos esse reiciendis, veritatis commodi, debitis laboriosam! Recusandae illo maiores cum, eum aliquam voluptate!";
    const mistakes = ['Arms abducted too far', 'Pressure points not padded', 'Patient not centered on teh bed', 'Safety strap placed incorrectly', 'Position interfering with surgical access', 'Prep/drape area not considered before final positioning'];
    return (
        <div className="p-[clamp(0.25rem,2vw,1.5rem)]">
                
            {/* 
            ============================================================
                Position Summary and Why This Position Is Used Cards 
            ============================================================
            */}
            <div className='grid grid-cols-[2fr] md:grid-cols-[1fr_1fr] gap-2 place-items-start'>
                <Card>
                    <button className="flex btn" onClick={() => { setPosIsActive(!posIsActive) }}>
                        <PositioningIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Position Summary</h3>
                    </button>
                    <div className={`${posIsActive ? "" : "hidden"} ml-[clamp(0.5rem,1.5rem,3rem)]`}>
                        <IconCategoryListItem category='Position' value='Supine' valueTextColor='text-blue-500' Icon={PositioningIcon} />
                        <IconCategoryListItem category='Used For' value={lorem.substring(150)} Icon={PositioningIcon} />
                        <IconCategoryListItem category='Main Goal' value={lorem.substring(140)} Icon={PositioningIcon} />
                    </div>
                </Card>
                <DescriptionCard Icon={PositioningIcon} title='Why This Position Is Used' description={lorem} />
            </div>

            {/* 
            ============================================================
                Patient Setup and Equipment
            ============================================================
            */}
            <div className='grid grid-cols-[2fr] md:grid-cols-[1fr_1fr] gap-2 mt-2 place-items-start'>
                <Card>
                    <button className="flex btn" onClick={() => { setSetupIsActive(!setupIsActive) }}>
                        <PositioningIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Patient Setup</h3>
                    </button>
                    <div className={`${setupIsActive ? "" : "hidden"} mt-2`}>
                        <ListDescriptionCard part="Head/Neck" description='Neutral Alignment' />
                        <ListDescriptionCard part="Arms" description='Tucked at sides or extended on arm boards' />
                        <ListDescriptionCard part="Legs" description='Straight and uncrossed' />
                        <ListDescriptionCard part="Safety Strap" description='Placed above the knees or thighs' />
                        <ListDescriptionCard part="Pressure Points" description='Heels,elbows,sacrum,occiput' />
                    </div>
                </Card>
                <Card>
                    <button className="flex btn" onClick={() => { setEquipmentIsActive(!equipmentIsActive) }}>
                        <PositioningIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                        <h3 className={`${textStyles.sectionTitle} mb-2`}>Equipment Used</h3>
                    </button>
                    <div className={`${equipmentIsActive ? "" : "hidden"} mt-2`}>
                        <ListDescriptionCard part="Arm Boards" description='Used when the arms are extended away from the body' />
                        <ListDescriptionCard part="Padding" description='Protects the pressure points and prevents nerve injury' />
                        <ListDescriptionCard part="Safety Strap" description='Helps prevent patient movement or falling' />
                        <ListDescriptionCard part="Positioning Devices" description='May include pillows,gel pads, stirrups, shoulder supports, or bean bags depending on the surgery' />
                    </div>
                </Card>
            </div>
            <Card className='mt-2'>
                <button className="flex btn" onClick={() => { setConsIsActive(!consIsActive) }}>
                    <PositioningIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                    <h3 className={`${textStyles.sectionTitle} mb-2`}>Equipment Used</h3>
                </button>
                <div className={`${consIsActive ? "" : "hidden"} mt-2`}>
                    <TabableIconListItem title='Before Draping' description={lorem} Icon={PositioningIcon} />
                    <TabableIconListItem title='Field Planning' description={lorem} Icon={PositioningIcon} />
                    <TabableIconListItem title='Exposure Awareness' description={lorem} Icon={PositioningIcon} />
                    <TabableIconListItem title='Equipment Impact' description={lorem} Icon={PositioningIcon} />
                    <TabableIconListItem title='Patient Safety' description={lorem} Icon={PositioningIcon} />
                    <TabableIconListItem title='During the Case' description={lorem} Icon={PositioningIcon} />
                    <TabableIconListItem title='Before Draping' description={lorem} Icon={PositioningIcon} />
                </div>
            </Card>
            <Card className='mt-2'>
                <button className="flex btn" onClick={() => { setMistakesIsActive(!mistakesIsActive) }}>
                    <PositioningIcon className={`size-[clamp(2rem,4vw,3rem)] mr-[clamp(0.25rem,1rem,1.5rem)]  p-[0.5rem] bg-slate-200 rounded`} />
                    <h3 className={`${textStyles.sectionTitle} mb-2`}>Common Mistake / Safety Notes</h3>
                </button>
                <div className={`${mistakesIsActive ? "" : "hidden"}`}>
                    <ListViewCard title='' items={mistakes} className='ml-[clamp(0.25rem,1rem,2rem)]'/>
                </div>
            </Card>
        </div>
    )
}

export default SurgeryPositioningInfo;
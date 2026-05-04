import FilledCircle from '../assets/filled_circle_icon.svg?react';

type IWLLType = {
    Image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    list: string[];
}

function ImageWithLeftList({list, Image}: IWLLType) {
    return (
        <div className='grid grid-cols-[2fr] md:grid-cols-[1.2fr_0.8fr] place-items-center'>
            <Image className="w-full h-[clamp(200px,4vh,500px)] rounded bg-slate-600 my-2"/>
            <div className='grid grid-cols-[1fr_1fr] gap-x-[clamp(1em,2em,3em)] md:grid-cols-[2fr] md:gap-y-2em'>
                {list.map((item) => {
                    return (
                        <div className='grid grid-cols-[0.1fr_1.9fr] gap-4 place-items-center'>
                            <FilledCircle className='size-[clamp(0.5em,0.75em,1em)]'/>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageWithLeftList;
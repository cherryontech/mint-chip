import { tv } from "tailwind-variants/lite";

const tileVariants = tv({
    base: 'font-poppins flex flex-col justify-start py-6 px-4 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.25)]',

    variants: {
        size: {
            sm: 'h-[222px]',
            lg: 'h-[340px]'
        },
        span: {
            2: 'col-span-1 md:col-span-2',
            3: 'col-span-1 md:col-span-3'
        },
        type: {
            regular: '',
            data: '',
        },
    },
});

const imgVariants = tv({
    base: 'place-self-center',

    variants: {
        size: {
            sm: 'w-25',
            lg: 'w-50'
        },
    },
});

export default function DashboardTile({ type, size, span, title, subtitle, imgSource, altText, dataSentence }){
    return (
        <div className={tileVariants({ type, size, span })}>
            {type == "data" ? (
                <div className="h-full flex flex-col gap-8 text-left">
                    <h2 className="text-lg md:text-[20px] font-medium">{title}</h2>
                    <p className="text-3xl md:text-4xl">{dataSentence}</p>
                    <p className="text-base">{subtitle}</p>
                </div>
            ) : (
                <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-[20px] font-medium">{title}</h2>
                    <p className="text-base font-normal">{subtitle}</p>
                    <img src={imgSource} alt={altText} className={imgVariants({ size })}/>
                </div>
            )}
        </div>
    );
}
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

export default function DashboardTile({ size, span, title, subtitle, imgSource, altText }){
    return (
        <div className={tileVariants({ size, span })}>
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-[20px] font-medium">{title}</h2>
                <p className="text-base">{subtitle}</p>
                <img src={imgSource} alt={altText} className={imgVariants({ size })} />
            </div>
        </div>
    );
}
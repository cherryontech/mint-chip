import { tv } from "tailwind-variants/lite";

const tileVariants = tv({
    base: 'flex flex-col rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.25)]',

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

export default function DashboardTile({ size, span, title, subtitle, imgSource, altText }){
    return (
        <div className={tileVariants({ size, span })}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <img src={imgSource} alt={altText} />
        </div>
    );
}
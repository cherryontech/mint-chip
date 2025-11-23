import { tv } from "tailwind-variants/lite";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

const tileVariants = tv({
    base: 'font-poppins flex flex-col justify-start py-6 px-4 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.25)]',

    variants: {
        size: {
            sm: 'h-[222px]',
            lg: 'h-[222px] md:h-[340px]'
        },
        span: {
            2: 'col-span-1 md:col-span-2',
            3: 'col-span-1 md:col-span-3'
        }
    },
});

export default function ChallengeTile({ size, span, title, subtitle, tags, to }){
    return (
        <div className={tileVariants({ size, span })}>
            <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg md:text-[20px] font-medium">{title}</h2>
                    <p className="text-base">{subtitle}</p>
                </div>
                {/* tag and button */}
                <div className="flex flex-row justify-between items-center">
                    <p>{tags}</p>
                    <Button
                        size='circ'
                        color='primary'
                        label={<FaArrowRight/>}
                        to={to}
                    />
                </div>
            </div>
        </div>
    );
};
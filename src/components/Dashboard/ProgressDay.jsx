import { FaCircle, FaCircleCheck } from "react-icons/fa6"

export default function ProgressDay({ day }) {
    return (
        <div className="w-full flex flex-row justify-between items-center text-xl">
            <div className="flex flex-row gap-3 items-center">
                <p>Journal</p>
                <FaCircle className="text-[8px]"/>
                <p>Day {day}</p>
            </div>
            <FaCircleCheck className="text-green text-xl shrink-0"/>
        </div>
    )
}
import { useEffect, useState } from 'react';
import Button from "../Button";
import { IoClose } from "react-icons/io5";

export default function TaskModal({ isOpen, onClose}) {
    const [selectedTask, setSelectedTask] = useState([]);
      
      // log the selectedTask after the array changes to update automatically
      useEffect(() => {
        console.log('Updated Tasks:', selectedTask);
    }, [selectedTask]);
    
    function toggleTask(challenge) {
    // if the clicked challenge is not selectedTask, setSelectedTask
    if (!selectedTask.includes(challenge)) {
      // log the selection
      console.log(`${challenge} button selected!`);
      setSelectedTask([...selectedTask, challenge]);
      // if the clicked challenge is already in selectedTask, filter it out of selectedTask
    } else {
      // log the deselection
      console.log(`${challenge} button deselected!`);
      setSelectedTask(selectedTask.filter(item => item !== challenge));
    }
  }
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-400/30 z-20">
            <div className="flex flex-col justify-center items-center gap-10 p-8 h-[90vh] sm:h-[75vh] md:h-[70vh] rounded-[20px] bg-gradient-to-b from-nyanza to-celeste opacity-100">
                <button onClick={onClose} className='toggle-btn place-self-start active:outline-4 active:outline-persianblue focus-visible:outline-4 focus-visible:outline-persianblue'><IoClose className='text-2xl'/></button>
                <h2 className="font-poppins text-2xl font-bold">Detox Challenge Options</h2>
                {/* buttons */}
                <div className="flex flex-col gap-4 text-left">
                    <Button 
                        size="lg" 
                        color="secondary"
                        label="Practice Saying No: This task helps you set boundaries in & outside the office."
                        onClick={() => toggleTask('Practice Saying No: This task helps you set boundaries in & outside the office.')}
                        isActive={selectedTask.includes('Practice Saying No: This task helps you set boundaries in & outside the office.')}
                    />
                </div>
                <Button size="sm" to="/journal" label="Save" />
            </div>
        </div>
    );
}
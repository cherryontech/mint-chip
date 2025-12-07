import { useEffect, useState } from 'react';
import Button from "../Button";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function TaskModal({ isOpen, onClose}) {
    console.log('task modal is open', isOpen);
    const navigate = useNavigate();
    const [selectedTask, setSelectedTask] = useState([]);
    // define the current user logged in
    const user = auth.currentUser;
      
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

    // function to save selected tasks to firestore and local storage
    async function saveTasks(){
        if (!auth){
            console.log('User not authenticated yet')
            return;
        }
        const userDocRef = doc(db, "users", user.uid);
        try {
            await updateDoc(userDocRef, {
                challengesSelected: selectedTask
            });
            
            // save to local storage
            localStorage.setItem("userTasks", JSON.stringify(selectedTask));
            console.log("User saved these tasks:", selectedTask);

            // then route to the challenges page
            navigate("/challenges");
        } catch (error) {
            console.error("Error while saving user tasks to firestore", error);
            console.log("Error sending tasks to database");
        }
    }
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-400/30 z-20">
            <div className="flex flex-col justify-center items-center gap-10 p-8 h-fit rounded-[20px] bg-gradient-to-b from-nyanza to-celeste opacity-100">
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
                    <Button 
                        size="lg" 
                        color="secondary"
                        label="Read Positive Affirmations: Are you struggling with impostor syndrome, anxiety, & self-doubt? Then this task is for you."
                        onClick={() => toggleTask('Read Positive Affirmations: Are you struggling with impostor syndrome, anxiety, & self-doubt? Then this task is for you.')}
                        isActive={selectedTask.includes('Read Positive Affirmations: Are you struggling with impostor syndrome, anxiety, & self-doubt? Then this task is for you.')}
                    />
                    <Button 
                        size="lg" 
                        color="secondary"
                        label="Read a Book: When is the last time you sat down and read a good book?"
                        onClick={() => toggleTask('Read a Book: When is the last time you sat down and read a good book?')}
                        isActive={selectedTask.includes('Read a Book: When is the last time you sat down and read a good book?')}
                    />
                    <Button 
                        size="lg" 
                        color="secondary"
                        label="Sleep 7 to 9 Hours: Your quality of sleep greatly affects your emotions and ability to process information."
                        onClick={() => toggleTask('Sleep 7 to 9 Hours: Your quality of sleep greatly affects your emotions and ability to process information.')}
                        isActive={selectedTask.includes('Sleep 7 to 9 Hours: Your quality of sleep greatly affects your emotions and ability to process information.')}
                    />
                    <Button 
                        size="lg" 
                        color="secondary"
                        label="Journal Entry: Respond to journal prompts or share your thoughts and feelings each day."
                        onClick={() => toggleTask('Journal Entry: Respond to journal prompts or share your thoughts and feelings each day.')}
                        isActive={selectedTask.includes('Journal Entry: Respond to journal prompts or share your thoughts and feelings each day.')}
                    />
                </div>
                <Button size="sm" onClick={saveTasks} label="Save" />
            </div>
        </div>
    );
}
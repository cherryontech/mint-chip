import { useEffect, useState } from "react";
import Button from "../components/Button";
import DashboardTile from "../components/Dashboard/DashboardTile";
import TaskModal from "../components/Dashboard/TaskModal";

let daysCompleted = 0;
let daysLeft = 30 - daysCompleted;
let loginStreak = 1;

export default function Dashboard() {
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  // state for whether tasks have been selected or not from dashboard modal
  const [hasTasks, setHasTasks] = useState(false);

  useEffect(() => {
    // load userTasks from modal from local storage
    let userTasks = JSON.parse(localStorage.getItem("userTasks") || '[]');
    console.log("Loaded tasks from local storage:", userTasks);
    // if it's not empty, setHasTasks state to true
    if (userTasks.length !== 0){
      setHasTasks(true);
    }
  }, []);

  return (
      <div className="bg-white">
      {/* title and button */}
        <div className="flex flex-col gap-4 mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-80">
          <h1 className="text-3xl font-playfair font-semibold text-eerie place-self-center lg:place-self-start mt-4">
            {/* conditional render for new user vs returning */}
            {hasTasks ? 'Welcome Back!' : 'Welcome New User!'}
          </h1>
          <div className="w-full place-items-center">
            <Button 
              size='md'
              color='primary'
              label='Start Detox Challenge' 
              onClick={() => setTaskModalOpen(true)}
            />
          </div>
        </div>
        <TaskModal isOpen={taskModalOpen} onClose={() => setTaskModalOpen(false)} />
      {/* conditional render for empty state */}
      {hasTasks ? (
      /* card grid */
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-min my-14 mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-80">
              {/* row 1 */}
              <DashboardTile 
                type="data"
                size="sm" 
                span="2"
                title="Detox Summary" 
                dataSentence={`${daysCompleted} Day${daysCompleted == 1 ? '' : 's'}`}
                subtitle={`${daysLeft} day${daysLeft == 1 ? '' : 's'} to go!`}
                />
              <DashboardTile 
                type="data"
                size="sm" 
                span="2"
                title="Login History"
                dataSentence={`${loginStreak} Day Streak`}
                subtitle='Keep it up!'
                />
              <DashboardTile 
                size="sm" 
                span="2"
                title="Achievements" 
                subtitle="Review badges earned"
                imgSource="/badge.svg"
                altText="badge illustration"          
              />
              {/* row 2 */}
              <DashboardTile 
                size="lg" 
                span="3"
                title="Progress Overview"
                subtitle="Your progress for the past 7 days" 
                imgSource="/pietrs.png"
                altText="pie chart illustration" 
              />  
              <DashboardTile 
                size="lg" 
                span="3"
                title="Community Forum"
                subtitle="Review answers to prompts from other women in tech"
                imgSource="/people.svg"
                altText="illustration of four diverse women" 
              />  
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 my-8">
          <img src="/empty.svg" alt="illustration of person holding balloons with question marks"/>
          <p className="font-poppins">Nothing to Display Yet!</p>
        </div>
      )}
    </div>
  );
}
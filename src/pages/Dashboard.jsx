import { useEffect, useState } from "react";
import Button from "../components/Button";
import DashboardTile from "../components/Dashboard/DashboardTile";
import TaskModal from "../components/Dashboard/TaskModal";
import { auth, db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

let loginStreak = 1;

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  // state for whether tasks have been selected or not from dashboard modal
  const [hasTasks, setHasTasks] = useState(false);
  // state for challenge task completed days
  const [completedDays, setCompletedDays] = useState(0);
  let daysCompleted = completedDays;
  let daysLeft = 30 - daysCompleted;

  // define variable for the authenticated user
  // const user = auth.currentUser;

  // useEffect to ensure the authenticated user loads before dashboard data and state is determined
  useEffect(() => {
    console.log("User is loading...")
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('The user has been found')
    });

    return () => {
      unsub();
    }
  }, []);

  useEffect(() => {
    console.log("About to load the data from the user...")
    // dont run anything if the user isn't loaded
    if (!user) {
      console.log('user wasnt loaded yet or not found');
      return;
    } else {
      console.log('user found');
    }

    // define variables
    const userDocRef = doc(db, "users", user.uid);

    // listen in real-time for changes to the document
    const unsub = onSnapshot(userDocRef, (userDocSnap) => {
      console.log('User has already selected these tasks: ', userDocSnap.data().challengesSelected);
      // check if the document's challengesSelected field is > 0 to display the full dashboard and update state
      if (userDocSnap.exists() && userDocSnap.data().challengesSelected.length > 0){
        setHasTasks(true);
      } else {
        setHasTasks(false);
        console.log('user hasnt selected any tasks or deselected')
      } 
      
      // check the document's completedDays for the challenges to update state - add optional chaining in case thee user hasn't started any challenges yet
      if (userDocSnap.data().journalProgress?.completedDays > 0){
        setCompletedDays(userDocSnap.data().journalProgress.completedDays);
      } else {
        console.log('No days completed yet')
        setCompletedDays(0);
      };
    });
    
    // call this function once u exit so it stops looking for the changes in the database
    return () => {
      unsub();
    }
  }, [user]);

  // define variable for a progress day array showing 3 most recent completed tasks, filter numbers over 0 for empty state
  let progressArray = [completedDays, completedDays - 1, completedDays - 2].filter(num => num > 0);
  console.log("Progress array:", progressArray);

  // logic to click tile and navigate to community 
  let navigate = useNavigate();

  return (
      <div className="bg-white">
      {/* title and button */}
        <div className="flex flex-col gap-4 mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-50">
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
        <TaskModal user={user} isOpen={taskModalOpen} onClose={() => setTaskModalOpen(false)}/>
      {/* conditional render for empty state */}
      {hasTasks ? (
      /* card grid */
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-min my-14 mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-50">
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
                type="progress"
                size="lg" 
                span="3"
                title="Progress Overview"
                subtitle="Your progress for the past 7 days" 
                imgSource="/pietrs.png"
                altText="pie chart illustration" 
                progressDays={progressArray}
              />  
              <DashboardTile 
                size="lg" 
                span="3"
                title="Community Forum"
                subtitle="Review answers to prompts from other women in tech"
                imgSource="/people.svg"
                altText="illustration of four diverse women" 
                onClick={() => navigate("/community")}
                onKeyDown={(event) => event.key === 'Enter' ? navigate("/community") : null}
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
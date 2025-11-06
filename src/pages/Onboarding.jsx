import Button from '../components/Button';
import { useEffect, useState } from 'react';

export default function Onboarding() {
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  
  // log the selectedConcerns after the array changes to update automatically
  useEffect(() => {
    console.log('Updated Concerns:', selectedConcerns);
  }, [selectedConcerns]);

  // function for toggling active state and storing the user's selected concern
  function toggleConcern(concern) {
    // if the clicked concern is not selectedConcerns, setSelectedConcerns
    if (!selectedConcerns.includes(concern)) {
      // log the selection
      console.log(`${concern} button selected!`);
      setSelectedConcerns([...selectedConcerns, concern]);
      // if the clicked concern is already in selectedConcerns, filter it out of selectedConcerns
    } else {
      // log the deselection
      console.log(`${concern} button deselected!`);
      setSelectedConcerns(selectedConcerns.filter(item => item !== concern));
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-b from-nyanza to-celeste sm:via-celeste sm:via-50% sm:to-white sm:to-50%">
      {/* quiz card */}
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 bg-white rounded-[10px] h-[90vh] sm:h-[80vh] w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw] 2xl:w-[60vw] shadow-[0_4px_15px_8px_rgba(30,30,30,0.10)]">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 md:gap-3 text-center">
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium">
            What are some of your concerns today?
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl font-normal">
            Your selections help us customize your dashboard
          </p>
        </div>
        {/* button quiz grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 md:grid-rows-3 md:gap-y-10 md:gap-x-14">
          <Button 
            size="md" 
            color="secondary" 
            label="Sleep" 
            onClick={() => toggleConcern('Sleep')}
            isActive={selectedConcerns.includes('Sleep')} 
          />
          <Button 
            size="md" 
            color="secondary" 
            label="Postpartum Anxiety"
            onClick={() => toggleConcern('Postpartum Anxiety')} 
            isActive={selectedConcerns.includes('Postpartum Anxiety')} 
          />
          <Button 
            size="md" 
            color="secondary" 
            label="Self-Doubt" 
            onClick={() => toggleConcern('Self-Doubt')}
            isActive={selectedConcerns.includes('Self-Doubt')}  
          />
          <Button 
            size="md" 
            color="secondary" 
            label="Stress" 
            onClick={() => toggleConcern('Stress')}
            isActive={selectedConcerns.includes('Stress')}  
          />
          <Button 
            size="md" 
            color="secondary" 
            label="Saying No" 
            onClick={() => toggleConcern('Saying No')}
            isActive={selectedConcerns.includes('Saying No')}  
          />
          <Button 
            size="md" 
            color="secondary" 
            label="Gender Bias"
            onClick={() => toggleConcern('Gender Bias')}
            isActive={selectedConcerns.includes('Gender Bias')}  
          />
        </div>
        {/* next and skip buttons */}
        <div className="flex flex-col-reverse gap-4 sm:gap-5 sm:flex-row md:gap-8">
          <Button size="sm" color="secondary" label="Skip" to="/dashboard"/>
          <Button size="sm" color="primary" label="Next" to="/dashboard"/>
        </div>
      </div>
    </div>
  );
}

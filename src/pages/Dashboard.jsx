import Button from "../components/Button";
import DashboardTile from "../components/Dashboard/DashboardTile";

export default function Dashboard() {
  return (
      <div className="bg-white">
      {/* title and button */}
        <div className="flex flex-col gap-4 mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-80">
          <h1 className="text-3xl font-playfair font-semibold text-eerie place-self-center lg:place-self-start mt-4">Welcome Back!</h1>
          <div className="w-full place-items-center">
            <Button 
              size='md'
              color='primary'
              label='Start a Task' 
              className="place-items-center"
            />
          </div>
        </div>
      {/* card grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-min my-14 mx-8 sm:mx-15 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-80">
            {/* row 1 */}
            <DashboardTile size="sm" title="Detox Overview" span="2"/>
            <DashboardTile size="sm" title="Login Streak" span="2"/>
            <DashboardTile size="sm" title="Achievements" span="2"/>

            {/* row 2 */}
            <DashboardTile size="lg" title="Progress Overview" span="3"/>  
            <DashboardTile size="lg" title="Community Forum" span="3"/>  
        </div>
    </div>
  );
}
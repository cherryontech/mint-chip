import Button from "../components/Button";

export default function Dashboard() {
  return (
      <div className="bg-white mx-[144px]">
      {/* title and button */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-playfair font-semibold text-eerie place-items-start mt-4">Welcome Back!</h1>
          <div className="w-full place-items-center">
            <Button 
              size='md'
              color='primary'
              label='Start a Task' 
              className="place-items-center"
            />
          </div>
        </div>
    </div>
  );
}
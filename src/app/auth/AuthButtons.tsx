import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className="flex gap-3 flex-1 md:flex-row flex-col relative z-50">
      <Button className="w-full md:flex-1" variant={"outline"}>
        Sign up
      </Button>
       <Button className="w-full md:flex-1">
        Login
      </Button>
    </div>
  );
};

export default AuthButtons;

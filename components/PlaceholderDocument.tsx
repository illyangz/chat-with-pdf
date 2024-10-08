"use client";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
function PlaceholderDocument() {
  const router = useRouter();

  const handleClick = () => {
    //listening to click to check if user is FREE tier
    //and if they are over the file upload limit,
    //push to the upgrade page.
    router.push("/dashboard/upload");
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-slate-200 drop-shadow-md text-slate-400"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Upload Document</p>
    </Button>
  );
}

export default PlaceholderDocument;

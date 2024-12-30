import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NewMerchButton = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="default"
        className="bg-[#000000e6] hover:bg-black text-white rounded-none gap-2"
        onClick={() => window.open('https://www.mckieresmusic.com/', '_blank')}
      >
        <ShoppingBag className="h-4 w-4" />
        Buy Merch
      </Button>
    </div>
  );
};
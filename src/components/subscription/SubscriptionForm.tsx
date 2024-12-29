import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubscriptionFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder: string;
  buttonText: string;
  isSubmitting: boolean;
}

export const SubscriptionForm = ({
  email,
  setEmail,
  onSubmit,
  placeholder,
  buttonText,
  isSubmitting,
}: SubscriptionFormProps) => (
  <form onSubmit={onSubmit} className="w-full space-y-3">
    <Input
      type="email"
      placeholder={placeholder}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="bg-white/90 text-sm"
      required
      disabled={isSubmitting}
    />
    <Button 
      type="submit" 
      className="w-full bg-orange-500 hover:bg-orange-600 text-sm"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Subscribing...
        </>
      ) : (
        buttonText
      )}
    </Button>
  </form>
);
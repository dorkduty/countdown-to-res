import { SubscriptionForm } from "./SubscriptionForm";

interface MovieSubscriptionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export const MovieSubscription = ({
  email,
  setEmail,
  onSubmit,
  isSubmitting,
}: MovieSubscriptionProps) => (
  <div className="p-6 bg-primary">
    <div className="flex flex-col items-center space-y-4">
      <img
        src="/lovable-uploads/dc48ccce-2d8f-4366-9d9c-44da187a43c6.png"
        alt="Life of Mike Movie Poster"
        className="w-48 h-48 object-cover rounded-lg shadow-lg"
      />
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-white">
          "Life of Mike" starring RES
        </h3>
      </div>
      <SubscriptionForm
        email={email}
        setEmail={setEmail}
        onSubmit={onSubmit}
        placeholder="Enter your email for free movie ticket"
        buttonText="Submit"
        isSubmitting={isSubmitting}
      />
    </div>
  </div>
);
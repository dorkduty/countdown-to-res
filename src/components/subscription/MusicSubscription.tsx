import { SubscriptionForm } from "./SubscriptionForm";

interface MusicSubscriptionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export const MusicSubscription = ({
  email,
  setEmail,
  onSubmit,
  isSubmitting,
}: MusicSubscriptionProps) => (
  <div className="p-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
    <div className="flex flex-col items-center space-y-4">
      <img
        src="/lovable-uploads/d84f923a-ca41-49c5-8f7d-78afa0bd5312.png"
        alt="RES Album Cover"
        className="w-48 h-48 object-cover rounded-lg shadow-lg"
      />
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-white">
          How I Do (RESET)
        </h3>
      </div>
      <SubscriptionForm
        email={email}
        setEmail={setEmail}
        onSubmit={onSubmit}
        placeholder="Enter email for free music download"
        buttonText="Download"
        isSubmitting={isSubmitting}
      />
    </div>
  </div>
);
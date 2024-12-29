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
        src="https://3a5ae66a6e58ba5f79caf8a72e703216.cdn.bubble.io/f1735514244512x915430778266064500/life%20of%20mike%20logo%20in%20theaters.png?_gl=1*aq74u8*_gcl_au*ODgzNzc2NDIyLjE3MzUwODQwODM.*_ga*MTY2MzU2NjI1LjE3MzQ0ODQ1MDI.*_ga_BFPVR2DEE2*MTczNTQ4ODgzNS43LjEuMTczNTUxNDIyOS40Mi4wLjA."
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

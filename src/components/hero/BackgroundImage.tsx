export const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/lovable-uploads/cc06fe20-a9e2-4d30-bbe4-91b50f03f583.png"
        />
        <img
          src="/lovable-uploads/af5a2352-690a-4a57-9036-e34c78f1159e.png"
          alt="RES artist promotional image"
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover md:object-center object-[40%] sm:object-[40%]"
          style={{ zIndex: 0 }}
        />
      </picture>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" 
        style={{ zIndex: 1 }}
      ></div>
    </div>
  );
};
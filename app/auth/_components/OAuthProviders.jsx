import React from "react";
import OAuthButton from "./OAuthButton";

const OAuthProviders = () => {
  const Providers = [
    { name: "Continue With Google", type: "google" },
    { name: "Continue With GitHub", type: "github" },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      {Providers.map((provider) => {
        return (
          <OAuthButton
            auth={provider}
            
            key={provider.name}
          />
        );
      })}
    </div>
  );
};

export default OAuthProviders;

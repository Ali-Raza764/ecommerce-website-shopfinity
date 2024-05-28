import { currentUser } from "@clerk/nextjs/server";
import OnboardingForm from "./OnboardingForm";
import Link from "next/link";

const OnBoardingPage = async () => {
  const { primaryEmailAddress, fullName, id } = await currentUser();

  return (
    <div className="w-full h-screen">
      <h1 className="text-3xl font-bold font-sans">OnBoarding</h1>
      <Link href={"/"}>Home Page</Link>
      <OnboardingForm
        email={primaryEmailAddress.emailAddress}
        name={fullName}
        id={id}
      />
    </div>
  );
};

export default OnBoardingPage;

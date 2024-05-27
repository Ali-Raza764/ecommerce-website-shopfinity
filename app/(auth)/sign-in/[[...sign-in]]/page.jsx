import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="w-full lg:h-screen flex items-center flex-row  lg:p-0">
      <div className="w-full  h-screen hidden  lg:flex items-center justify-center">
        <Image
          height={700}
          width={700}
          src={"/images/image.png"}
          alt="Image-1"
        />
      </div>
      <div className="h-full w-full flex items-center justify-center py-11">
        <SignIn
          appearance={{
            elements: {
              card: "bg-gray-50",
              formButtonPrimary:
                "bg-red-500 border-none outline-none text-white p-2",
              input: "p-2",
              socialButtonsBlockButton: "p-2",
              footerActionText: "text-md font-semibold",
              footerActionLink: "text-red-500 text-md font-bold",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;

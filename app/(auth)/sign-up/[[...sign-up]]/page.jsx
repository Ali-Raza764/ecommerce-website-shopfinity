import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="w-full h-screen flex items-center flex-row">
      <div className="w-full  h-full hidden  md:flex items-center justify-center">
        <Image
          height={700}
          width={700}
          src={"/images/image.png"}
          alt="Image-1"
        />
      </div>
      <div className="h-full w-full flex items-center justify-center flex-col  py-11">
        <SignUp
          
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
}

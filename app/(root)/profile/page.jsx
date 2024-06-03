import SignOutButton from "@/app/auth/components/SignOut";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <div className="flex items-center p-6 flex-col">
      <div className="mb-6">
        <h1>Signed In as {session.user.name}</h1>
        <p>{JSON.stringify(session)}</p>
      </div>
      <SignOutButton />
    </div>
  );
};

export default ProfilePage;

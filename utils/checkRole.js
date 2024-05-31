import { auth } from "@clerk/nextjs/server";

const checkRole = (role) => {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role === role) {
    return true;
  }
};
export default checkRole
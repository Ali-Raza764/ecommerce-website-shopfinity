import Link from "next/link";

const SignInButton = ({ className, href, children }) => {
  return (
    <Link href={href} className={"p-1 " + className}>
      {children}
    </Link>
  );
};

export default SignInButton;

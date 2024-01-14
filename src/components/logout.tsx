import { UserButton } from "@clerk/nextjs";

export default function Logout() {
  return <UserButton afterSignOutUrl="/" />;
}

import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
<div className="w-[100vw] h-[100vh] items-center align-middle flex flex-col justify-center">
<SignIn afterSignInUrl="/sync-user" />
</div>

  ) 
}
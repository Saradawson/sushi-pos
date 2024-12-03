import LoginForm from "@/app/login/loginForm";
import { createClient } from './api/supabase/sever'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  return (
    <div className="h-full w-1/3">
        <LoginForm />
    </div>
  );
}

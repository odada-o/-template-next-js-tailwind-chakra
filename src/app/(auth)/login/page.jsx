import Logo from "@/components/common/Logo";
import Checkbox from "@/components/form/Checkbox";
import Input from "@/components/form/Input";
import Button from "@/components/button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo size={10} />
          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form action="#" method="POST" className="space-y-6">
              <Input id="email" label="Email address" type="email" autoComplete="email" />
              <Input id="password" label="Password" type="password" autoComplete="current-password" />

              <div className="flex items-center justify-between">
                <Checkbox id="remember-me" label="Remember me" />

                <div className="text-sm/6">
                  <Button href="/signup" type="ghost" className="px-0 text-indigo-600">비밀번호를 잊으셨나요?</Button>
                </div>
              </div>

              <div>
                <Button type="solid" className="w-full">로그인</Button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm/6 font-medium">
                  <span className="bg-white px-6 text-gray-900">Or continue with</span>
                </div>
              </div>


              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button type="outline" icon={FcGoogle}>Google</Button>
                <Button type="outline" icon={FaGithub}>GitHub</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

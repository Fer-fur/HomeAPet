import Link from "next/link"


const LoginRedirect = () => {
  return (
    <Link href={'/login-register'}
        className="bg-green-400 h-20 w-full rounded-2xl text-white hover:bg-green-600 shadow-md flex justify-center items-center text-2xl"
    >
        Login / Register to adopt.
    </Link>
  )
}

export default LoginRedirect
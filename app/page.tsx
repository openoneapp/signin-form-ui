import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <section className="bg-gray-200 flex justify-center items-center h-screen text-gary-200">
      <div className="bg-white grid grid-cols-2 w-[650px] h-[400px]">
        <div className="w-full flex items-center justify-center overflow-hidden text-black">
          <form className="w-full grid grid-cols-1 text-center px-5 gap-4">
            <h1 className="font-semibold text-2xl">Signin</h1>
            <input
              type="text"
              className="p-2 bg-gray-100 rounded-md"
              placeholder="username"
            />
            <input
              type="password"
              className="p-2 bg-gray-100 rounded-md"
              placeholder="password"
            />
            <button className="bg-emerald-600 text-gray-100 p-4 rounded-md">
              Signin
            </button>
            <div className="w-full grid grid-cols-1 gap-3">
              <h4>or signin with</h4>
              <div className="flex justify-center text-white gap-3">
                <span className="bg-blue-800 p-1 rounded-full"><FaFacebookF/></span>
                <span className="bg-red-600 p-1 rounded-full"><FaGooglePlusG/></span>
                <span className="bg-blue-700 p-1 rounded-full"><FaLinkedinIn/></span>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-500 flex items-center justify-center text-white">
          <div className="text-center px-4 space-y-3 ">
            <h1 className="text-lg font-semibold">Welcome back!</h1>
            <p className="text-sm font-light pb-5">
              Welcome back! we are so happy to have you here, it's great to see you again. We hope you had a safe and enjoyable time away.
            </p>
            <span className="text-sm font-light bg-emerald-500 p-4 rounded-full">
              No account yet? <a href="#">Signup</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

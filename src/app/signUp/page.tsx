import { Kumar_One, Inter } from "next/font/google";
import Link from 'next/link'


const kumar = Kumar_One({
    weight: '400',
    subsets: ['latin']
  })
  
  const inter = Inter({
    weight: '400',
    subsets: ['latin']
  })

export default function signUp() {
    const backgroundStyle = {
        backgroundImage: 'url("/images/frame.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',

    };
    return (
        <main className="w-full flex ">
            <div style={backgroundStyle} className="w-1/3 flex  items-center justify-center flex-col">
                <img className="w-22 h-22" src="/images/logoyt.png" />
                <span className={`${kumar.className} text-white text-4xl mt-5`}>Welcome Back! </span>
                <span  className={`${inter.className} text-white text-2xl`} >Already have an account? </span>
                <span className={`${inter.className} text-white text-2xl`}>Login your personal information. </span>
                <button className="bg-white text-btn-color py-5 mt-7 text-xl border px-10 rounded-lg border-none shadow-md">
         <Link href="">
          Login
          </Link>

          </button>
            </div>
            <div className="w-2/3 bg-red-800 flex flex-col h-screen">
                
            </div>
        </main>
    )
}
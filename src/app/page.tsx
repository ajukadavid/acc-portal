import { Kumar_One, Open_Sans } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link'

const kumar = Kumar_One({
  weight: '400',
  subsets: ['latin']
})

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  const currentYear =  new Date().getFullYear()
  const backgroundStyle = {
    backgroundImage: 'url("/splashBg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
  };

  return (
    <main className="bg-white">
      <nav className="flex py-3 px-5 sticky top-0 bg-white justify-between items-center">
        <img src="/logo.png" />
        <div className="flex space-x-4">
          <button className="border-gray-400 border px-7 py-1 shadow-md rounded-lg text-gray-400"> 
            <Link href="/logIn">
             Log in
          </Link>
          </button>
        
         <button className="bg-btn-color border px-7 rounded-lg border-none shadow-md text-white">
         <Link href="/signUp">
          Sign Up
          </Link>

          </button>
        </div>
      </nav>
      <div style={backgroundStyle} className="flex flex-col items-center justify-center">
        <div className={`${kumar.className} text-splash-color flex flex-col text-left text-8xl`}>
          <p className="self-center">Winners</p>
          <p>Accomodation</p>
          <p className="self-center">Portal</p>
        </div>
        <div>
          <button className="border shadow-md mt-8 rounded-lg  text-white border-btn-color bg-btn-color px-8 py-5 text-2xl">
          
          <Link className="flex items-center  space-x-6" href="/reservations">
          <span>Make Reservations</span>
            <FaArrowRight />
          </Link>
           
          </button>
        </div>
        <div className="absolute bottom-0">
          <p className={open_sans.className}>
          <span className="text-white mt-11 tracking-widest">&#169; {currentYear} Winners Accomodation Portal</span>
          </p>
       </div>

      </div>
   
    </main>
  );
}

import Image from "next/image";
import { Kumar_One } from "next/font/google";

const kumar = Kumar_One({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
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
      <nav className="flex p-3 justify-between items-center">
        <img src="/logo.png" />
        <div className="flex space-x-4">
          <button className="border-gray-400 border px-7 py-1 shadow-md rounded-lg text-gray-400">Log in</button>
          <button className="bg-btn-color border px-7 rounded-lg border-none shadow-md">Sign Up</button>
        </div>
      </nav>
      <div style={backgroundStyle} className="flex flex-col items-center justify-center">

        <div className={`${kumar.className} text-splash-color flex flex-col text-left text-8xl`}>
          <p className="self-center">Winners</p>
          <p>Accomodation</p>
          <p className="self-center">Portal</p>
        </div>
      <div className="flex ">
      <button className="border  border-btn-color bg-btn-color px-16 py-5 text-2xl">
        <span className="text-white">Make Reservations</span>
      </button>

      </div>
      </div>
    </main>
  );
}

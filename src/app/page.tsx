import Image from "next/image";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("/splashBg.jpg")', // Use the public folder path
    backgroundSize: 'cover',   // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image within the div
    backgroundRepeat: 'no-repeat', // Prevents image from repeating
    height: '100vh',           // Sets height to 100% of the viewport height
    width: '100vw',            // Sets width to 100% of the viewport width
  };

  return (
    <main className="bg-white">
      <nav className="flex p-5 justify-between items-center">
        <img src="/logo.png" />
        <div className="flex space-x-4">
          <button className="border-gray-400 border px-7 py-1 shadow-md rounded-lg text-gray-400">Log in</button>
          <button className="bg-btn-color border px-7 rounded-lg border-none shadow-md">Sign Up</button>
        </div>
      </nav>
      <div style={backgroundStyle}>
    HOLA
      </div>
    </main>
  );
}

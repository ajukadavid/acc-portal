import { Kumar_One } from "next/font/google";



const kumar = Kumar_One({
    weight: '400',
    subsets: ['latin']
  })



export default function Reserve(){

    const backgroundStyle = {
        backgroundImage: 'url("/images/frame.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
    
    return(
        <main>
            <div style={backgroundStyle} className="w-full h-52">
                <div className="flex justify-between">
                <span className="text-white">Make Reservation</span>
                <img src="/images/logoyt.png" />
                </div>
            </div>
        </main>
    )
}
"use client";

import { Kumar_One, Inter } from "next/font/google";
import Link from 'next/link'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface DialCode {
    dial_code: string;
    name: string;
    // Add other properties if needed
  }

const kumar = Kumar_One({
    weight: '400',
    subsets: ['latin']
})

const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

export default function signUp() {
    const [data, setData] = useState<DialCode[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('/data/data.json') // Adjust the path to your JSON file
            .then((response) => response.json())
            .then((jsonData: DialCode[]) => {
                setData(jsonData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
                setIsLoading(false);
            });
    }, []);
    

    const backgroundStyle = {
        backgroundImage: 'url("/images/frame.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',

    };
    return (
        <main className="w-full flex">
            {/* Loading State */}
            {isLoading ? (
                <div className="w-full flex justify-center items-center">
                    <span>Loading...</span>
                </div>
            ) : (
                // Main content after loading is complete
                <div className="w-full flex">
                    <div style={backgroundStyle} className="w-1/3 flex items-center justify-center flex-col">
                        <img className="w-22 h-22" src="/images/logoyt.png" />
                        <span className="text-white text-4xl mt-5">Welcome Back! </span>
                        <span className="text-white text-2xl">Already have an account? </span>
                        <span className="text-white text-2xl">Login your personal information. </span>
                        <button className="bg-white text-btn-color py-5 mt-7 text-xl border px-10 rounded-lg border-none shadow-md">
                            <Link href="">
                                Login
                            </Link>
                        </button>
                    </div>
                    <div className="w-2/3 px-40 items-center flex flex-col h-screen">
                        <span className="text-black mb-5 text-4xl mt-20">Create Account</span>
    
                        <div className="flex flex-col w-full space-y-6">
                            <div className="w-full">
                                <Label className="font-bold text-base mb-3" htmlFor="userid">User ID</Label>
                                <Input id="userid" disabled placeholder="User ID" className="bg-input-disabled mt-2 border-none rounded-sm focus-visible:ring-0" />
                            </div>
                            <div className="w-full">
                                <Label className="font-bold text-base mb-3" htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="First name" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                            </div>
                            <div className="w-full">
                                <Label className="font-bold text-base mb-3" htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Last name" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                            </div>
    
                            <Label>Gender</Label>
                            <RadioGroup defaultValue="option-one" className="flex">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem className="w-5 h-5 text-btn-color bg-gray-100 border-gray-300 focus:ring-btn-color dark:focus:ring-btn-color dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Male</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem className="w-5 h-5 text-btn-color bg-gray-100 border-gray-300 focus:ring-btn-color dark:focus:ring-btn-color dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Female</Label>
                                </div>
                            </RadioGroup>
    
                            <div>
                                <Label htmlFor="option-two" className="font-bold text-base">Phone Number (WhatsApp)</Label>
                                <div className="w-full flex items-center mt-2 space-x-4">
                                    <div className="w-1/4">
                                        <Select>
                                            <SelectTrigger className="w-full border border-btn-color focus:ring-0">
                                                <SelectValue placeholder="+234" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {data && data.map((item) => (
                                                    <SelectItem key={item.dial_code} value={item.dial_code}>{item.name}: {item.dial_code}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-3/4">
                                        <Input id="phone" placeholder="Phone number" className="bg-input-bg border border-btn-color rounded-sm focus-visible:ring-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
    
}
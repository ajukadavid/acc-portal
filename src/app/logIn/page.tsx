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

import { Textarea } from "@/components/ui/textarea";

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


    

    const backgroundStyle = {
        backgroundImage: 'url("/images/frame.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',


    };
    return (
        <main className="w-full">
                <div className="w-full h-screen items-stretch flex">
                <div className="w-2/3 px-40 pb-10 overflow-auto items-center flex flex-col">
                        <span className={`${kumar.className} text-black mb-5 text-4xl mt-20`} >Login</span>
    
                        <div className="flex flex-col w-full space-y-6">
                            <div className="w-full">
                                <Label className="font-bold text-base mb-3" htmlFor="email">Email address</Label>
                                <Input id="email" placeholder="Email address" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                            </div>
                            <div className="w-full">
                                <Label className="font-bold text-base mb-3" htmlFor="password">Password <sup>*</sup></Label>
                                <Input id="password" type="password" placeholder="Password" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                            </div>
                            <div className="flex justify-end">
                                <span>Forgot password</span>
                            </div>
                        </div>
                        <button className="text-white bg-btn-color py-3 mt-7 text-xl border w-full rounded-lg border-none shadow-md">
                            <Link href="">
                                Login
                            </Link>
                        </button>
                    </div>
                    <div style={backgroundStyle} className="w-1/3 bg-red-600 flex items-center justify-center flex-col">
                        <img className="w-22 h-22" src="/images/logoyt.png" />
                        <span className={`${kumar.className} text-white text-4xl mt-5`} >Hello Friend </span>
                        <span className="text-white text-2xl">Already have an account? </span>
                        <span className="text-white text-2xl">Sign up now to get started! </span>
                        <button className="bg-white text-btn-color py-5 mt-7 text-xl border px-10 rounded-lg border-none shadow-md">
                            <Link href="">
                                Sign up
                            </Link>
                        </button>
                    </div>
                 
                </div>
            
        </main>
    );
    
}
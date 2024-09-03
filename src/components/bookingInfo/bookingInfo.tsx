import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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


export default function BookingInfo() {
    const [data, setData] = useState<DialCode[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const vals = Array.from({ length: 10 }, (_, index) => index + 1);



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
    return (
        <main>
            {isLoading ? (
                <div className="w-full flex justify-center items-center">
                    <span>Loading...</span>
                </div>
            ) : (
                <div className="flex w-full mt-10 px-16  justify-between">
                    <div className="grid grid-cols-2 w-full gap-x-5 gap-y-4">
                        <div className="w-full">
                            <Label className="font-bold text-base mb-3" htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="First name" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                        </div>
                        <div className="w-full">
                            <Label className="font-bold text-base mb-3" htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Last name" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                        </div>
                        <div className="w-full">
                            <Label className="font-bold text-base mb-3" htmlFor="gender">Gender</Label>
                            <Input id="gender" placeholder="Male or Female" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                        </div>
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
                        <div className="w-full">
                            <Label className="font-bold text-base mb-3" htmlFor="town">Town/City</Label>
                            <Input id="town" placeholder="Town" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                        </div>
                        <div className="w-full">
                            <Label className="font-bold text-base mb-3" htmlFor="firstname">Country</Label>
                            <Input id="country" placeholder="Country" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                        </div>
                        <div>
                            <Label htmlFor="option-two" className="font-bold text-base">Adults</Label>
                            <div className="w-full flex items-center mt-2 space-x-4">
                                <div className="w-full">
                                    <Select>
                                        <SelectTrigger className="w-full border border-btn-color focus:ring-0">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {vals.map((item) => (
                                                <SelectItem key={item} value={item.toString()}>{item}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                               
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="option-two" className="font-bold text-base">Children</Label>
                            <div className="w-full flex items-center mt-2 space-x-4">
                                <div className="w-full">
                                    <Select>
                                        <SelectTrigger className="w-full border border-btn-color focus:ring-0">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {vals.map((item) => (
                                                <SelectItem key={item} value={item.toString()}>{item}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                               
                            </div>
                        </div>
                    </div>




                </div>
            )}
        </main>

    )
}
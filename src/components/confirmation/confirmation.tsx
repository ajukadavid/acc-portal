import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Confirmation() {
    return (
        <main>
            <div>
                <div className="w-full">
                                <Label className="font-bold text-base mb-3" htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="First name" className="bg-input-bg mt-2 border border-btn-color rounded-sm focus-visible:ring-0" />
                </div>
            </div>
        </main>
    )
}
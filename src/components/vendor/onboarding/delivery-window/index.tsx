/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FHmVnXqvp5t
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function DeliveryWindow() {
    return (
        <div className="bg-white p-4 shadow-md">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg font-semibold">Delivery Days and times</h2>
                <InfoIcon className="text-gray-400" />
            </div>
            <div className="grid grid-cols-7 gap-4">
                <div className="flex flex-col space-y-2">
                    <span className="font-medium">Sunday</span>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="sunday-morning" />
                        <Label htmlFor="sunday-morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="sunday-afternoon" />
                        <Label htmlFor="sunday-afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="sunday-evening" />
                        <Label htmlFor="sunday-evening">Evening</Label>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="font-medium">Monday</span>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="monday-morning" />
                        <Label htmlFor="monday-morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="monday-afternoon" />
                        <Label htmlFor="monday-afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="monday-evening" />
                        <Label htmlFor="monday-evening">Evening</Label>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="font-medium">Tuesday</span>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="tuesday-morning" />
                        <Label htmlFor="tuesday-morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="tuesday-afternoon" />
                        <Label htmlFor="tuesday-afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="tuesday-evening" />
                        <Label htmlFor="tuesday-evening">Evening</Label>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="font-medium">Wednesday</span>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="wednesday-morning" />
                        <Label htmlFor="wednesday-morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="wednesday-afternoon" />
                        <Label htmlFor="wednesday-afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="wednesday-evening" />
                        <Label htmlFor="wednesday-evening">Evening</Label>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="font-medium">Thursday</span>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="thursday-morning" />
                        <Label htmlFor="thursday-morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="thursday-afternoon" />
                        <Label htmlFor="thursday-afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="thursday-evening" />
                        <Label htmlFor="thursday-evening">Evening</Label>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="font-medium">Friday</span>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="friday-morning" />
                        <Label htmlFor="friday-morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="friday-afternoon" />
                        <Label htmlFor="friday-afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="friday-evening" />
                        <Label htmlFor="friday-evening">Evening</Label>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="font-medium">Saturday</span>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="saturday-morning" />
                        <Label htmlFor="saturday-morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="saturday-afternoon" />
                        <Label htmlFor="saturday-afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="saturday-evening" />
                        <Label htmlFor="saturday-evening">Evening</Label>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    );
}

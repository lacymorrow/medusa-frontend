/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QCVSi1q8k3O
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function VendorInformation() {
    return (
        <div className="max-w-4xl mx-auto my-8 p-8">
            <h1 className="text-3xl font-bold mb-2">Business information</h1>
            <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ......
            </p>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Add Business information</h2>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ......
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="account-owner">Account Owner Name</Label>
                        <Input id="account-owner" placeholder="Account Owner Name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="Email Address" />
                    </div>
                    <div>
                        <Label htmlFor="business-name">
                            Legal Business Name / Entity Name
                        </Label>
                        <Input
                            id="business-name"
                            placeholder="Legal Business Name / Entity Name"
                        />
                    </div>
                    <div>
                        <Label htmlFor="ein">EIN</Label>
                        <Input id="ein" placeholder="EIN" />
                    </div>
                    <div>
                        <Label htmlFor="mailing-address">Corporate Mailing Address</Label>
                        <Input
                            className="col-span-2"
                            id="mailing-address"
                            placeholder="Corporate Mailing Address"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Add Nursery Location</h2>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ......
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="location-name">Location Name</Label>
                        <Input id="location-name" placeholder="Location Name" />
                    </div>
                    <div>
                        <Label htmlFor="location-address">Location Address</Label>
                        <Input id="location-address" placeholder="Location Address" />
                    </div>
                    <div>
                        <Label htmlFor="delivery-radius">Location Delivery Radius</Label>
                        <Input
                            id="delivery-radius"
                            placeholder="Location Delivery Radius"
                        />
                    </div>
                    <div>
                        <Label htmlFor="nursery-email">Nursery Email Address</Label>
                        <Input id="nursery-email" placeholder="Nursery Email Address" />
                    </div>
                    <div>
                        <Label htmlFor="manager-name">Nursery Manager Full Name</Label>
                        <Input id="manager-name" placeholder="Nursery Manager Full Name" />
                    </div>
                    <div>
                        <Label htmlFor="manager-number">
                            Nursery Manager Direct number?
                        </Label>
                        <Input
                            id="manager-number"
                            placeholder="Nursery Manager Direct number?"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <Button variant="outline">Back</Button>
                <Button>Save</Button>
            </div>
        </div>
    );
}

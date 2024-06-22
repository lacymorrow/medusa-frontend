/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7s7blGLHHPA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import DeliveryWindow from "@/components/vendor/onboarding/delivery-window";

export default function DeliveryDetails() {
    return (
        <>
            <div className="bg-white p-8">
                <h1 className="text-4xl font-bold mb-2">Delivery Details</h1>
                <p className="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ......
                </p>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Delivery distance</h2>
                    <p className="mb-4">
                        Select Delivery distance for this location and accept prices
                    </p>
                    <div className="flex items-center mb-4">
                        <span className="text-lg">0</span>
                        <Slider
                            className="mx-4 w-full"
                            defaultValue={[0.5]}
                            max={15}
                            step={0.5}
                        />
                        <span className="text-lg">15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>
                            0-5 miles = Florish Pays{" "}
                            <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">
                                $15
                            </span>
                        </span>
                        <span>
                            5-10 miles = Florish Pays{" "}
                            <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">
                                $25
                            </span>
                        </span>
                        <span>
                            10-15 miles = Florish Pays{" "}
                            <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">
                                $45
                            </span>
                        </span>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Delivery Days and times
                    </h2>
                    <p className="mb-4">
                        Select Delivery Days and times for this location
                    </p>
                    <div className="grid grid-cols-7 gap-4" />
                </div>
                <div className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Save</Button>
                </div>
            </div>
            <DeliveryWindow />
        </>
    );
}

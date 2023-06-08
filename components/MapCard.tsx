/* eslint-disable @next/next/no-img-element */
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "@/components/Card";

function MapCard() {
    return (
        <div className="flex h-full overflow-hidden">
            <Card>
                <div className="relative bg-gradient-to-br from-gray-700 to-gray-900">
                    <img
                        src={`https://maps.googleapis.com/maps/api/staticmap?center=Sydney, Australia&zoom=12&size=800x500&maptype=roadmap&key=${process.env.GOOGLE_API_KEY}`}
                        className="h-full w-full scale-125 bg-contain transition-all duration-700 ease-in-out hover:scale-150 opacity-70 hover:opacity-100"
                        alt="Location map for Sydney, NSW"
                    />
                    <h1 className="text-md absolute bottom-2 left-4 cursor-default rounded-full bg-gradient-to-br from-blue-500 to-blue-700 px-4 py-2">
                        <FontAwesomeIcon
                            icon={faLocationArrow}
                            className="mr-2"
                        />
                        Location
                    </h1>
                </div>
            </Card>
        </div>
    );
}

export default MapCard;

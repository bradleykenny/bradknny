import Card from "@/components/Card";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MapCard() {
  return (
    <div className="col-span-2">
    <Card>
      <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 w-full h-full col-span-3">
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=Sydney, Australia&zoom=10&size=800x500&maptype=roadmap&key=${process.env.GOOGLE_API_KEY}`}
          className="scale-125 transition-all ease-in-out m h-full w-full bg-contain"
          alt="Location map for Sydney, NSW"
        />
        <h1 className="absolute bottom-4 left-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 px-4 py-2 text-md">
        <FontAwesomeIcon icon={faLocationArrow}  className="mr-2"/>
          Location
        </h1>
      </div>
    </Card>
    </div>
  );
}

export default MapCard;

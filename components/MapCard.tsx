import Card from "@/components/Card";

function MapCard() {
  return (
    <Card>
      <div className="relative bg-gradient-to-br from-gray-700 to-gray-900">
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=Sydney, Australia&zoom=11&size=600x300&maptype=roadmap&key=${process.env.GOOGLE_API_KEY}`}
          className="opacity-30 blur-sm transition-all ease-in-out hover:blur-none"
        />
        <h1 className="absolute left-10 top-10 text-4xl font-black">
          Sydney, AU
        </h1>
      </div>
    </Card>
  );
}

export default MapCard;

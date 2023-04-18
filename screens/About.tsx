import Card from "@/components/Card";
import MapCard from "@/components/MapCard";
import { about } from "@/config/about";

function About() {
  return (
    <div>
      {about.map((item, idx) => (
        <div key={idx}>{idx}</div>
      ))}
      <MapCard />
    </div>
  );
}

export default About;

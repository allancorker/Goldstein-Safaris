import { FaUsers, FaCheckCircle, FaMapMarkerAlt, FaHandsHelping, FaGlobe, FaHeart } from "react-icons/fa";
import small from "../../assets/small.png"
import hundred from "../../assets/100.png"
import flex from "../../assets/flex.png"
import jei from "../../assets/J.png"
import local from "../../assets/local.png"
import built from "../../assets/built.png"






const Why = () => {
  const features = [
    { icon: small, title: "Small Groups", description: "Join a small group of like-minded travelers eager to safely and confidently explore the world." },
    { icon: hundred, title: "Guaranteed Departures", description: "Pack your bags stress-free—our departures are 100% guaranteed as long as it's safe to go!" },
    { icon: local, title: "Locally Based Guides", description: "At JtOURS, our Chief Experience Officers know every destination like the back of their hand." },
    { icon: built, title: "Support Local Communities", description: "We build meaningful relationships with local communities, directly benefiting the people and places we visit." },
    { icon:flex, title: "Flexibility, Freedom, Fun", description: "Enjoy well-planned itineraries with the flexibility to explore and make the journey your own." },
    { icon: jei, title: "J for Good", description: "Experience firsthand our commitment to making travel a force for good in everything we do." },
  ];

  return (
    <div className=" bg-secondary_gray">
    <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
      <h2 className="text-3xl font-bold text-left  text-gray-800">Why Travel with JtOURS?</h2>
      <h2 className="py-2">As the leader in small group adventure travel for 30+ years, we've redefined the way travellers see the world. Check out how we’re creating the future of travel.</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start space-x-4 p-4   rounded-2xl  bg-white">
           <div className="flex justify-center items-center gap-2 py-6">
            <img src={feature.icon} className="w-12 h-12" alt="image"/>
            <h3 className="text-xl  text-gray-900">{feature.title}</h3>
            </div>

            <div>
              <p className="text-gray-600 mb-8">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Why;

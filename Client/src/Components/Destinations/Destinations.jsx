import kenya from "../../assets/kenya.jpeg"
import tanzania from "../../assets/tanzania.jpeg"
import uganda from "../../assets/uganda.jpeg"
import zanzibar from "../../assets/zanzibar.jpeg"

import rwanda from "../../assets/rwanda.jpeg"




const Destinations = () => {
    const destinations = [
      { name: "Kenya", image: kenya},
      { name: "Zanzibar", image: zanzibar },
      { name: "Tanzania", image: tanzania },
      { name: "Rwanda", image: rwanda},
      { name: "Uganda", image: uganda },
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Explore Our Private Safaris</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hover:hidden bg-black bg-opacity-50
               cursor-pointer flex justify-center items-center">
                <h3 className="text-lg md:text-xl font-semibold text-white hover:hidden">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Destinations;
  
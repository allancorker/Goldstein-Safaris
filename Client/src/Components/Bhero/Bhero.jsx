import React from 'react';
import tour1 from "../../assets/tour1.jpeg";
import tour2 from "../../assets/tour2.jpeg";
import tour3 from "../../assets/tour3.jpeg";

const Bhero = () => {
    return (
        <div className="py-10 min-h-[40vh] px-6 md:px-16 flex flex-col items-center bg-gradient-to-b from-gray-100 via-white to-orange-300">
            <h1 className="text-3xl md:text-4xl font-bold py-6">The Goldstein Safaris Difference</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
                {[ 
                    { image: tour1, title: "Expertly Designed", text: "We get it. You’re not the homebody type. We aren’t either. Your passion, needs, and desires have shaped our business. Destination experts hand-craft transformative experiences designed specifically with you – our fellow traveler – at heart. We wouldn't trust your experience with anyone else." },
                    { image: tour2, title: "Guided Touring Reimagined", text: "We know you want to explore and also dive in. We’re curious travelers, just like you, so rest assured, you’ll experience must-sees and connect with the people and culture that define the destination. You’ll eat in locals’ homes, take cooking classes, travel by trains and tuk tuks, explore cities with food tours, and stay in igloos, castles, and chateaus." },
                    { image: tour3, title: "Value Beyond Price", text: "Your time is one of your most precious commodities, so you should spend more of it in the destination, not driving between places. We design tours that spend the fewest hours on the coach. One-night stays are a rarity. This is your trip, and you shouldn’t feel rushed. With choice, flexibility, and free time, take it all in – this is your tour." }
                ].map((item, index) => (
                    <div key={index} className="p-4 flex flex-col items-center ">
                        <img src={item.image} className="'max-w-full w-48 border-8  max-h-full h-48  border-gray-300 rounded-full object-cover" alt="Tour" />

                        <h2 className="text-xl md:text-2xl font-semibold py-3">{item.title}</h2>

                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bhero;

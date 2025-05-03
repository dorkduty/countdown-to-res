import React from "react";

export const TourDates = () => {
  const dates = [
    { location: "Chicago", date: "June 7th", link: "#", label: "Available Soon" },
    { location: "Newark", date: "June 28", link: "#", label: "Available Soon" },
    { location: "Chicago", date: "July 12th", link: "#", label: "Available Soon" },
    { location: "Atlanta", date: "July 16th", link: "https://citywinery.com/atlanta/events/res-pres-the-life-of-mike-tour-ubnily", label: "Buy Tickets" },
    { location: "Philadelphia", date: "July 24th", link: "#", label: "Available Soon" },
    { location: "New York City", date: "TBA", link: "#", label: "Available Soon" },
  ];

  return (
    <div id="tour-dates" className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
      <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Upcoming Tour Dates
      </h3>
      <ul className="space-y-4 max-w-3xl mx-auto px-4">
        {dates.map((tour, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="text-lg font-medium text-gray-800">{tour.location}</span>
            <span className="text-gray-600">{tour.date}</span>
            <a
              href={tour.link}
              className="px-4 py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg hover:opacity-80 transition-opacity"
            >
              {tour.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourDates;
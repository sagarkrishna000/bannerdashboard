import React, { useState, useEffect } from "react";
import { formatDistanceToNowStrict } from "date-fns";

const Banner = ({ banner, onUpdate }) => {
  const [timeLeft, setTimeLeft] = useState(banner.timer);
  const [showBanner, setShowBanner] = useState(banner.visibility);

  useEffect(() => {
    if (banner.visibility) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
            setShowBanner(false);
            onUpdate({ ...banner, visibility: false });
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [banner, onUpdate]);

  useEffect(() => {
    setTimeLeft(banner.timer);
    setShowBanner(banner.visibility);
  }, [banner.timer, banner.visibility]);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-[#1B1011] to-[#141010] text-white p-6 text-center rounded-lg shadow-lg border border-gray-800 mb-2">
      <h1 className="text-2xl font-bold mb-2">{banner.description}</h1>
      <p className="text-xs font-medium mb-4">
        Time Remaining:{" "}
        {formatDistanceToNowStrict(new Date(Date.now() + timeLeft * 1000), {
          addSuffix: true,
        })}
      </p>
      <a
        href={banner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-rose-600 px-4 py-2 rounded-lg hover:bg-rose-500 transition-colors duration-300"
      >
        Explore
      </a>
    </div>
  );
};

export default Banner;

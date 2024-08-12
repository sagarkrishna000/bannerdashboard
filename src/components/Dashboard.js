import React, { useState } from "react";

const Dashboard = ({ banner, updateBanner }) => {
  const [description, setDescription] = useState(banner.description);
  const [timer, setTimer] = useState(banner.timer);
  const [link, setLink] = useState(banner.link);
  const [visibility, setVisibility] = useState(banner.visibility);

  const handleSave = () => {
    const updatedBanner = { description, timer, link, visibility };
    updateBanner(updatedBanner);
  };

  return (
    <div className="p-10 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4 text-red-500">Dashboard</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-400">
          Banner Settings
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-white font-medium">
              Banner Description:
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border border-gray-600 rounded-lg w-full bg-gray-900 text-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="block text-white font-medium">
              Banner Timer (seconds):
            </label>
            <input
              type="number"
              value={timer}
              onChange={(e) => setTimer(e.target.value)}
              className="p-2 border border-gray-600 rounded-lg w-full bg-gray-900 text-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="block text-white font-medium">Banner Link:</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="p-2 border border-gray-600 rounded-lg w-full bg-gray-900 text-white"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={visibility}
              onChange={() => setVisibility(!visibility)}
              className="mr-2"
            />
            <label className="text-white">Show Banner</label>
          </div>
          <button
            onClick={handleSave}
            className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

const States = () => {
  return (
    <div className="bg-purple-500 py-13 text-white">
      <div className="text-center container mx-auto">
        <h2 className="text-3xl font-bold mb-5">Trusted by Millions, Built for You</h2>

        <div className="flex justify-center gap-15">
          <div className="space-y-2">
            <p>Total Downloads</p>
            <h2 className="font-bold text-4xl">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-2">
            <p>Total Reviews</p>
            <h2 className="font-bold text-4xl">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div className="space-y-2">
            <p>Active Apps</p>
            <h2 className="font-bold text-4xl">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;

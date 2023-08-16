import React from "react";
import { data } from "../assets/data";

const Analytics = () => {
  return (
    <div className=" min-h-max w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 rounded" src={data[0].image} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-green-400 font-bold text-xl">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p className="text-xl">
            Unlock the true potential of your organization's data landscape with
            our cutting-edge Data Analytics Centralization Services. Revel in
            the power of comprehensive insights as our services reveal hidden
            correlations, enabling innovation and growth. Seamlessly balancing
            control and flexibility, we tailor analytics to your unique needs,
            transforming raw data into a strategic asset. Join us in
            revolutionizing data analytics, where human-like expertise meets
            technological prowess, and steer your enterprise towards a future
            defined by data-driven excellence.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium 
        my-6 py-3 mx-auto md:mx-0 text-green-400">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

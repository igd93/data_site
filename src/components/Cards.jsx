import React from "react";
import { data } from "../assets/data";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/*Option 1 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={data[1].image}
            alt="Single User"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            <button
              className=" bg-green-400 text-black rounded-full 
                font-medium w-[200px] ml-4 my-6 px-6 py-3"
            >
              Start Trial
            </button>
          </div>
        </div>
        {/* Option 2*/}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={data[2].image}
            alt="Double User"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 5 GB</p>
            <button
              className=" bg-green-400 text-black rounded-full 
                font-medium w-[200px] ml-4 my-6 px-6 py-3"
            >
              Start Trial
            </button>
          </div>
        </div>
        {/* Option 3 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={data[3].image}
            alt="Triple User"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$375</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">3 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 15 GB</p>
            <button
              className=" bg-green-400 text-black rounded-full 
                font-medium w-[200px] ml-4 my-6 px-6 py-3"
            >
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

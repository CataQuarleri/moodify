import React from 'react';
import img from '../assets/img.jpg';
import { Link } from 'react-router-dom';

function HomeCallToAction() {
  return (
    <div className="flex flex-col md:flex-row w-full  items-center md:items-stretch justify-center gap-2 md:gap-52">
      <div className="pt-16 flex flex-col gap-4 md:w-3/12 w-10/12">
        <h2 className="text-2xl text-turquoise-100 ">
          Welcome to our mood social media app
        </h2>
        <p className="text-lg w-full md:w-8/12 text-indigo-100">
          Start today, share your mood with us!
        </p>
        <button className="bg-pink-100 w-3/12 rounded-md py-1 font-primary text-yellow-100 hover:bg-violet-100">
          <Link to="/login">START</Link>
        </button>
      </div>
      <img src={img} alt="moods" className="w-72 md:w-96 h-72 md:h-96 mt-6" />
    </div>
  );
}

export default HomeCallToAction;

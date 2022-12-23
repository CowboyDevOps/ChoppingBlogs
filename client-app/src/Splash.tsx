import blogPhoto from "./images/blog-photo.avif";
import { textP } from "./blogging-text/splash-p";
import { useEffect, useState } from "react";

import classPhoto from "./images/class-logo.png";
import { Link } from "react-router-dom";
import { signUpRoute } from "./lib/routes";
import TransitionX from "./components/transitionX";
import CreatorCard from "./components/CreatorCard";
import { CreatorType, portType } from "./lib/types";

export type SplashType = {
  creators: CreatorType[];
  countdown: number;
};

export const Splash = ({ creators, countdown }: SplashType) => {
  const leftCreators = () => {
    return creators.filter((creator: CreatorType, index: number) => {
      if (index % 2 !== 0) {
        return creator;
      } else return false;
    });
  };

  const rightCreators = () => {
    return creators.filter((creator: CreatorType, index: number) => {
      if (index % 2 === 0) {
        return creator;
      } else return false;
    });
  };

  return (
    <section className="w-screen h-screen">
      {countdown > 0 ? (
        <div className="w-screen h-screen  absolute animate-fade flex justify-center items-center">
          <img className="w-32 mb-16" src={classPhoto} alt="class photo" />
        </div>
      ) : null}
      <div className=" w-full h-full sm:h-3/5 bg-white flex flex-col sm:flex-row">
        <div
          role="title/description container"
          className="sm:w-7/12 w-full  h-full flex flex-col justify-center items-center"
        >
          <h1 className="text-2xl font-bold mb-5">
            This is our Choppings Blogs
          </h1>
          <p className="w-4/5 font-thin mb-5">{textP}</p>
          <Link className="self-start" to={signUpRoute}>
            <button className="self-start ml-10 lg:ml-24 w-24 h-10 rounded-2xl bg-blue-300 hover:underline hover:bg-blue-500 focus:bg-blue-500">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-96 rounded-md mr-5"
            src={blogPhoto}
            alt="person using laptop"
          />
        </div>
      </div>
      <div className="w-full h-3-5 bg-orange-100 flex justify-between">
        <div className="w-1/2 h-full flex flex-col items-start justify-around mt-10 bg bg-transparent">
          {leftCreators().map((creator: CreatorType) => {
            return (
              <TransitionX execute={creator.execute} post={20} pre={0}>
                <CreatorCard creator={creator} />
              </TransitionX>
            );
          })}
        </div>
        <div className="w-1/2 h-full flex flex-col items-end justify-around mt-32 bg bg-transparent">
          {rightCreators().map((creator: CreatorType) => {
            return (
              <TransitionX execute={creator.execute} post={-20} pre={0}>
                <CreatorCard creator={creator} />
              </TransitionX>
            );
          })}
        </div>
      </div>
      <div className="w-full h-4/5 bg-orange-100"></div>
      <div className="w-full h-2/5 bg-white"></div>
    </section>
  );
};

export default Splash;

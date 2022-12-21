import blogPhoto from "./images/blog-photo.avif";
import { textP } from "./blogging-text/splash-p";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import classPhoto from "./images/class-logo.png";
import { Link } from "react-router-dom";
import { signUpRoute } from "./lib/routes";
import TransitionX from "./components/transitionX";

export const Splash = () => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
  }, [countdown]);

  const [execute, setExecute] = useState(true);
  return (
    <section className="w-screen h-screen overflow-y-auto">
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
      <div className="w-full h-2/5 bg-orange-100">
        <TransitionX execute={execute}>
          <h1 onClick={() => setExecute((pre) => !pre)}>WTF is going on</h1>
        </TransitionX>
      </div>
      <div className="w-full h-4/5 bg-orange-100"></div>
      <div className="w-full h-2/5 bg-white"></div>
    </section>
  );
};

export default Splash;

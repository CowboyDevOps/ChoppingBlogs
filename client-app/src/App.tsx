import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { CreatorType, portType, PostType, UserType } from "./lib/types";
import Splash from "./Splash";
import { Routes, Route } from "react-router-dom";
import {
  homeRoute,
  feedRoute,
  profileRoute,
  CreatePostRoute,
  signUpRoute,
  logInRoute,
} from "./lib/routes";
import Feed from "./Feed";
import { loren } from "./blogging-text/lorenIpsum";
import bigDAWG from "./images/bigDAWG.jpeg";
import defaultPhoto from "./images/defaultPhoto.jpeg";
import UserProfile from "./UserProfile";
import CreatePost from "./NewPost";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

declare global {
  interface Window {
    cloudinary: any;
  }
}

function App() {
  //if image === undefined, image = defaultPhoto
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: "a",
      author: "Dan Weiner",
      image: bigDAWG,
      title: "Practice",
      date: new Date(),
      content: loren,
      category: "Post",
    },
  ]);
  //pull all posts from database
  useEffect(() => {
    var headers = {};
    fetch("http://localhost:5000/api/posts", {
      method: "GET",
      headers: headers,
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 200) {
          console.log("error");
        } else {
          return res.json();
        }
      })
      .then((data) =>
        setPosts((prevState) => {
          return data.map((entry: PostType) => {
            return {
              ...entry,
              date: new Date(entry.date),
            };
          });
        })
      );
  }, []);

  const [userPosts, setUserPosts] = useState<PostType[]>(posts);
  //pull all user posts from database
  useEffect(() => {
    var headers = {};
    fetch("http://localhost:5000/api/posts", {
      method: "GET",
      headers: headers,
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 200) {
          console.log("error");
        } else {
          return res.json();
        }
      })
      .then((data) =>
        setUserPosts((prevState) => {
          return data.map((entry: PostType) => {
            return {
              ...entry,
              date: new Date(entry.date),
            };
          });
        })
      );
  }, []);
  //userData
  const [user, setUser] = useState<UserType>({
    id: 0,
    image: bigDAWG,
    fName: "Henrik",
    lName: "Weiner",
    about: "Just an MSSA student, trying to live the dream",
    occupation: "Software Engineer",
    company: "Microsoft",
    email: "",
    displayName: "Henrik",
    username: "Henrik",
  });
  const [portSize, setPortSize] = useState<portType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [scrollSize, setScrollSize] = useState<number>(0);
  const [screenPercent, setScreenPercent] = useState<number>(
    scrollSize / portSize.height
  );
  console.log(screenPercent);
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
  }, [countdown]);

  //handles window resizing
  const handleResize = () => {
    if (typeof window !== "undefined") {
      setPortSize({
        height: window?.innerHeight,
        width: window?.innerWidth,
      });
    }
  };
  //handles window resizing
  useEffect(() => {
    handleResize();
    window?.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    setScrollSize?.(window.scrollY);
    setScreenPercent(scrollSize / portSize.height);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollSize]);

  const [execute1, setExecute1] = useState<boolean>(false);
  const [execute2, setExecute2] = useState<boolean>(false);
  const [execute3, setExecute3] = useState<boolean>(false);
  const [execute4, setExecute4] = useState<boolean>(false);
  const [execute5, setExecute5] = useState<boolean>(false);
  const [execute6, setExecute6] = useState<boolean>(false);

  useEffect(() => {
    if (countdown === 0) {
      if (screenPercent > 0.05) {
        setExecute2(true);
      }
      if (screenPercent > 0.15) {
        setExecute1(true);
      }
      if (screenPercent > 0.25) {
        setExecute4(true);
      }
      if (screenPercent > 0.35) {
        setExecute3(true);
      }
      if (screenPercent > 0.45) {
        setExecute6(true);
      }

      if (screenPercent > 0.55) {
        setExecute5(true);
      }
    }
  }, [screenPercent]);

  console.log(execute1);
  const [creators, setCreators] = useState<CreatorType[]>([
    {
      name: "John Arigo",
      stack: "Front End Developer",
      image: "",
      execute: execute1,
    },
    {
      name: "Ian Kinkead",
      stack: ".Net Developer",
      image: "",
      execute: execute2,
    },
    {
      name: "Antionio Choi",
      stack: "Project Manager",
      image: "",
      execute: execute3,
    },
    {
      name: "Christopher Robinson",
      stack: "Project Manager",
      image: "",
      execute: execute4,
    },
    {
      name: "Nathan Grabowski",
      stack: "Back End Developer",
      image: "",
      execute: execute5,
    },
    {
      name: "Ayanle Abdi",
      stack: "Back End Developer",
      image: "",
      execute: execute6,
    },
  ]);

  useEffect(() => {
    setCreators([
      {
        name: "John Arigo",
        stack: "Front End Developer",
        image: "",
        execute: execute1,
      },
      {
        name: "Ian Kinkead",
        stack: ".Net Developer",
        image: "",
        execute: execute2,
      },
      {
        name: "Antionio Choi",
        stack: "Project Manager",
        image: "",
        execute: execute3,
      },
      {
        name: "Christopher Robinson",
        stack: "Project Manager",
        image: "",
        execute: execute4,
      },
      {
        name: "Nathan Grabowski",
        stack: "Back End Developer",
        image: "",
        execute: execute5,
      },
      {
        name: "Ayanle Abdi",
        stack: "Back End Developer",
        image: "",
        execute: execute6,
      },
    ]);
  }, [screenPercent]);

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Routes>
        <Route
          path={homeRoute}
          element={<Splash creators={creators} countdown={countdown} />}
        />
        <Route
          path={feedRoute}
          element={<Feed posts={posts} setPosts={setPosts} />}
        />
        <Route
          path={profileRoute}
          element={
            <UserProfile
              userPosts={userPosts}
              setUserPosts={setUserPosts}
              user={user}
            />
          }
        />
        <Route
          path={CreatePostRoute}
          element={<CreatePost setUserPosts={setUserPosts} />}
        />
        {/* AUTH PAGES */}
        <Route path={signUpRoute} element={<SignUp />} />
        <Route path={logInRoute} element={<LogIn />} />
        {/* AUTH PAGES */}
      </Routes>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { feedRoute, homeRoute, profileRoute } from "./lib/routes";
import { LinkType, portType } from "./lib/types";

export const NavBar = () => {
  const links: LinkType[] = [
    { title: "Home", link: homeRoute },
    { title: "Feed", link: feedRoute },
    { title: "Home", link: "/" },
    { title: "Home", link: "/" },
    { title: "Profile", link: profileRoute },
  ];

  const [portSize, setPortSize] = useState<portType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
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

  return (
    <section className="fixed sm:relative bottom-0 flex items-center justify-between h-16 w-full sm:top-0 bg-white z-50">
      {portSize.width <= 638 ? null : (
        <div className="sm:ml-5">Blog Choopin</div>
      )}
      <div className="w-full flex items-center justify-around mr-3 sm:w-1/2 md:w-1/3 sm:mr-5">
        {links.map((link: LinkType) => {
          return <Link to={link.link}>{link.title}</Link>;
        })}
      </div>
    </section>
  );
};
export default NavBar;

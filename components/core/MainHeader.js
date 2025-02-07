import React, { useEffect, useState } from "react";

// header
import Header from "../utils/Header";

// link for next
import Link from "next/link";

// material ui button
import { Button } from "@material-ui/core";

// icons
import { FiBookOpen, FiGithub, FiStar } from "react-icons/fi";
import axios from "axios";
import BmcButton from "../utils/BmcButton";
import TwitterBtn from "../utils/TwitterBtn";
import Btn from "../utils/Btn";

const MainHeader = (props) => {
  const { user, setOpen, setUser } = props; // extracting from props

  const [starCount, setStarCount] = useState(1);

  const fetchStarCount = () => {
    axios
      .get("https://api.github.com/repos/saviomartin/codehouse", {
        headers: {},
      })
      .then((response) => {
        setStarCount(response.data.stargazers_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch on load once
  useEffect(() => {
    fetchStarCount();
  }, []);

  return (
    <div className="w-full bg-image text-white">
      <Header user={user} setOpen={setOpen} setUser={setUser} />
      <div className="w-full text-center flex items-start lg:items-center xl:items-center justify-center flex-col py-12 bg-pattern-dull pl-5 lg:pl-0 xl:pl-0">
        <Link href="/">
          <a className="text-4xl font-extrabold text-[#ECF2F5] change-span-color-onhover animate__animated animate__fadeInUp">
            Code House
            <span className="text-[#ffcf5e] text-5xl duration-500 leading-3">
              .
            </span>
          </a>
        </Link>
        <p className="w-10/12 lg:w-7/12 text-sm text-[#ccc] text-left my-2 animate__animated animate__fadeInUp">
          Introducing Code House, the all in one storehouse for developer
          cheatsheets. Code House is made up of 300+ curated cheatsheets from
          230+ sources. Filter by categories, or source sort by time or
          popularity, dark mode, add new cheatsheets, features requests, top
          cheatsheet hunter, make the app much more amazing! 🤟
        </p>
        <div className="flex flex-wrap animate__animated animate__fadeInUp">
          <Btn>
            <a
              className="shine bg-[#F5BA31] px-3 py-2 text-base capitalize rounded-md font-semibold flex items-center justify-center text-[#201C4E]"
              href="http://savio.xyz/"
            >
              <FiBookOpen className="text-lg mr-1" />
              Read Blog
            </a>
          </Btn>
          <Btn>
            <a
              className="border-2 shine ml-2 border-[#F5BA31] text-[#F5BA31] px-3 py-[6px] text-base capitalize rounded-md font-semibold flex items-center justify-center"
              href="https://github.com/saviomartin/codehouse"
            >
              <FiGithub className="text-lg mr-1" />
              <span className="poppins mr-1">{starCount}</span> Github Stars
            </a>
          </Btn>
          <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
            <BmcButton />
          </div>
          <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
            <TwitterBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

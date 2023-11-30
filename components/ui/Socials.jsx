"use client";
import Link from "next/link";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";
const icons = [
  {
    path: "/",
    lebal: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/AbuSayed332",
    lebal: <RiGithubFill />,
  },
  {
    path: "/",
    lebal: <RiFacebookBoxFill />,
  },
  {
    path: "/",
    lebal: <RiYoutubeFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map(({ path, lebal, index }) => {
        return (
          <Link href={path} key={index}>
            <div className={`${iconsStyles}`}>{lebal} </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

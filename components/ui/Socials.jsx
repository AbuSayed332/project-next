
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
    path: "https://www.linkedin.com/in/md-abu-sayed-165892203",
    label: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/AbuSayed332",
    label: <RiGithubFill />,
  },
  {
    path: "/",
    label: <RiFacebookBoxFill />,
  },
  {
    path: "/",
    label: <RiYoutubeFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.label}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
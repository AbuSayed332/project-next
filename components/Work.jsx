"use client";

import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
const projectData = [
  {
    image: "/work/3.png",
    category: "React js",
    name: " Nexa Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React js",
    name: " Solstice Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: " Lumia Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: " next js",
    name: " Evolve Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: " next js",
    name: " Ignite Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: " next js",
    name: " Envision Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: " fullstack js",
    name: " Serenity Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: " fullstack js",
    name: " Nova Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: " fullstack js",
    name: " Zenith Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            perspiciatis corporis sapiente labore expedita. Ratione molestiae
            rerum exercitationem adipisci. Iusto inventore odio minus aliquid
            quo facere asperiores beatae mollitia accusamus!
          </p>
          <Link href="/project">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[400px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

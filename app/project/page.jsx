"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
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
    category: "next js",
    name: " Evolve Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: " Ignite Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: " Envision Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack js",
    name: " Serenity Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack js",
    name: " Nova Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack js",
    name: " Zenith Website",
    description:
      "The homepage serves as the central hub, showcasing featured and trending content.",
    link: "/",
    github: "/",
  },
];
const uniqueCatagory = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Project = () => {
  const [categories, setCategories] = useState(uniqueCatagory);
  const [category, setCategory] = useState("all projects");
  const filterProject = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterProject.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Project;

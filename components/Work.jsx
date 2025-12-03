
"use client";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
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
    <section className="relative mb-12 xl:mb-48 py-12 xl:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="xl:flex xl:justify-between xl:items-center">
          <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-16 xl:mb-0 flex flex-col justify-center items-center xl:items-start animate-fade-in">
          {/* Enhanced Section Title */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Portfolio
            </span>
          </div>

          <h2 className="section-title mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Latest Projects
          </h2>

          <p className="subtitle mb-8 leading-relaxed ">
            Explore my recent work showcasing modern web applications built with
            cutting-edge technologies. Each project demonstrates my commitment to
            clean code, stunning design, and exceptional user experience.
          </p>

          <Link href="/project" className="group">
            <Button className="gap-x-2 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <span className="relative z-10 flex items-center gap-2">
                All projects
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </Link>

          {/* Decorative Line */}
            <div className="hidden xl:block w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-8"></div>
        </div>

        {/* Projects Slider */}
          <div className="relative xl:max-w-[650px] animate-slide-in-right animation-delay-300">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
          >
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-0 -translate-y-1/2 z-10 w-12 h-12 bg-primary/80 hover:bg-primary text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 -translate-x-1/2 xl:-translate-x-1/2 opacity-0 group-hover/slider:opacity-100">
              <ChevronLeft size={24} />
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-0 -translate-y-1/2 z-10 w-12 h-12 bg-primary/80 hover:bg-primary text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 translate-x-1/2 xl:translate-x-1/2 opacity-0 group-hover/slider:opacity-100">
              <ChevronRight size={24} />
            </div>


            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index} className="pb-12">
                  <div 
                    className="h-full animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              );
            })}

          </Swiper>

          {/* Decorative Elements */}
            <div className="hidden xl:block absolute -bottom-10 -right-10 w-32 h-32 border-4 border-primary/20 rounded-full animate-spin-slow"></div>
            <div className="hidden xl:block absolute -top-10 -left-10 w-24 h-24 border-4 border-primary/30 rounded-full animate-pulse"></div>
        </div>
      </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        /* Enhanced Swiper Pagination */
        :global(.swiper-pagination-bullet) {
          background: hsl(var(--primary));
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 10px hsl(var(--primary) / 0.5);
        }

        :global(.swiper-pagination-bullet:hover) {
          opacity: 0.7;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Work;


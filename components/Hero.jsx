

// "use client";
// import { Download, Send } from "lucide-react";
// import Link from "next/link";
// import {
//   RiArrowDownSLine,
//   RiBriefcase4Fill,
//   RiTeamFill,
//   RiTodoFill,
// } from "react-icons/ri";
// import Bedge from "./ui/Bedge";
// import DevImg from "./ui/DevImg";
// import Socials from "./ui/Socials";
// import { Button } from "./ui/button";

// const Hero = () => {
//   // Handle CV download
//   const handleDownloadCV = () => {
//     // Replace with your actual CV file path
//     const cvUrl = "/cv/Abu_Sayed_Resume.pdf";
//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.download = "Abu_Sayed_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none">
//       <div className="container mx-auto">
//         <div className="flex justify-between gap-x-8">
//           {/* Left Content */}
//           <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
//             <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
//               Web Developer
//             </div>
//             <h1 className="h1 mb-4">Hello, my name is Abu Sayed</h1>
//             <p className="subtitle max-w-[498px] mx-auto xl:mx-0">
//               A passionate MERN Stack Developer with 4+ years of experience in
//               building scalable web applications. I specialize in React.js,
//               Next.js, and modern frontend technologies.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
//               <Link href="/contact">
//                 <Button className="gap-x-2">
//                   Contact me <Send size={18} />
//                 </Button>
//               </Link>
//               <Button 
//                 variant="secondary" 
//                 className="gap-x-2"
//                 onClick={handleDownloadCV}
//               >
//                 Download CV <Download size={18} />
//               </Button>
//             </div>

//             {/* Social Links */}
//             <Socials
//               containerStyles="flex gap-x-6 mx-auto xl:mx-0"
//               iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
//             />
//           </div>

//           {/* Right Content - Badges & Image */}
//           <div className="hidden xl:flex relative">
//             {/* Experience Badge */}
//             <Bedge
//               containerStlyes="absolute top-[24%] -left-[5rem]"
//               icon={<RiBriefcase4Fill />}
//               endCountNum={4}
//               badgeText="Years of Experience"
//             />

//             {/* Projects Badge */}
//             <Bedge
//               containerStlyes="absolute top-[88%] -left-[5rem]"
//               icon={<RiTodoFill />}
//               endCountNum={15}
//               endCountText="+"
//               badgeText="Finished Projects"
//             />

//             {/* Clients Badge */}
//             <Bedge
//               containerStlyes="absolute top-[50%] -right-8"
//               icon={<RiTeamFill />}
//               endCountNum={50}
//               endCountText="+"
//               badgeText="Happy Clients"
//             />

//             {/* Background Shape */}
//             <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>

//             {/* Developer Image */}
//             <DevImg
//               containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
//               imgSrc="/hero/developer.png"
//             />
//           </div>
//         </div>

//         {/* Scroll Down Indicator */}
//         <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
//           <RiArrowDownSLine className="text-3xl text-primary" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import { Download, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import Bedge from "./ui/Bedge";
import DevImg from "./ui/DevImg";
import Socials from "./ui/Socials";
import { Button } from "./ui/button";

const Hero = () => {
  // Handle CV download
  const handleDownloadCV = () => {
    const cvUrl = "/cv/Abu_Sayed_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Abu_Sayed_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between gap-x-8">
          {/* Left Content */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] animate-fade-in">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Web Developer
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="h1 mb-4 animate-slide-up">
              Hello, my name is{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
                Abu Sayed
              </span>
            </h1>

            {/* Description with animation */}
            <p className="subtitle max-w-[498px] mx-auto xl:mx-0 mb-8 animate-slide-up animation-delay-200">
              A passionate{" "}
              <span className="font-semibold text-primary">MERN Stack Developer</span>{" "}
              with 4+ years of experience in building scalable web applications. 
              I specialize in React.js, Next.js, and modern frontend technologies.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 animate-slide-up animation-delay-300">
              <Link href="/contact">
                <Button className="gap-x-2 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact me 
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2 group hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={handleDownloadCV}
              >
                Download CV 
                <Download size={18} className="group-hover:animate-bounce" />
              </Button>
            </div>

            {/* Social Links with animation */}
            <div className="animate-slide-up animation-delay-400">
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
              />
            </div>
          </div>

          {/* Right Content - Enhanced Badges & Image */}
          <div className="hidden xl:flex relative animate-fade-in animation-delay-500">
            {/* Enhanced Background Shape */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 animate-spin-slow"></div>

            {/* Developer Image with advanced animations */}
            <div className="relative group z-0">
              {/* Animated Glow Rings */}
              <div className="absolute inset-0 animate-pulse-ring">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl"></div>
              </div>
              <div className="absolute inset-0 animate-pulse-ring animation-delay-1000">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-primary/10 rounded-full blur-2xl"></div>
              </div>
              
              {/* Rotating Border Effect */}
              <div className="absolute inset-0 animate-rotate-border opacity-50">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-full"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-full"></div>
              </div>

              {/* Main Image Container with 3D effect */}
              <div className="relative transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 animate-float-smooth">
                {/* Shadow layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent blur-xl transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500"></div>
                
                <DevImg
                  containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                  imgSrc="/hero/developer.png"
                />
                
                {/* Sparkle Effects */}
                <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-sparkle"></div>
                <div className="absolute top-32 right-20 w-2 h-2 bg-primary/70 rounded-full animate-sparkle animation-delay-500"></div>
                <div className="absolute bottom-32 left-10 w-2.5 h-2.5 bg-primary/80 rounded-full animate-sparkle animation-delay-1000"></div>
                <div className="absolute top-20 left-20 w-2 h-2 bg-primary/60 rounded-full animate-sparkle animation-delay-700"></div>
              </div>
            </div>

            {/* Experience Badge with enhanced styling - Now on top */}
            <div className="absolute top-[24%] -left-[5rem] animate-float z-10">
              <Bedge
                containerStlyes="backdrop-blur-sm bg-white/90 dark:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                icon={<RiBriefcase4Fill />}
                endCountNum={4}
                badgeText="Years of Experience"
              />
            </div>

            {/* Projects Badge with enhanced styling - Now on top */}
            <div className="absolute top-[88%] -left-[5rem] animate-float animation-delay-200 z-10">
              <Bedge
                containerStlyes="backdrop-blur-sm bg-white/90 dark:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                icon={<RiTodoFill />}
                endCountNum={15}
                endCountText="+"
                badgeText="Finished Projects"
              />
            </div>

            {/* Clients Badge with enhanced styling - Now on top */}
            <div className="absolute top-[50%] -right-8 animate-float animation-delay-400 z-10">
              <Bedge
                containerStlyes="backdrop-blur-sm bg-white/90 dark:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                icon={<RiTeamFill />}
                endCountNum={50}
                endCountText="+"
                badgeText="Happy Clients"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Down Indicator */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
            <RiArrowDownSLine className="relative text-3xl text-primary" />
          </div>
        </div>
      </div>

      {/* Add custom animations to your global CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(5px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-20px) translateX(3px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }

        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-float-smooth {
          animation: float-smooth 6s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }

        .animate-rotate-border {
          animation: rotate-border 15s linear infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
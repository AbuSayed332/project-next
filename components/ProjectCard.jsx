// import { Github, Link2Icon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Badge } from "./ui/badge";
// import { Card, CardHeader } from "./ui/card";
// const ProjectCard = ({ project }) => {
//   return (
//     <Card className="group overflow-hidden relative">
//       <CardHeader className="p-0">
//         <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
//           <Image
//             className="absolute bottom-0 shadow-2xl"
//             src={project.image}
//             width={247}
//             height={250}
//             alt=""
//             priority
//           />
//           <div className="flex gap-x-4">
//             <Link
//               href={project.link}
//               className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
//             >
//               <Link2Icon className="text-white" />
//             </Link>
//             <Link
//               href={project.github}
//               className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
//             >
//               <Github className="text-white" />
//             </Link>
//           </div>
//         </div>
//       </CardHeader>
//       <div className="h-full px-8 py-6">
//         <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
//           {project.category}
//         </Badge>
//         <h4 className="h4 mb-1"> {project.name}</h4>
//         <p className="text-muted-foreground text-lg">{project.description}</p>
//       </div>
//     </Card>
//   );
// };

// export default ProjectCard;

"use client";
import { Github, Link2Icon, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-background/50 backdrop-blur-sm">
      {/* Image Section with Overlay */}
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* Animated Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

          {/* Project Image */}
          <Image
            className="absolute bottom-0 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
          />

          {/* Action Buttons with Enhanced Animations */}
          <div className="flex gap-x-4 relative z-20">
            <Link
              href={project.link}
              className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl hover:shadow-primary/50"
              style={{ transitionDelay: '100ms' }}
            >
              <Link2Icon className="text-white w-5 h-5" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl hover:shadow-secondary/50"
              style={{ transitionDelay: '200ms' }}
            >
              <Github className="text-white w-5 h-5" />
            </Link>
          </div>

          {/* Sparkle Effect */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </CardHeader>

      {/* Content Section */}
      <div className="h-full px-8 py-6 relative">
        {/* Enhanced Badge */}
        <Badge className="uppercase text-xs font-semibold mb-2 absolute -top-3 left-5 shadow-lg bg-primary text-white border-2 border-background group-hover:scale-110 transition-transform duration-300">
          {project.category}
        </Badge>

        {/* Project Title with Gradient on Hover */}
        <h4 className="h4 mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          {project.name}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </h4>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {project.description}
        </p>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 rounded-bl-lg"></div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .group-hover\\:animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </Card>
  );
};

export default ProjectCard;

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blocks, GanttChartSquare, Gem, Sparkles } from "lucide-react";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Creating stunning, user-friendly interfaces that captivate your audience. From wireframes to high-fidelity designs, I craft beautiful digital experiences.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Developer",
    description:
      "Building responsive, performant websites using modern technologies. Specializing in React, Next.js, and full-stack development.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Developer",
    description:
      "Developing powerful mobile and web applications that solve real problems. Clean code, smooth UX, and scalable architecture.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/50",
  },
];

const Service = () => {
  return (
    <section className="mb-12 xl:mb-36 my-12 xl:my-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-12 xl:mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What I Offer
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse animation-delay-500" />
          </div>
          <h2 className="section-title mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-[424px] mx-auto animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="group relative h-[340px] flex flex-col pt-20 pb-10 justify-center border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-visible bg-background/50 backdrop-blur-sm">
                  {/* Animated Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                  {/* Icon Container with Animation */}
                  <CardHeader className="text-primary absolute -top-[70px] left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-[140px] h-[100px] ${item.bgColor} dark:bg-background flex justify-center items-center rounded-lg shadow-lg border-2 ${item.borderColor} ${item.hoverBorder} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-visible`}>
                      {/* Icon Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>
                      
                      {/* Icon with Animation */}
                      <div className="relative group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>

                      {/* Sparkle Effect */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    </div>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="text-center relative z-10 px-6">
                    <CardTitle className="mb-4 text-2xl group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </CardDescription>
                  </CardContent>

                  {/* Bottom Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 rounded-br-lg"></div>
                </Card>
              </div>
            );
          })}
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Service;
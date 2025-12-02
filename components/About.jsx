"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import DevImg from "./ui/DevImg";

const infeData = [
  {
    icon: <User2 size={20} />,
    text: "MD. ABU SAYED",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+880 1617016002",
  },
  {
    icon: <MailIcon size={20} />,
    text: "engineerabusayed1@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 17 December, 1994",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BSc in Computer Science & Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "309/4 Jafrabad, East Dhanmondi, Dhaka-1209",
  },
];

const qulificationData = [
  {
    title: "education",
    data: [
      {
        university: "Humdard university Bangladesh",
        qualification: "Bachelor of Science",
        years: "2015-2019",
      },
      {
        university: "Balorampur Ardash College",
        qualification: "Higher School Certificate",
        years: "2012-2014",
      },
      {
        university: "Pathraj Ardash High School",
        qualification: "Secondary School Certificate",
        years: "2010-2012",
      },
    ],
  },
  {
    title: "exprience",
    data: [
      {
        company: "Digicon Ltd.",
        role: "Software Engineer",
        years: "2020-2021",
      },
      {
        company: "MSBD Ltd.",
        role: "Software Devloper",
        years: "2021-2022",
      },
      {
        company: "Istana Ltd.",
        role: "Senior Software Developer",
        years: "2022-Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Tailwind css",
      },
      {
        name: "JavaScript, C++, Java",
      },
      {
        name: "Recat.js, Next.js",
      },
      {
        name: "Node.js, MongoDB, Express.js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-8 xl:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Get to Know Me
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse animation-delay-500" />
          </div>
          <h2 className="section-title mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Side - Image with Animations */}
          <div className="hidden xl:flex flex-1 relative animate-fade-in animation-delay-300">
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 animate-rotate-slow opacity-30">
                <div className="absolute top-10 left-10 w-24 h-24 border-4 border-primary/50 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-primary/30 rounded-full"></div>
              </div>

              {/* Image Container */}
              <div className="relative transform transition-all duration-700 group-hover:scale-105 animate-float-gentle">
                <DevImg
                  containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                  imgSrc="/about/developer.png"
                />
                
                {/* Decorative Dots */}
                <div className="absolute top-20 -left-4 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-32 -right-4 w-3 h-3 bg-primary/70 rounded-full animate-ping animation-delay-700"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 animate-slide-in-right animation-delay-500">
            <Tabs defaultValue="personal">
              {/* Enhanced Tabs List */}
              <TabsList className="w-full gap-2 grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none backdrop-blur-sm bg-background/50 p-1 rounded-lg shadow-lg">
                <TabsTrigger 
                  className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 hover:scale-105" 
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 hover:scale-105"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger 
                  className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 hover:scale-105" 
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Info Tab */}
                <TabsContent value="personal" className="animate-fade-in">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      Unmatched Service Quality for Over 5 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 mb-8">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>

                    {/* Enhanced Info Cards */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infeData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group cursor-pointer hover:scale-105"
                            key={index}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <div className="text-sm font-medium">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Language Skills */}
                    <div className="flex flex-col gap-y-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="text-primary font-semibold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Language Skills
                      </div>
                      <div className="border-b border-border"></div>
                      <div className="font-medium">English, Bangla, Arabic</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualification Tab */}
                <TabsContent value="qualification" className="animate-fade-in">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8 gap-x-6">
                      {/* Experience Section */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase />
                          </div>
                          <h4 className="capitalize font-semibold">
                            {getData(qulificationData, "exprience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qulificationData, "exprience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div 
                                  className="flex gap-x-8 group hover:translate-x-2 transition-all duration-300" 
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 shadow-lg shadow-primary/50"></div>
                                  </div>
                                  <div className="flex-1 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium text-primary">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Education Section */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <GraduationCap size={28} />
                          </div>
                          <h4 className="capitalize font-semibold">
                            {getData(qulificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qulificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div 
                                  className="flex gap-x-8 group hover:translate-x-2 transition-all duration-300" 
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 shadow-lg shadow-primary/50"></div>
                                  </div>
                                  <div className="flex-1 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium text-primary">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="skills" className="animate-fade-in">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      Tools I Use Everyday
                    </h3>

                    {/* Skills Section */}
                    <div className="mb-16">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="text-xl font-semibold">Skills</h4>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                                key={index}
                              >
                                <div className="font-medium flex items-center gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* Tools Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="text-xl font-semibold">Tools</h4>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
                      </div>
                      <div className="flex gap-x-8 justify-center xl:justify-start flex-wrap">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div 
                              key={index}
                              className="p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-2 cursor-pointer group"
                            >
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                                className="group-hover:scale-110 transition-transform"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
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

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes rotate-slow {
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

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
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
      `}</style>
    </section>
  );
};

export default About;
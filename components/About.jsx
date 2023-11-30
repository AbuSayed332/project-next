import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
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
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-reeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full gap-2 grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Qualitty for Over 5 Years
                    </h3>
                    <p className="subtitle max-w-xl  mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technoloy, delivering dynamic and engaging
                      user experience.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infeData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Bangla, Arabic</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qulificationData, "exprience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qulificationData, "exprience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1x] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qulificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qulificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1x] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
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
                <TabsContent value="skills"> Skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

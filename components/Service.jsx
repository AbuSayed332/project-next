import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blocks, GanttChartSquare, Gem } from "lucide-react";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis magnam a rerum. Eum, sunt deleniti distinctio atque in officiis veritatis quae? Praesentium consequuntur, deleniti sequi impedit sit atque voluptatem!",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, laboriosam!",
  },
];
const Service = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Service
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white drak:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {" "}
                    {item.description}{" "}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;

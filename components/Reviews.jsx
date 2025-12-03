"use client";
import Image from "next/image";
import { Sparkles, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Mitchell Thempson",
    job: "Software Engineer",
    review:
      "Working with Abu Sayed was an absolute pleasure. His attention to detail and technical expertise brought our project to life. Highly recommended for any web development needs!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Sarah Johnson",
    job: "Product Manager",
    review:
      "Exceptional work! Abu delivered a pixel-perfect, responsive website that exceeded our expectations. His communication throughout the project was outstanding.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "David Chen",
    job: "Startup Founder",
    review:
      "Abu transformed our vision into reality with his MERN stack expertise. The web application he built is fast, scalable, and beautifully designed. Worth every penny!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Rodriguez",
    job: "Marketing Director",
    review:
      "Professional, talented, and reliable. Abu created a stunning landing page that significantly improved our conversion rates. Looking forward to future collaborations!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Jahangir Alam",
    job: "Data Analyst",
    review:
      "Abu's React skills are top-notch. He built a complex dashboard with beautiful data visualizations that made our analytics accessible and user-friendly.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Asif Chowdhury",
    job: "Business Owner",
    review:
      "Outstanding developer! Abu completed our e-commerce platform on time and within budget. His code quality and problem-solving abilities are impressive.",
  },
];

const Reviews = () => {
  return (
    <section className="relative py-12 xl:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-12 xl:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse animation-delay-500" />
          </div>
          <h2 className="section-title mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about their experience
          </p>
        </div>

        {/* Reviews Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="h-[400px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="group bg-tertiary dark:bg-secondary/40 p-8 min-h-[350px] border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden animate-fade-in-up backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Quote Icon Background */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="w-20 h-20 text-primary" />
                  </div>

                  {/* Card Header with Avatar */}
                  <CardHeader className="p-0 mb-6 relative z-10">
                    <div className="flex items-center gap-x-4">
                      {/* Avatar with Ring Effect */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <Image
                          src={person.avatar}
                          width={70}
                          height={70}
                          alt={person.name}
                          priority
                          className="rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300 relative z-10 group-hover:scale-110 transform"
                        />
                      </div>

                      {/* Name and Job */}
                      <div className="flex flex-col">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                          {person.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {person.job}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Review Text */}
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 relative z-10">
                    "{person.review}"
                  </CardDescription>

                  {/* Decorative Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 rounded-br-lg"></div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
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

export default Reviews;

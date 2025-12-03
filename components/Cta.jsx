// import Link from "next/link";
// import { Button } from "./ui/button";

// const Cta = () => {
//   return (
//     <section className="py-24 bg-tertiary dark:bg-secondary/40">
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center">
//           <h2 className="h2 max-w-xl text-center mb-8">
//             Prepared to turn your ideas into reality? I'm here to help
//           </h2>
//           <Link href="/contact">
//             <Button>Contact me</Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cta;

import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-tertiary to-primary/10 dark:from-primary/10 dark:via-secondary/40 dark:to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="mb-6 flex gap-2">
            <span className="w-12 h-1 bg-primary rounded-full animate-pulse"></span>
            <span className="w-12 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></span>
            <span className="w-12 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></span>
          </div>

          <h2 className="h2 text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent leading-tight">
            Ready to Build Something Amazing Together?
          </h2>
          
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-10 max-w-2xl">
            MERN Stack Developer with 4+ years of experience turning ideas into scalable, user-friendly web applications. Let's bring your vision to life!
          </p>

          <Link href="/contact" className="group">
            <Button className="relative px-8 py-6 text-lg font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </Link>

          {/* Skills & Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
            <div className="flex flex-col items-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <svg className="w-10 h-10 text-primary mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 className="text-2xl font-bold text-foreground mb-1">4+ Years</h3>
              <p className="text-sm text-muted-foreground text-center">Professional Experience</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <svg className="w-10 h-10 text-primary mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold text-foreground mb-1">MERN Stack</h3>
              <p className="text-sm text-muted-foreground text-center">Full-Stack Expertise</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <svg className="w-10 h-10 text-primary mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold text-foreground mb-1">24/7</h3>
              <p className="text-sm text-muted-foreground text-center">Available to Collaborate</p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-2xl">
            {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'Tailwind CSS', 'Redux'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Cta;

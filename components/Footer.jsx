// import Socials from "./ui/Socials";

// const Footer = () => {
//   return (
//     <footer className="bg-secondary py-12">
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center justify-between">
//           <Socials
//             containerStyles="flex gap-x-6 mx-auto xl:mx-8 mb-4"
//             iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
//           />
//           <div className="text-muted-foreground">
//             Copyright &copy; Engr Abu Sayed. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client";
import Socials from "./ui/Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 overflow-hidden border-t border-primary/10 dark:border-primary/20">
      {/* Day/Night Background Image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        {/* Day Background - Sun, clouds, light sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-orange-50 dark:opacity-0 transition-opacity duration-500">
          {/* Sun */}
          <div className="absolute top-8 right-1/4 w-20 h-20 bg-yellow-300 rounded-full blur-md animate-pulse"></div>
          {/* Clouds */}
          <div className="absolute top-12 left-1/4 w-32 h-12 bg-white/60 rounded-full blur-sm"></div>
          <div className="absolute top-20 right-1/3 w-24 h-10 bg-white/50 rounded-full blur-sm"></div>
          <div className="absolute top-32 left-1/2 w-28 h-11 bg-white/55 rounded-full blur-sm"></div>
        </div>
        
        {/* Night Background - Moon, stars, dark sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 opacity-0 dark:opacity-100 transition-opacity duration-500">
          {/* Moon */}
          <div className="absolute top-8 right-1/4 w-16 h-16 bg-gray-200 rounded-full blur-sm">
            {/* Moon crater effect */}
            <div className="absolute top-2 right-3 w-4 h-4 bg-gray-300/50 rounded-full"></div>
            <div className="absolute bottom-3 left-2 w-3 h-3 bg-gray-300/50 rounded-full"></div>
          </div>
          
          {/* Stars */}
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-16 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-24 right-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-14 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-28 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-yellow-100 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          
          {/* Twinkling stars effect */}
          <div className="absolute top-20 left-2/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-28 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        
        {/* Floating dots */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary/20 dark:bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '3s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-primary/20 dark:bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1000ms', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/20 dark:bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '2000ms', animationDuration: '3.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo/Name Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-2">
              Engr Abu Sayed
            </h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400 max-w-md">
              MERN Stack Developer | Building scalable web solutions
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></span>
            <span className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></span>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></span>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full blur-xl"></div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto relative"
              iconsStyles="text-primary dark:text-primary/90 text-[22px] hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:underline underline-offset-4">
              Home
            </a>
            <span className="text-muted-foreground/30 dark:text-gray-600">•</span>
            <a href="/project" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:underline underline-offset-4">
              Projects
            </a>
            <span className="text-muted-foreground/30 dark:text-gray-600">•</span>
            <a href="/contact" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:underline underline-offset-4">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 dark:via-primary/30 to-transparent"></div>

          {/* Copyright with enhanced design */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-muted-foreground dark:text-gray-400 text-sm">
              <span className="inline-block">©</span>
              <span>{currentYear}</span>
              <span className="font-semibold text-foreground/80 dark:text-gray-200">Engr Abu Sayed</span>
            </div>
            <span className="hidden md:inline text-muted-foreground/30 dark:text-gray-600">•</span>
            <div className="text-muted-foreground/70 dark:text-gray-500 text-sm">
              All rights reserved
            </div>
          </div>

          {/* Tech Badge */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 border border-primary/20 dark:border-primary/30">
              Made with ❤️ using Next.js
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group mt-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 dark:via-primary/40 to-transparent"></div>
    </footer>
  );
};

export default Footer;
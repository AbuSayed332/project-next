
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeTogaler from "./ThemeTogaler";
import MobileNav from "./ui/MobileNav";
import Nav from "./ui/Nav";
import Logo from "./ui/logo";

const Header = () => {
  const [headers, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  // Define different styles based on pathname
  const getHeaderStyles = () => {
    const baseClasses = "sticky top-0 z-50 transition-all duration-500";

    // Scrolled state styles with glassmorphism
    const scrolledClasses =
      "py-3 bg-white/80 dark:bg-accent/80 backdrop-blur-lg shadow-lg border-b border-border/50";

    // Default (not scrolled) styles based on path
    let defaultClasses = "py-6 dark:bg-transparent";

    // Customize design per route
    if (pathname === "/") {
      defaultClasses = "py-6 bg-[#fef9f5] dark:bg-transparent";
    } else if (pathname === "/about") {
      defaultClasses = "py-6 bg-blue-50 dark:bg-slate-900";
    } else if (pathname === "/services") {
      defaultClasses = "py-6 bg-green-50 dark:bg-emerald-950";
    } else if (pathname === "/contact") {
      defaultClasses = "py-6 bg-purple-50 dark:bg-violet-950";
    } else if (pathname.startsWith("/blog")) {
      defaultClasses = "py-6 bg-amber-50 dark:bg-orange-950";
    } else {
      defaultClasses = "py-6 bg-gray-50 dark:bg-transparent";
    }

    return `${baseClasses} ${headers ? scrolledClasses : defaultClasses}`;
  };

  // Get nav styles based on pathname
  const getNavStyles = () => {
    const baseStyles = "relative font-medium transition-all duration-300";
    
    if (pathname === "/about") {
      return `${baseStyles} hover:text-blue-600 hover:scale-110`;
    } else if (pathname === "/services") {
      return `${baseStyles} hover:text-green-600 hover:scale-110`;
    } else if (pathname === "/contact") {
      return `${baseStyles} hover:text-purple-600 hover:scale-110`;
    }
    return `${baseStyles} hover:text-primary hover:scale-110`;
  };

  // Get underline color based on pathname
  const getUnderlineStyles = () => {
    const baseUnderline = "absolute left-0 top-full h-[2px] w-full rounded-full transition-all duration-300";
    
    if (pathname === "/about") {
      return `${baseUnderline} bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50`;
    } else if (pathname === "/services") {
      return `${baseUnderline} bg-gradient-to-r from-green-400 to-green-600 shadow-lg shadow-green-500/50`;
    } else if (pathname === "/contact") {
      return `${baseUnderline} bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50`;
    }
    return `${baseUnderline} bg-gradient-to-r from-primary/70 to-primary shadow-lg shadow-primary/50`;
  };

  return (
    <header className={getHeaderStyles()}>
      {/* Animated background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <Logo />
          </div>

          <div className="flex items-center gap-x-6">
            {/* Navigation with enhanced styling */}
            <div className="hidden xl:block">
              <Nav
                containerStyles="flex gap-x-8 items-center"
                linkStyles={getNavStyles()}
                underlineStyles={getUnderlineStyles()}
              />
            </div>

            {/* Theme Toggler with enhanced styling */}
            <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-12">
              <ThemeTogaler />
            </div>

            {/* Mobile Nav with animation */}
            <div className="xl:hidden transform transition-all duration-300 hover:scale-110">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border gradient effect when scrolled */}
      {headers && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        header {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
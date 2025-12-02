// "use client";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import ThemeTogaler from "./ThemeTogaler";
// import MobileNav from "./ui/MobileNav";
// import Nav from "./ui/Nav";
// import Logo from "./ui/logo";

// const Header = () => {
//   const [headers, setHeader] = useState(false);
//   const pathname = usePathname();
//   useEffect(() => {
//     const scrollYPos = window.addEventListener("scroll", () => {
//       window.scrollY > 50 ? setHeader(true) : setHeader(false);
//     });
//     return () => window.removeEventListener("scroll", scrollYPos);
//   }, []);
//   return (
//     <header
//       className={`${
//         headers
//           ? "py-4 bg-white shadow-lg dark:bg-accent"
//           : "py-6 dark:bg-transparent"
//       } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
//     >
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <Logo />
//           <div className="flex items-center gap-x-6">
//             <Nav
//               containerStyles="hidden xl:flex gap-x-8 items-center"
//               linkStyles="relative hover:text-primary transition-all"
//               underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
//             />
//             <ThemeTogaler />
//             <div className="xl:hidden">
//               <MobileNav />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

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
    const baseClasses = "sticky top-0 z-30 transition-all";
    
    // Scrolled state styles
    const scrolledClasses = "py-4 bg-white shadow-lg dark:bg-accent";
    
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
    if (pathname === "/about") {
      return "relative hover:text-blue-600 transition-all";
    } else if (pathname === "/services") {
      return "relative hover:text-green-600 transition-all";
    } else if (pathname === "/contact") {
      return "relative hover:text-purple-600 transition-all";
    }
    return "relative hover:text-primary transition-all";
  };

  // Get underline color based on pathname
  const getUnderlineStyles = () => {
    if (pathname === "/about") {
      return "absolute left-0 top-full h-[2px] bg-blue-600 w-full";
    } else if (pathname === "/services") {
      return "absolute left-0 top-full h-[2px] bg-green-600 w-full";
    } else if (pathname === "/contact") {
      return "absolute left-0 top-full h-[2px] bg-purple-600 w-full";
    }
    return "absolute left-0 top-full h-[2px] bg-primary w-full";
  };

  return (
    <header className={getHeaderStyles()}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles={getNavStyles()}
              underlineStyles={getUnderlineStyles()}
            />
            <ThemeTogaler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const links = [
//   { path: "/", label: "home" },
//   { path: "/project", label: "project" },
//   { path: "/contact", label: "contact" },
// ];
// const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
//   const path = usePathname();
//   return (
//     <nav className={`${containerStyles}`}>
//       {links.map((link, index) => {
//         return (
//           <Link
//             href={link.path}
//             key={index}
//             className={`capitalize ${linkStyles}`}
//           >
//             {link.path === path && (
//               <motion.span
//                 initial={{ y: "-100%" }}
//                 animate={{ y: 0 }}
//                 transition={{ type: "tween" }}
//                 layoutId="underLine"
//                 className={`${underlineStyles}`}
//               />
//             )}
//             {link.label}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// };

// export default Nav;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", label: "home", icon: "🏠" },
  { path: "/project", label: "projects", icon: "💼" },
  { path: "/contact", label: "contact", icon: "✉️" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = link.path === path;
        
        return (
          <Link
            href={link.path}
            key={index}
            className={`group relative capitalize ${linkStyles}`}
          >
            {/* Animated background on hover */}
            <motion.span
              className="absolute inset-0 rounded-lg bg-primary/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            
            {/* Active indicator - bottom underline */}
            {isActive && (
              <motion.span
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                layoutId="underLine"
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full ${underlineStyles}`}
              />
            )}
            
            {/* Active indicator - side accent */}
            {isActive && (
              <motion.span
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
              />
            )}
            
            {/* Icon with animation */}
            <motion.span
              className="inline-block mr-2 text-lg"
              animate={isActive ? { 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              } : {}}
              transition={{ 
                duration: 0.5,
                repeat: isActive ? Infinity : 0,
                repeatDelay: 3
              }}
            >
              {link.icon}
            </motion.span>
            
            {/* Link text */}
            <motion.span
              className={`relative inline-block font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-foreground/70 group-hover:text-primary'
              }`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.label}
              
              {/* Hover underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.span>
            
            {/* Glowing effect on active */}
            {isActive && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-primary/10 blur-xl -z-20"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            
            {/* Particle effect on hover */}
            <motion.span
              className="absolute top-0 right-0 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                y: [0, -20, -40],
                x: [0, 10, 20],
                scale: [1, 0.5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
            />
          </Link>
        );
      })}
      
      {/* Floating background indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: '50%' }}
      />
    </nav>
  );
};

export default Nav;
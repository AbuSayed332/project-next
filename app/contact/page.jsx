// import Form from "@/components/Form";
// import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
// const Contact = () => {
//   return (
//     <section>
//       <div className="container mx-auto">
//         <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
//           <div className="flex flex-col justify-center">
//             <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
//               <span className="w-[30px] h-[2px] bg-primary "></span>
//               Say Hello
//             </div>
//             <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
//             <p className="subtitle max-w-[400px]">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Voluptatum, explicabo!
//             </p>
//           </div>
//           <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
//         </div>
//         <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
//           <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
//             <div className="flex items-center gap-x-8">
//               <MailIcon size={18} className="text-primary" />
//               <div>engineerabusayed1@gmail.com</div>
//             </div>
//             <div className="flex items-center gap-x-8">
//               <HomeIcon size={18} className="text-primary" />
//               <div>Langalgarm, Panchagrah, Rangpur, Bangladesh</div>
//             </div>
//             <div className="flex items-center gap-x-8">
//               <PhoneCall size={18} className="text-primary" />
//               <div>+880 1617 016 002</div>
//             </div>
//           </div>
//           <Form />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import Form from "@/components/Form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-12 xl:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="grid xl:grid-cols-2 gap-12 pt-12 xl:h-[480px] mb-12 xl:mb-24">
          <div className="flex flex-col justify-center relative">
            {/* Decorative Element */}
            <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
            
            <div className="flex items-center gap-x-4 text-primary text-lg mb-6 font-semibold">
              <span className="w-[30px] h-[2px] bg-primary animate-pulse"></span>
              Say Hello 👋
            </div>
            
            <h1 className="h1 text-5xl xl:text-6xl font-bold max-w-md mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Let's Work Together.
            </h1>
            
            <p className="subtitle max-w-[450px] text-lg text-muted-foreground leading-relaxed mb-8">
              I'm passionate about web developer. Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">⚡</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                  <div className="font-semibold">24 Hours</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                  <div className="font-semibold">Open to Work</div>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-center bg-no-repeat relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Contact Information & Form */}
        <div className="grid xl:grid-cols-2 gap-12 mb-24 xl:mb-32">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MailIcon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1 font-medium">Email</div>
                  <a href="mailto:engineerabusayed1@gmail.com" className="text-base xl:text-lg font-semibold hover:text-primary transition-colors">
                    engineerabusayed1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HomeIcon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1 font-medium">Address</div>
                  <div className="text-base xl:text-lg font-semibold">
                    Langalgarm, Panchagrah, Rangpur, Bangladesh
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PhoneCall size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1 font-medium">Phone</div>
                  <a href="tel:+8801617016002" className="text-base xl:text-lg font-semibold hover:text-primary transition-colors">
                    +880 1617 016 002
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/md-abu-sayed-165892203" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-background border border-primary/20 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <span className="text-primary text-xl">in</span>
                </a>
                <a href="https://github.com/AbuSayed332" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-background border border-primary/20 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <span className="text-primary text-xl">⚡</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
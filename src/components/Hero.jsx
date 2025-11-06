import { ArrowRight, Download, Eye, MapPin, Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useState, useEffect } from "react";

export const Hero = () => {
  const titles = ["AI & Full Stack Developer", "DevOps Engineer"];
  const animatedTitle = useTypewriter(titles, 80, 40, 2000);
  const [autoHover, setAutoHover] = useState(false);

  useEffect(() => {
    setAutoHover(true);
    const timer = setTimeout(() => {
      setAutoHover(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // NOTE: view/download actions use direct links to the PDF in public/

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-hero"
    >
      <div className="max-w-7xl w-full mx-auto pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_0.8s_both]">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                Hi, I&apos;m Syed Anas
              </h1>
              <div className="h-12 sm:h-16 flex items-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                  {animatedTitle}
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  BTech 3rd Year,
                  <br />
                  Computer Science & Engineering,
                  <br />
                  KL University
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_1.2s_both]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 flex-shrink-0" />
                <span>Available For Full Time and Internships</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 items-center animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_1.6s_both]">
              <div className="flex items-center gap-2">
                {/* Split button: left = download, right = view */}
                <div
                  className={`relative inline-flex items-stretch overflow-hidden rounded-lg bg-foreground text-background shadow-glow transition-all duration-[2000ms] transform animate-float ${autoHover ? "scale-105" : "hover:scale-105"
                    }`}
                >
                  {/* Gradient overlay */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-lg blur-md transition-opacity duration-[2000ms] ${autoHover ? "opacity-70" : "opacity-0 group-hover:opacity-50"
                      }`}
                  />

                  {/* Left: Download */}
                  <a
                    href="https://cdn.jsdelivr.net/gh/Anas-Sd/Portfolio/public/SYED_ANAS_RESUME_COMPLETE-94.pdf"
                    download
                    title="Download Resume"
                    aria-label="Download resume"
                    className="z-10 flex items-center justify-center px-3 transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-l-lg"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  {/* Divider + Right: View (opens in new tab) */}
                  <a
                    href="https://cdn.jsdelivr.net/gh/Anas-Sd/Portfolio/public/SYED_ANAS_RESUME_COMPLETE-94.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in new tab"
                    className="z-10 group flex items-center gap-2 px-5 py-3 border-l border-border transition-all duration-300 hover:bg-blue-600 rounded-r-lg"
                  >
                    <Eye className="w-4 h-4 group-hover:text-white" />
                    <span className="text-black font-medium group-hover:text-white">View Resume</span>
                  </a>
                </div>

              </div>

              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-foreground text-black font-medium text-background hover:opacity-90 transition-all shadow-glow hover:scale-105 transform duration-300 hover:text-white"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>


            <div className="flex items-center gap-4 pt-4 animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_2s_both]">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <a
                href="https://github.com/Anas-Sd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center hover:scale-110 transform duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/-syedanas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center hover:scale-110 transform duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:myportfolio44455@gmail.com"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center hover:scale-110 transform duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-[scale-in_1.2s_cubic-bezier(0.4,0,0.2,1)_0.8s_both] order-1 lg:order-2">
            <div className="relative w-48 sm:w-64 md:w-80 lg:w-full lg:max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl animate-pulse" />
              <div className="relative bg-card rounded-3xl p-2 border border-border shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105">
                <img
                  src={new URL("@/assets/profile-photo.jpg", import.meta.url).href}
                  alt="Syed Anas - AI & Full Stack Developer"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

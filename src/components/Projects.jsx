import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectRef, isVisible: projectVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth px-4 sm:px-0">
          {/* Prompt 2 Paint Project */}
          <Card
            ref={projectRef}
            className={`p-4 sm:p-6 lg:p-8 hover:shadow-glow transition-all duration-700 w-[280px] sm:w-[400px] lg:w-[600px] snap-start flex-shrink-0 ${
              projectVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden mb-3 sm:mb-4">
                <img
                  src={new URL("@/assets/prompt2paint-screenshot.png", import.meta.url).href}
                  alt="Prompt 2 Paint Project"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                Prompt 2 Paint
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Prompt 2 Paint an AI-powered MERN Stack application for text-to-image generation. Integrated cloud storage
                and responsive UI. Built secure backend using Node.js, Express.js, MongoDB Atlas.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                React.js
              </span>
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                Node.js
              </span>
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                MongoDB
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" size="sm" className="flex-1 p-2">
                <a
                  href="https://prompt2paint.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="flex-1 p-2">
                <a
                  href="https://github.com/Anas-Sd/Prompt_2_Paint"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </Card>

          {/* Flip the Card Game */}
          <Card
            className={`p-4 sm:p-6 lg:p-8 hover:shadow-glow transition-all duration-700 delay-100 w-[280px] sm:w-[400px] lg:w-[600px] snap-start flex-shrink-0 ${
              projectVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-3 sm:mb-4">
                <img
                  src={new URL("@/assets/flip the card logo.png", import.meta.url).href}
                  alt="Flip The Card Project"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                Flip 2 Win
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Flip 2 Win an Interactive memory card game built with JavaScript. Features smooth animations,
                score tracking, and responsive design for an engaging user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                JavaScript
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" size="sm" className="flex-1 p-2">
                  <a href="https://flip2win.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="flex-1 p-2">
                <a
                  href="https://github.com/Anas-Sd/FLIP---THE---CARD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </Card>

          {/* Weather App */}
          <Card
            className={`p-4 sm:p-6 lg:p-8 hover:shadow-glow transition-all duration-700 delay-200 w-[280px] sm:w-[400px] lg:w-[600px] snap-start flex-shrink-0 ${
              projectVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-lg flex sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                Weather App
                <img className="rounded-2xl ml-2 mt-2 sm:mt-2.5 w-6 h-6 flex brightness-175" src={new URL("@/assets/yellow sstatus.jpeg", import.meta.url).href} alt="" />
                <p className="text-[0.5rem] sm:text-[0.6rem]  mt-1.5 text-gray-400 sm:mt-1 flex">working</p>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Real-time weather application with location-based forecasts. Clean interface displaying
                current conditions, temperature, and weather predictions using API integration.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                HTML
              </span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                CSS
              </span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                JavaScript
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" size="sm" className="flex-1 p-2">
                <a>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="flex-1 p-2">
                <a
                  href="https://github.com/Anas-Sd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

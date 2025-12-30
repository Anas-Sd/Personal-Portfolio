import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {/* Prompt 2 Paint */}
          <ProjectCard
            projectRef={projectRef}
            projectVisible={projectVisible}
            title="Prompt 2 Paint"
            description="Prompt 2 Paint an AI-powered MERN Stack application for text-to-image generation. Integrated cloud storage and responsive UI. Built secure backend using Node.js, Express.js, MongoDB Atlas."
            image={new URL("@/assets/prompt2paint-screenshot.png", import.meta.url).href}
            tags={["React.js", "Node.js", "MongoDB"]}
            Live="https://prompt2paint.vercel.app"
            github="https://github.com/Anas-Sd/Prompt_2_Paint"
            details={{
              overview:
                "✨ Prompt 2 Paint is an AI-powered web application that transforms your text prompts into stunning,⚡ high-quality images using advanced diffusion models. Built with modern web technologies, it provides a smooth, fast, and creative image generation experience with many tools and features. Very well 🔒 Secured and Database supported 💾.",
              features: [
                "Text-to-image AI generation",
                "JWT authentication",
                "Credit-based system",
                "Payment integration",
                "Image download & storage",
              ],
              stack:
                "React.js, Node.js, Express.js, MongoDB Atlas",
              role:
                "Designed, developed, and deployed the complete application independently.",
              roadmap: [
                "OTP system for more security",
                "OAuth authentication",
                "User profiles",
                "Favorites & transaction history",
              ],
            }}
          />

          {/* Flip 2 Win */}
          <ProjectCard
            projectVisible={projectVisible}
            title="Flip 2 Win"
            description="Flip 2 Win an Interactive memory card game built with JavaScript. Features smooth animations, score tracking, and responsive design for an engaging user experience."
            image={new URL("@/assets/flip the card logo.png", import.meta.url).href}
            tags={["JavaScript"]}
            Live="https://flip2win.vercel.app/"
            github="https://github.com/Anas-Sd/FLIP---THE---CARD"
            details={{
              overview:
                "Flip 2 Win is a browser-based memory game focusing on performance, animation smoothness, and responsiveness.",
              features: [
                "Card matching logic",
                "Score tracking",
                "Smooth animations",
                "Responsive design",
              ],
              stack: "HTML, CSS, JavaScript",
              role: "Built complete game logic and UI independently.",
            }}
          />

          {/* Weather App */}
          <ProjectCard
            projectVisible={projectVisible}
            title="Weather App"
            description="Real-time weather application using API integration."
            // image="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
            image="https://em-content.zobj.net/thumbs/120/apple/354/sun-behind-cloud_26c5.png"
            tags={["HTML", "CSS", "JavaScript"]}
            github="https://github.com/Anas-Sd"
            details={{
              overview:
                "Weather application that displays real-time weather conditions using location-based APIs.",
              features: [
                "Live weather data",
                "Location-based search",
                "Clean UI",
              ],
              stack: "HTML, CSS, JavaScript, Weather API",
              role: "Handled frontend UI and API integration.",
            }}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  Live,
  github,
  details,
  projectRef,
  projectVisible,
}) => {
  return (
    <Card
      ref={projectRef}
      className={`p-6 w-[300px] sm:w-[420px] lg:w-[600px] snap-start flex-shrink-0 transition-all duration-700 ${
        projectVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <img src={image} alt={title} className="w-16 h-16 mb-4 object-contain" />

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        {Live && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={Live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </a>
          </Button>
        )}

        <Button asChild variant="outline" size="sm" className="flex-1">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="flex-1">
              View More
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-lg max-h-[75vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <img src={image} alt={title} className="w-12 h-12 object-contain" />
                <DialogTitle>{title}</DialogTitle>
              </div>
            </DialogHeader>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>{details.overview}</p>

              <ul className="list-disc list-inside space-y-1">
                {details.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <p>
                <span className="font-semibold text-foreground">Tech Stack:</span>{" "}
                {details.stack}
              </p>

              <p>
                <span className="font-semibold text-foreground">My Role:</span>{" "}
                {details.role}
              </p>

              {details.roadmap && (
                <ul className="list-disc list-inside space-y-1">
                  {details.roadmap.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

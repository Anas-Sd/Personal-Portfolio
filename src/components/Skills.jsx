import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Globe, Database, BookOpen, Wrench, Users } from "lucide-react";
import { certifications } from "@/assets/assets";
import { useState, useEffect } from "react";

export const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["C", "Java", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Express.js", "Node.js"],
    },
    {
      title: "Core CS",
      icon: BookOpen,
      skills: ["DSA", "OOPS", "DBMS"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["VS Code", "Git", "Eclipse", "Postman"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Problem Solving",
        "Self-Learning",
        "Adaptability",
        "Communication",
        "Leadership",
        "Teamwork",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skill Cards */}
        <div
          ref={skillsRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth mb-12 sm:mb-16"
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-5 sm:p-6 hover:shadow-glow transition-all duration-700 min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0 ${skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: skillsVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-muted rounded-full text-xs sm:text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div
          id="certifications"
          ref={certsRef}
          className={`mt-12 sm:mt-16 transition-all duration-700 ${certsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
            Certifications
          </h3>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
            {certifications.map((cert) => (
              <Card
                key={cert.name}
                className="px-2 pl-5 py-6 sm:p-6 hover:shadow-glow transition-all animate-fade-in w-[300px] sm:w-[400px] snap-start flex-shrink-0"
              >
                <div className=" space-y-3 sm:space-y-4">
                  <div className="flex ">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-muted rounded-xl p-2 sm:p-3">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="pl-4 pt-1">
                      <h1 className="text-lg sm:text-2xl">{cert.bigname}</h1>
                      <h4 className="text-zinc-500 pt-1 sm:pt-2 font-semibold text-xs sm:text-sm leading-tight break-words">
                        {cert.name}
                      </h4>
                    </div>
                  </div>
                  <div className=" flex flex-col text-xs gap-1 text-zinc-500">
                    <div className="">Issued on : {cert.issuedOn}</div>
                    <div className="mb-2 text-[0.6rem] sm:text-xs">Credential Id : {cert.credentialID}</div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-xs sm:text-sm font-medium"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
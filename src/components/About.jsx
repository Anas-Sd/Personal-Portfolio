import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: education1Ref, isVisible: education1Visible } = useScrollAnimation();
  const { ref: education2Ref, isVisible: education2Visible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card
            ref={card1Ref}
            className={`p-6 sm:p-8 transition-all duration-700 delay-100 ${
              card1Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Who I Am</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Aspiring Software Engineer skilled in full-stack development with cloud-native
              deployment. Strong analytical and problem-solving abilities, eager to leverage scalable,
              high-performance solutions and contribute to impactful enterprise and cloud projects.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With a strong foundation in Computer Science and a passion for continuous learning, I'm
              currently pursuing my B.Tech at KL University while building real-world projects and
              earning industry certifications.
            </p>
          </Card>

          <div
            ref={card2Ref}
            className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-200 ${
              card2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Location</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Vijayawada, Andhra Pradesh
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                  <a
                    href="mailto:myportfolio44455@gmail.com"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    myportfolio44455@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Phone</h4>
                  <a
                    href="tel:+917674088150"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7674088150
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card
            ref={education1Ref}
            className={`p-6 sm:p-8 transition-all duration-700 delay-300 ${
              education1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Education</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-semibold text-base sm:text-lg">KL University</h4>
                <p className="text-sm sm:text-base text-primary">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">2023 – 2027</p>
                <p className="text-xs sm:text-sm font-medium mt-2">CGPA: 9.24</p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h4 className="font-semibold text-base sm:text-lg">Narayana Junior College</h4>
                <p className="text-sm sm:text-base text-primary">Intermediate (BIEAP)</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">2021 – 2023</p>
                <p className="text-xs sm:text-sm font-medium mt-2">Percentage: 90%</p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h4 className="font-semibold text-base sm:text-lg">Sri Chaitanya Techno School</h4>
                <p className="text-sm sm:text-base text-primary">SSC</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">2020 – 2021</p>
                <p className="text-xs sm:text-sm font-medium mt-2">Percentage: 100%</p>
              </div>
            </div>
          </Card>

          <Card
            ref={education2Ref}
            className={`p-6 sm:p-8 transition-all duration-700 delay-400 ${
              education2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Achievements</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Recognized by CIIE Director for innovation in the "Fuel Accessibility Project"
                  under DTI initiative
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Completed learning Japanese language up to N3 level (self-learning and multilingual
                  skills)
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Participated in 3 university Hackathons which involved building websites in teams
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

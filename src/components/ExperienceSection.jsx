import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Lecturer Assistant",
    company: "Dept. of Electrical Engineering and Information Technology, FT UGM",
    location: "Yogyakarta, Indonesia",
    period: "Aug 2024 – Jul 2025",
    description: [
      "Supported delivery of over 9 STEM courses for 600+ students, preparing structured teaching materials and quantitative assessments.",
      "Developed skills in organizing clear, data-driven content and structuring complex information.",
    ],
  },
  {
    title: "Neuroimaging and Signal Processing Intern",
    company: "C-Tech Labs Edwar Technology",
    location: "Tangerang, Indonesia",
    period: "Jan 2024 – Feb 2024",
    description: [
      "Conducted applied research on neuroimaging signal processing using ECVT, analyzing large-scale datasets with MATLAB and Excel.",
      "Enhanced problem-solving skills by interpreting complex data and presenting results to multidisciplinary teams.",
    ],
  },
  {
    title: "Basic Science Lab Assistant",
    company: "Basic Laboratory DTETI FT UGM",
    location: "Yogyakarta, Indonesia",
    period: "Sep 2023 – Dec 2023",
    description: [
      "Facilitated quantitative lab sessions, focusing on circuit theory and linear algebra problem-solving.",
    ],
  },
  {
    title: "Tutorial Assistant",
    company: "Dept. of Electrical Engineering and Information Technology, FT UGM",
    location: "Yogyakarta, Indonesia",
    period: "Aug 2022 – Dec 2023",
    description: [
      "Facilitated group learning sessions on signal analysis and fundamental physics, encouraging critical thinking and problem-solving.",
      "Guided students in applying theoretical knowledge to real-world engineering scenarios.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, key) => (
              <div
                key={key}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  key % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div
                    className={`bg-card p-6 rounded-lg shadow-xs card-hover ${
                      key % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

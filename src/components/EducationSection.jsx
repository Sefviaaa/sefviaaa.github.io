import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Biomedical Engineering",
    institution: "Universitas Gadjah Mada",
    location: "Yogyakarta, Indonesia",
    period: "Aug 2021 – Aug 2025",
    gpa: "3.73/4.00",
    achievements: [
      "Best Biomedical Engineering Graduate 2025",
      "Presented research at IEEE ICITEE 2025, Bangkok, Thailand",
    ],
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {education.map((edu, key) => (
            <div
              key={key}
              className="bg-card p-8 rounded-lg shadow-xs card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full bg-primary/10">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                    <span className="text-primary font-medium">{edu.period}</span>
                  </div>

                  <p className="text-xl text-muted-foreground mb-1">
                    {edu.field}
                  </p>
                  <p className="text-muted-foreground font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {edu.location}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-0.5">★</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

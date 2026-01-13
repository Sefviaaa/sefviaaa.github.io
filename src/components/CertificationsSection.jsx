import { Award } from "lucide-react";

const certifications = [
  {
    name: "Data Engineer Associate",
    issuer: "DataCamp",
    focus: "SQL",
    date: "Nov 2025",
  },
  {
    name: "Data Analyst Associate",
    issuer: "DataCamp",
    focus: "PostgreSQL & Python",
    date: "Nov 2025",
  },
  {
    name: "Biomedical Image Analysis in Python",
    issuer: "DataCamp",
    focus: "NumPy & scikit-image",
    date: "Aug 2023",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
              <p className="text-primary font-medium mb-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mb-2">{cert.focus}</p>
              <p className="text-muted-foreground text-xs">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

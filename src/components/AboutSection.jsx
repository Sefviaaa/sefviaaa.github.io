export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Simplified Text */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">
              Aspiring Data Engineer
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Entry-level data engineer with hands-on experience building batch data pipelines at scale.
              </p>

              <ul className="space-y-2 text-left max-w-lg mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Processed <span className="text-primary font-medium">62M+ transactions</span> using BigQuery, Airflow, dbt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Implemented IaC and CI/CD with Terraform and Docker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Focused on data quality, testing, and reproducibility</span>
                </li>
              </ul>

              <p className="pt-2 text-sm">
                Biomedical Engineering graduate (UGM, 2025) · <span className="text-primary font-medium">IEEE ICITEE 2025</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center items-center">
            <img
              src="/profile-photo-transparent.png"
              alt="Profile Photo"
              className="rounded-full w-full max-w-md object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Database, GitBranch, Server, Workflow } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Data Engineer | Eager to Learn & Build
            </h3>

            <p className="text-muted-foreground">
              I'm a <span className="text-primary font-medium">fresh graduate passionate about data engineering</span>, 
              eager to grow and contribute to real-world data infrastructure. My first end-to-end project processes 
              <span className="text-primary font-medium"> 62M+ banking transactions</span> using 
              BigQuery, Airflow, dbt, and Terraform—built from scratch on GCP with CI/CD practices.
            </p>

            <p className="text-muted-foreground">
              With a background in Biomedical Engineering (Best Graduate, UGM 2025) and research 
              presented at <span className="text-primary font-medium">IEEE ICITEE 2025</span>, 
              I bring strong analytical thinking and a commitment to quality. I'm excited to keep learning, 
              tackle new challenges, and build data systems that make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">ETL/ELT Pipelines</h4>
                  <p className="text-muted-foreground">
                    Designing and orchestrating batch data pipelines with Apache Airflow, 
                    ensuring reliable data flow from source to warehouse.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Warehousing</h4>
                  <p className="text-muted-foreground">
                    Building dimensional models and analytics-ready tables using 
                    dbt and BigQuery with proper testing and documentation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Infrastructure as Code</h4>
                  <p className="text-muted-foreground">
                    Provisioning cloud resources with Terraform and containerizing 
                    workflows with Docker for reproducible deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Quality & Testing</h4>
                  <p className="text-muted-foreground">
                    Implementing dbt tests, CI/CD pipelines, and data validation 
                    to ensure trustworthy, auditable data outputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

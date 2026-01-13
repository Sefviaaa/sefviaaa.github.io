// Centralized project data that can be imported by both HeroSection and ProjectsSection
export const projects = [
    {
        id: 1,
        image: "/projects/banking-pipeline.png.jpg",
        title: "Banking Transaction Pipeline",
        tags: ["BigQuery", "Airflow", "dbt", "Terraform", "Docker", "Python"],
        description: "End-to-end batch data engineering pipeline for processing inter-bank payment transactions with ETL, data warehousing, and analytics dashboards.",
        features: [
            "Processed 62M+ banking transactions with automated ETL workflows",
            "Built scalable data warehouse using BigQuery and dbt for dimensional modeling",
            "Implemented CI/CD pipelines and comprehensive data quality testing",
            "Created interactive dashboards for real-time transaction analytics",
            "Deployed infrastructure as code using Terraform on GCP"
        ],
        technicalDetails: "This project demonstrates a complete data engineering workflow from raw data ingestion to analytics-ready data models. The pipeline processes millions of inter-bank payment transactions daily, transforming raw data into structured, tested, and documented data models. Built from scratch on GCP with emphasis on scalability, reliability, and best practices including version control, automated testing, and infrastructure as code.",
        demoUrl: "https://lookerstudio.google.com/reporting/3e5c5ca1-4f0a-4bdc-966a-fe3b4264704a",
        githubUrl: "https://github.com/Sefviaaa/banking-transaction-pipeline",
    },
    // Add more projects here in the future
];
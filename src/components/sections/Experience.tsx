"use client";

import { useState } from "react";

const experiences = [
    {
        company: "Persa",
        title: "Application Developer",
        url: "https://persa.app",
        range: "Aug 2025 – Present",
        duties: [
            "Engineered and maintained high-throughput backend APIs in Spring Boot supporting core features (user matching algorithms, real-time messaging, profile management, and subscription services), handling 50k+ daily requests with p95 latency under 250ms.",
            "Designed and implemented RESTful microservices documented with OpenAPI 3.0 specifications, enabling seamless frontend integration across iOS and Android platforms and reducing API integration time by 60%.",
            "Architected multi-stage CI/CD pipelines and internal dependency scanning tools to automate testing, validation, and deployment across 50+ third-party SDKs, reducing release cycles to same-day deployments and cutting dependency-related incidents by 45%.",
        ],
    },
    {
        company: "UIUC",
        title: "Research Participant",
        url: "https://illinois.edu",
        range: "June 2025 – Aug 2025",
        duties: [
            "Working under Dr. Darko Marinov focusing on software bug testing and software engineering practices.",
        ],
    },
    {
        company: "MSIPP",
        title: "Machine Learning Engineer Intern",
        url: "https://www.energy.gov/nnsa/minority-serving-institutions-partnership-program-msipp",
        range: "June 2025 – Aug 2025",
        duties: [
            "Developed ensemble predictive models using XGBoost and Random Forest to assess cancer survival risk by integrating multi-omic data across 10 heterogeneous sources, achieving 87% AUC-ROC and 15% improvement in early detection sensitivity.",
            "Engineered scalable ETL pipelines in Python to process and harmonize 589 genomic, proteomic, and clinical features from disparate healthcare databases for 1,000+ oncology patients, implementing feature engineering and dimensionality reduction.",
        ],
    },
    {
        company: "Boys & Girls Club of Middle Tennessee",
        title: "Computer Science Intern",
        url: "https://bgcmt.org",
        range: "Jan 2025 – April 2025",
        duties: [
            "Migrated UIKit Storyboards application to SwiftUI with Google Firebase authentication and database integration for real-time mood tracking, supporting 30+ simultaneous user check-ins within 3-minute window.",
            "Developed data visualization and analytics features using the Swift Charts framework, creating interactive calendar and chart views to support 200+ real-time users, while following Kanban methodology and agile practices.",
            "Conducted interactive coding workshops for 100+ K-12 students, covering programming fundamentals.",
        ],
    },
    {
        company: "Bitforge Dynamics",
        title: "Machine Learning Intern",
        url: "https://bitforgedynamics.com",
        range: "May 2024 – Aug 2024",
        duties: [
            "Resolved the issues of shipping consolidation by applying data mining techniques, saving USD $10k annually.",
            "Applied logistic regression model to predict the pattern of sales for products with an 80% accuracy.",
            "Designed a deep learning model that detects anomalies in speech-to-text functionality reducing downtime by 83%.",
            "Implemented speech recognition capabilities integrating NLP technologies within the existing architecture.",
        ],
    },
    {
        company: "ULM Sports Medicine",
        title: "Data Engineering Intern",
        url: "https://www.ulm.edu",
        range: "Jan 2024 – Aug 2024",
        duties: [
            "Engineered an ETL pipeline in Python using SQLAlchemy, PostgreSQL, and pandas to automate athlete injury data ingestion across 17 sports departments, analyzing 500+ records to identify injury patterns and reduce manual processing time by 75%.",
            "Architected a scalable relational database schema with 13 normalized tables and 13+ foreign key constraints to ensure data integrity for 15,000+ treatment records, implementing many-to-many relationships to support querying for 850+ athletes.",
        ],
    },
    {
        company: "University of Louisiana Monroe",
        title: "Undergraduate Teaching Assistant",
        url: "https://www.ulm.edu",
        range: "Jan 2024 – May 2024",
        duties: [
            "Conducted two comprehensive laboratory classes serving groups of 50 students, fostering interactive learning experiences that solidified foundational skills in Python and Java programming.",
            "Analyzed over 50 individual student projects while providing actionable feedback aimed at enhancing design choices and debugging strategies related directly to introductory coursework involving essential coding practices.",
        ],
    },
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="px-6 md:px-24 lg:px-48 py-24 max-w-3xl mx-auto">
            <h2 className="numbered-heading before:content-['02.']">
                Where I've Worked
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
                {/* Tab List */}
                <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-[var(--lightest-navy)] overflow-x-auto md:overflow-visible scrollbar-hide">
                    {experiences.map((exp, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 py-3 font-mono text-xs md:text-sm text-left whitespace-nowrap transition-all flex-shrink-0 min-w-[120px] md:min-w-0 ${activeTab === i
                                ? "text-[var(--green)] bg-[var(--light-navy)] border-b-2 md:border-b-0 md:border-l-2 border-[var(--green)] md:-ml-[2px]"
                                : "text-[var(--slate)] hover:text-[var(--green)] hover:bg-[var(--light-navy)]"
                                }`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="py-2 px-1 md:px-5 min-h-[340px]">
                    <h3 className="text-xl font-medium text-[var(--lightest-slate)] mb-1">
                        {experiences[activeTab].title}{" "}
                        <span className="text-[var(--green)]">
                            @{" "}
                            <a
                                href={experiences[activeTab].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {experiences[activeTab].company}
                            </a>
                        </span>
                    </h3>
                    <p className="font-mono text-sm text-[var(--slate)] mb-6">
                        {experiences[activeTab].range}
                    </p>
                    <ul>
                        {experiences[activeTab].duties.map((duty, i) => (
                            <li
                                key={i}
                                className="flex gap-4 mb-3 text-[var(--slate)] text-sm leading-relaxed"
                            >
                                <span className="text-[var(--green)] mt-1 flex-shrink-0">
                                    ▹
                                </span>
                                <span>{duty}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

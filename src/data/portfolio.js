// Portfolio data extracted from ShibaniKumar.pdf resume
export const portfolioData = {
  name: "Shibani Kumar",
  title: "Machine Learning Engineer",
  email: "shibanik11@gmail.com",
  phone: "+1 619-648-0254",
  location: "Dallas, TX",
  linkedin: "https://linkedin.com/in/Shibani-Kumar11",
  github: "https://github.com/shibani-11",
  
  about: {
    summary: "Machine Learning Engineer with over 5 years of experience designing and deploying ML pipelines using Python, PyTorch, and Hugging Face. Improved model performance for SaaS clients and developed ETL frameworks that streamlined data workflows and supported client onboarding. Experienced in fine-tuning LLMs, RAG systems, and deploying high-throughput inference workflows.",
    highlights: [
      "Menka Hemrajani Fellowship Recipient, UTD Naveen Jindal School of Management",
      "GPA: 3.767 (MS in ITM)",
      "5+ years of ML engineering experience"
    ],
    interests: "LLM fine-tuning, RAG systems, MLOps, distributed data processing, and building scalable ML pipelines."
  },
  
  education: {
    degree: "Master of Science in Information Technology and Management",
    school: "The University of Texas at Dallas",
    period: "Aug 2024 - Present",
    gpa: "3.767",
    coursework: "Python, Advanced Statistics, Database Foundations, Business Analytics with R, Big Data, Predictive Analytics, Applied Machine Learning, Deep Learning, NLP, Applied AI, AWS Cloud Solutions Architecture"
  },
  
  skills: {
    programming: ["Python", "SQL", "R", "GitHub"],
    ml_ai: ["HuggingFace Transformers", "PyTorch", "LangChain", "Scikit-learn", "TensorFlow", "FastAPI", "LLM Fine-Tuning", "W&B"],
    data_engineering: ["ETL", "Kafka", "Apache Spark", "PySpark", "Hadoop", "DynamoDB"],
    analytics: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "Google Analytics"],
    cloud_deployment: ["Kubernetes", "Flask", "Streamlit", "Docker", "CI/CD", "Azure", "AWS"]
  },
  
  experience: [
    {
      id: 1,
      title: "Research Worker - LLM-Based AI System Development",
      company: "University of Texas, Dallas",
      period: "May 2025 – Dec 2025",
      highlights: [
        "Architected an end-to-end agentic LLM workflow using LangChain and LangGraph, orchestrating multi-step reasoning and tool-calling agents to automate scientific hypothesis generation, reducing manual research effort by 50%.",
        "Designed and optimized large-scale ingestion and evaluation pipelines for over 20,000 research papers, implementing structured extraction and custom benchmarking metrics to improve retrieval coverage by 40%."
      ]
    },
    {
      id: 2,
      title: "Senior Machine Learning Engineer",
      company: "Moolya Software Technologies",
      period: "Aug 2020 – Jun 2022",
      highlights: [
        "Designed and deployed scalable ETL and feature engineering pipelines in Python, SQL, and Scikit-learn, ingesting multi-source SaaS data (Google Ads, Meta Ads, Spotify), improving model accuracy by 15% and reducing processing latency by 30%.",
        "Collaborated with cross-functional teams to design ML-driven analytics and created Tableau dashboards using Python facilitating detailed data analysis and performance modeling for onboarding clients worth $5M.",
        "Led technical mentorship for 3 junior engineers, standardizing pipeline modularization, SQL optimization, and model validation, which cut onboarding ramp-up time by 35% and boosted team productivity."
      ]
    },
    {
      id: 3,
      title: "Software Engineer - Machine Learning",
      company: "Accenture",
      period: "Dec 2017 – Aug 2020",
      highlights: [
        "Engineered distributed data processing pipelines using PySpark, SQL, and Python, automating large-scale order workflow processing for AT&T and reducing manual operational effort by 30%.",
        "Analyzed customer journey and product selection data using SQL, Python (Pandas, Scikit-learn) and Tableau, identifying bottlenecks in orders workflow and improving conversion tracking by 25%."
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "AI-Powered Text Summarizer",
      description: "AI-powered text summarization tool using Meta Llama-3.1-8B-Instruct model with 35% text reduction while retaining 90% of key information.",
      tech: ["Python", "Llama-3.1-8B", "Streamlit", "Flask", "SambaNova API"],
      highlights: ["35% text reduction", "90% key information retention", "100+ users", "2s latency per query"],
      link: "#"
    },
    {
      id: 2,
      title: "Loan Default Prediction",
      description: "Built and optimized supervised ML models to predict loan default risk on 67,000 borrower records with 35 financial and demographic features.",
      tech: ["Python", "XGBoost", "Scikit-learn", "Random Forest"],
      highlights: ["93% ROC-AUC", "0.89 F1-score", "Hyperparameter tuning with grid-search"],
      link: "#"
    },
    {
      id: 3,
      title: "LLM-Based Content Moderation System",
      description: "End-to-end GenAI pipeline to mitigate toxic behaviour on social media using pre-trained and fine-tuned decoder-based LLMs.",
      tech: ["Python", "LLM Fine-Tuning", "vLLM", "Constrained Decoding"],
      highlights: ["85% true positive rate", "Label validity improved from 82% to 90%", "4x latency reduction"],
      link: "#"
    }
  ],
  
  research: [
    {
      id: 1,
      title: "LLM-Based AI System Development",
      description: "Research on agentic LLM workflows using LangChain and LangGraph for scientific hypothesis generation.",
      tags: ["LangChain", "LangGraph", "LLM", "Research"]
    }
  ],
  
  leadership: [
    {
      id: 1,
      title: "Menka Hemrajani Fellowship",
      organization: "UTD Naveen Jindal School of Management",
      description: "Awarded for academic excellence."
    }
  ],
  
  awards: [
    "Menka Hemrajani Fellowship Recipient, UTD Naveen Jindal School of Management"
  ]
};

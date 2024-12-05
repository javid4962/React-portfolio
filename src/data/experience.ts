export interface Experience {
  title: string;
  company?: string;
  duration: string;
  description: string[];
}

export const internships: Experience[] = [
  {
    title: "Frontend Web Development Intern",
    duration: "May 2023 – Aug 2023",
    description: [
      "Designed and implemented user interfaces with HTML, CSS, and JavaScript, improving page load speed by 50%.",
      "Collaborated with a team to build an e-commerce website, enhancing user engagement by 30%.",
      "Troubleshot and optimized website performance, reducing bounce rate by 20%."
    ]
  },
  {
    title: "Web Development with WordPress",
    duration: "Jan 2024 – Apr 2024",
    description: [
      "Executed WordPress hosting and plugin integration, reducing downtime by 25%.",
      "Enhanced security measures with threat mitigation strategies achieving 75% protection.",
      "Optimized plugins and themes, increasing site functionality by 90%."
    ]
  },
  {
    title: "Salesforce Development Intern",
    duration: "Aug 2022 – Oct 2022",
    description: [
      "Gained expertise in Apex programming and Lightning components by completing advanced modules.",
      "Automated processes and created relationships using Salesforce tools, contributing to streamlined operations."
    ]
  }
];
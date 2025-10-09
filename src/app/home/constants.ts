import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

// ✅ Safe default so iterator never receives undefined
const safeProject = {
  project: "",
  date: "",
  descriptions: [""],
};

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Sonu Jatav",
    summary:
      "Aspiring Software Engineer skilled in MERN Stack, JavaScript, and Data Structures. Completed Microsoft AICTE Internship and built impactful projects like Job Preparation Platform. Passionate about scalable web apps, problem-solving, and emerging AI technologies.",
    email: "sonuj22661@gmail.com",
    phone: "+91 799xxxxxxxx",
    location: "Jabalpur, MP, India",
    url: "linkedin.com/in/sonujatav",
  },

  workExperiences: [
    {
      company: "Microsoft AICTE Internship – Edunet",
      jobTitle: "Software Engineer Intern",
      date: "Jun 2025 – Jul 2025",
      descriptions: [
        "Developed cloud-based solutions using Microsoft Azure to automate deployment workflows.",
        "Integrated Generative AI features for automated code review, improving feedback time by 40%.",
        "Collaborated with 5 developers to design and test AI-driven productivity tools.",
      ],
    },
    {
      company: "Jabalpur Engineering College (Academic Project)",
      jobTitle: "Team Lead – Full Stack Developer",
      date: "Jan 2025 – Jun 2025",
      descriptions: [
        "Led a 3-member team to develop a full-stack MERN web application for campus automation.",
        "Implemented authentication, database integration, and responsive design using React and Node.js.",
        "Managed version control and deployment through GitHub and Render.",
      ],
    },
  ],

  educations: [
    {
      school: "Jabalpur Engineering College (JEC)",
      degree: "Bachelor of Technology in Information Technology",
      date: "Sep 2022 – Jun 2026",
      gpa: "—",
      descriptions: [
        "Core Subjects: DSA, OOP, DBMS, Operating Systems, Computer Networks.",
        "Engaged in coding competitions and hackathons focused on MERN-based problem solving.",
        "Research Interest: Full-Stack Web Development, Generative AI, and Cloud Computing.",
      ],
    },
  ],

  // ✅ Keep only 1 project (safe for animation)
  projects: [
    {
      project: "Job Preparation Platform",
      date: "Jan 2025 – Jun 2025",
      descriptions: [
        "Developed a MERN web platform that centralizes placement preparation resources for students.",
        "Implemented secure JWT-based authentication, user dashboard, and progress tracking.",
        "Designed responsive UI using React.js and optimized MongoDB queries for performance.",
      ],
    },
  ],

  skills: {
    featuredSkills: [
      { skill: "C++", rating: 4 },
      { skill: "JavaScript", rating: 4 },
      { skill: "React.js", rating: 4 },
      { skill: "Node.js", rating: 3 },
      { skill: "Express.js", rating: 3 },
      { skill: "MongoDB", rating: 3 },
    ],
    descriptions: [
      "Languages: C++, JavaScript, Python, HTML, CSS.",
      "Frameworks & Libraries: React.js, Node.js, Express.js, Redux.",
      "Tools: Git, GitHub, VS Code, Postman, MongoDB, Render, Netlify.",
      "CS Concepts: DSA (C++), OOP, DBMS, OS, CN.",
      "Soft Skills: Leadership, Teamwork, Problem Solving, Communication.",
    ],
  },

  custom: {
    descriptions: [
      "Certifications: Data Structures & Algorithms in C++ (Supreme 4.0 Batch, 2025), Full-Stack Web Development (CodeHelp, 2023).",
      "Achievements: Top 10 performer in Supreme 4.0 Batch; Led team projects successfully.",
      "Interests: Generative AI, Cloud Computing, Building Scalable Web Systems.",
    ],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  // ✅ Fix: clone with guaranteed fallback object
  projects: [deepClone(initialProject || safeProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};

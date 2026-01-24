import React from "react";

import {
  FaBootstrap,
  FaGaugeHigh,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaPython,
  FaReact,
  FaRobot,
  FaSquareJs,
  FaTruckMoving
} from "react-icons/fa6";

import {
  SiFramer,
  SiJenkins,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";

import { AiOutlineLineChart } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { GrOracle } from "react-icons/gr";
import { MdApi } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "C/C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "PHP", logoComponent: SiPhp, color: "#777BB4" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "PostgreSQL", logoComponent: SiPostgresql, color: "#4169E1" },
      { title: "Oracle SQL", logoComponent: GrOracle, color: "#F80000" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "Bootstrap", logoComponent: FaBootstrap, color: "#7952B3" },
      { title: "Framer Motion", logoComponent: SiFramer, color: "#0055FF" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "Node.js", logoComponent: SiNodedotjs, color: "#339933" },
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      { title: "NumPy", logoComponent: SiNumpy, color: "#013243" },
      { title: "Pandas", logoComponent: SiPandas, color: "#150458" },
      { title: "Matplotlib", logoComponent: AiOutlineLineChart, color: "#11557C" },
    ],
  },
  {
    title: "Dev Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#00C7B7" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Jenkins", logoComponent: SiJenkins, color: "#F05032" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      { title: "Jira", logoComponent: SiJira, color: "#667881" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
    ],
  },
  {
    title: "Concepts & Technologies",
    data: [
      { title: "API Design", logoComponent: MdApi, color: "#5C2D91" },
      { title: "CI/CD", logoComponent: FaTruckMoving, color: "#0A66C2" },
      { title: "AI/ML", logoComponent: GiBrain, color: "#3F51B5" },
      {
        title: "Performance Optimization",
        logoComponent: FaGaugeHigh,
        color: "#388E3C",
      },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      {
        title: "Software Development",
        logoComponent: FaLaptopCode,
        color: "#607D8B",
      },
      { title: "Test Automation", logoComponent: FaRobot, color: "#9C27B0" },
    ],
  },
];

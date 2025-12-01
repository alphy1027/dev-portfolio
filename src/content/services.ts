import ApiIcon from "@/app/home/icons/services/ApiIcon";
import AuthIcon from "@/app/home/icons/services/AuthIcon";
import BackendIcon from "@/app/home/icons/services/BackendIcon";
import DatabaseIcon from "@/app/home/icons/services/DatabaseIcon";
import FrontendIcon from "@/app/home/icons/services/FrontendIcon";
import ResponsiveIcon from "@/app/home/icons/services/ResponsiveIcon";
import { JSX } from "react";

export interface Service {
  id: number;
  title: string;
  icon: () => JSX.Element;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Frontend development",
    icon: FrontendIcon,
    description:
      "I create interactive and visually appealing user interfaces using modern technologies like React, ensuring a seamless user experience across all devices.",
  },
  {
    id: 2,
    title: "Backend development",
    icon: BackendIcon,
    description:
      "I build robust and scalable server-side applications using Node.js and Express, managing data flow and business logic efficiently.",
  },
  {
    id: 3,
    title: "Responsive design",
    icon: ResponsiveIcon,
    description:
      "I design and implement layouts that adapt to any screen size, ensuring a consistent and user-friendly experience on desktops, tablets, and mobile devices.",
  },
  {
    id: 4,
    title: "Database management",
    icon: DatabaseIcon,
    description:
      "I design and handle data storage and retrieval using MongoDB, optimizing database structures and queries for performance and reliability",
  },
  {
    id: 5,
    title: "API development",
    icon: ApiIcon,
    description:
      "I develop secure and efficient RESTful APIs that enable seamless communication between different parts of an application or between external services.",
  },
  {
    id: 6,
    title: "Authentication & Authorization",
    icon: AuthIcon,
    description:
      "I implement secure user authentication and authorization mechanisms, protecting application data and ensuring only authorized access to resources.",
  },
];

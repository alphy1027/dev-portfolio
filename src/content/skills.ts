import CssIcon from "@/app/home/icons/skills/CssIcon";
import ExpressIcon from "@/app/home/icons/skills/ExpressIcon";
import FigmaIcon from "@/app/home/icons/skills/FigmaIcon";
import GitIcon from "@/app/home/icons/skills/GitIcon";
import HtmlIcon from "@/app/home/icons/skills/HtmlIcon";
import JsIcon from "@/app/home/icons/skills/JsIcon";
import MongoIcon from "@/app/home/icons/skills/MongoIcon";
import NextIcon from "@/app/home/icons/skills/NextIcon";
import NodeIcon from "@/app/home/icons/skills/NodeIcon";
import NotionIcon from "@/app/home/icons/skills/NotionIcon";
import PostmanIcon from "@/app/home/icons/skills/PostmanIcon";
import ReactIcon from "@/app/home/icons/skills/ReactIcon";
import TailwindIcon from "@/app/home/icons/skills/TailwindIcon";
import TsIcon from "@/app/home/icons/skills/TsIcon";
import VscodeIcon from "@/app/home/icons/skills/VscodeIcon";
import { JSX } from "react";

export interface Skill {
  id: number;
  title: string;
  icon: () => JSX.Element;
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Html",
    icon: HtmlIcon,
  },
  {
    id: 2,
    title: "Css",
    icon: CssIcon,
  },
  {
    id: 3,
    title: "Javascript",
    icon: JsIcon,
  },
  {
    id: 4,
    title: "Typescript",
    icon: TsIcon,
  },
  {
    id: 5,
    title: "React",
    icon: ReactIcon,
  },
  {
    id: 6,
    title: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    id: 7,
    title: "Next js",
    icon: NextIcon,
  },
  {
    id: 8,
    title: "Node js",
    icon: NodeIcon,
  },
  {
    id: 9,
    title: "Express js",
    icon: ExpressIcon,
  },
  {
    id: 10,
    title: "MongoDB",
    icon: MongoIcon,
  },
  {
    id: 11,
    title: "Figma",
    icon: FigmaIcon,
  },
  {
    id: 12,
    title: "Git",
    icon: GitIcon,
  },
  {
    id: 13,
    title: "Vs code",
    icon: VscodeIcon,
  },
  {
    id: 14,
    title: "Postman",
    icon: PostmanIcon,
  },
  {
    id: 15,
    title: "Notion",
    icon: NotionIcon,
  },
];

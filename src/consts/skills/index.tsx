import { ReactNode } from "react";

import AntdIcon from "@/assets/svg/skills/antd.svg";
import CSSIcon from "@/assets/svg/skills/css.svg";
import FormikIcon from "@/assets/svg/skills/formik.svg";
import HtmlIcon from "@/assets/svg/skills/html.svg";
import InternationalizationIcon from "@/assets/svg/skills/internationalization.svg";
import JavascriptIcon from "@/assets/svg/skills/javascript.svg";
import JWTIcon from "@/assets/svg/skills/jwt.svg";
import MuiIcon from "@/assets/svg/skills/material-ui.svg";
import MobxIcon from "@/assets/svg/skills/mobx.svg";
import NextIcon from "@/assets/svg/skills/next.svg";
import ReactHookFormIcon from "@/assets/svg/skills/react-hook-form.svg";
import ReactQueryIcon from "@/assets/svg/skills/react-query-seeklogo.svg";
import ReactIcon from "@/assets/svg/skills/react.svg";
import ReduxIcon from "@/assets/svg/skills/redux.svg";
import RestIcon from "@/assets/svg/skills/rest-api.svg";
import SeoIcon from "@/assets/svg/skills/seo-3.svg";
import StyledComponentsIcon from "@/assets/svg/skills/styled-components.svg";
import TailwindIcon from "@/assets/svg/skills/tailwind.svg";
import TypescriptIcon from "@/assets/svg/skills/typescript.svg";
import WebSocketIcon from "@/assets/svg/skills/websocket.svg";

export type Skill<K extends string = string> = {
  key: K;
  icon: ReactNode;
  name: string;
  color: string;
  projectDisplayName: string;
};

export const HTML: Skill<"html"> = {
  key: "html",
  icon: <HtmlIcon />,
  name: "HTML",
  color: "#e34c26",
  projectDisplayName: "HTML",
};
export const CSS_SASS: Skill<"css"> = {
  key: "css",
  icon: <CSSIcon />,
  name: "CSS&SASS",
  color: "#264de4",
  projectDisplayName: "CSS",
};
export const JAVASCRIPT: Skill<"js"> = {
  key: "js",
  icon: <JavascriptIcon />,
  name: "JavaScript",
  color: "#f7df1e",
  projectDisplayName: "Javascript",
};
export const TYPESCRIPT: Skill<"ts"> = {
  key: "ts",
  icon: <TypescriptIcon />,
  name: "TypeScript",
  color: "#3178c6",
  projectDisplayName: "Typescript",
};
export const REACT_JS: Skill<"react"> = {
  key: "react",
  icon: <ReactIcon />,
  name: "React.js",
  color: "#61dafb",
  projectDisplayName: "React",
};
export const NEXT_JS: Skill<"next"> = {
  key: "next",
  icon: <NextIcon />,
  name: "Next.js",
  color: "#000000",
  projectDisplayName: "Next.js",
};
export const TANSTACK_QUERY: Skill<"tanstack"> = {
  key: "tanstack",
  icon: <ReactQueryIcon />,
  name: "TanStack Query",
  color: "#ff4154",
  projectDisplayName: "Tanstack query",
};
export const REDUX: Skill<"redux"> = {
  key: "redux",
  icon: <ReduxIcon />,
  name: "Redux",
  color: "#764abc",
  projectDisplayName: "Redux",
};
export const MOBX: Skill<"mobx"> = {
  key: "mobx",
  icon: <MobxIcon />,
  name: "MobX",
  color: "#ff9955",
  projectDisplayName: "MobX",
};
export const REACT_HOOK_FORM: Skill<"rhf"> = {
  key: "rhf",
  icon: <ReactHookFormIcon />,
  name: "React Hook Form",
  color: "#ec5990",
  projectDisplayName: "React-hook-form",
};
export const FORMIK: Skill<"formik"> = {
  key: "formik",
  icon: <FormikIcon />,
  name: "Formik",
  color: "#0272a7",
  projectDisplayName: "HTML",
};
export const STYLED_COMPONENTS: Skill<"styled"> = {
  key: "styled",
  icon: <StyledComponentsIcon />,
  name: "Styled Components",
  color: "#db7093",
  projectDisplayName: "Styled Components",
};
export const TAILWIND_CSS: Skill<"tailwind"> = {
  key: "tailwind",
  icon: <TailwindIcon />,
  name: "Tailwind CSS",
  color: "#38bdf8",
  projectDisplayName: "Tailwind",
};
export const MUI: Skill<"mui"> = {
  key: "mui",
  icon: <MuiIcon />,
  name: "MUI",
  color: "#007fff",
  projectDisplayName: "MaterialUI",
};
export const ANT_DESIGN: Skill<"antd"> = {
  key: "antd",
  icon: <AntdIcon />,
  name: "Ant Design",
  color: "#1677ff",
  projectDisplayName: "AntD",
};

export const JWT: Skill<"jwt"> = {
  key: "jwt",
  icon: <JWTIcon />,
  name: "JWT",
  color: "#67dd19",
  projectDisplayName: "JWT",
};

export const REST: Skill<"rest"> = {
  key: "rest",
  icon: <RestIcon />,
  name: "REST",
  color: "#f06529",
  projectDisplayName: "Rest",
};
export const WEBSOCKETS: Skill<"sockets"> = {
  key: "sockets",
  icon: <WebSocketIcon />,
  name: "WebSockets",
  color: "#00aced",
  projectDisplayName: "WebSockets",
};
export const SEO: Skill<"seo"> = {
  key: "seo",
  icon: <SeoIcon />,
  name: "SEO",
  color: "#00c853",
  projectDisplayName: "SEO",
};
export const INTERNATIONALIZATION: Skill<"lang"> = {
  key: "lang",
  icon: <InternationalizationIcon />,
  name: "next-intl&react-i18next",
  color: "#0070f3",
  projectDisplayName: "Internationalization",
};

export const SKILLS = [
  HTML,
  CSS_SASS,
  JAVASCRIPT,
  TYPESCRIPT,
  REACT_JS,
  NEXT_JS,
  TANSTACK_QUERY,
  REDUX,
  MOBX,
  REACT_HOOK_FORM,
  FORMIK,
  STYLED_COMPONENTS,
  TAILWIND_CSS,
  MUI,
  ANT_DESIGN,
  JWT,
  REST,
  WEBSOCKETS,
  SEO,
  INTERNATIONALIZATION,
] as const;

export type SkillKey = keyof typeof SKILLS;

export type SkillKeyValue = (typeof SKILLS)[number]["key"];

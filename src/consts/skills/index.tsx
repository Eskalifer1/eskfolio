import { ReactNode } from "react";

import AntdIcon from "@/assets/svg/skills/antd.svg";
import CSSIcon from "@/assets/svg/skills/css.svg";
import FormikIcon from "@/assets/svg/skills/formik.svg";
import HtmlIcon from "@/assets/svg/skills/html.svg";
import InternationalizationIcon from "@/assets/svg/skills/internationalization.svg";
import JavascriptIcon from "@/assets/svg/skills/javascript.svg";
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

export type Skill = {
  icon: ReactNode;
  name: string;
  color: string;
};
export const SKILLS: Skill[] = [
  { icon: <HtmlIcon />, name: "HTML", color: "#e34c26" },
  { icon: <CSSIcon />, name: "CSS&SASS", color: "#264de4" },

  { icon: <JavascriptIcon />, name: "JavaScript", color: "#f7df1e" },
  { icon: <TypescriptIcon />, name: "TypeScript", color: "#3178c6" },
  { icon: <ReactIcon />, name: "React.js", color: "#61dafb" },
  { icon: <NextIcon />, name: "Next.js", color: "#000000" },

  { icon: <ReactQueryIcon />, name: "TanStack Query", color: "#ff4154" },
  { icon: <ReduxIcon />, name: "Redux", color: "#764abc" },
  { icon: <MobxIcon />, name: "MobX", color: "#ff9955" },

  { icon: <ReactHookFormIcon />, name: "React Hook Form", color: "#ec5990" },
  { icon: <FormikIcon />, name: "Formik", color: "#0272a7" },

  {
    icon: <StyledComponentsIcon />,
    name: "Styled Components",
    color: "#db7093",
  },
  { icon: <TailwindIcon />, name: "Tailwind CSS", color: "#38bdf8" },
  { icon: <MuiIcon />, name: "MUI", color: "#007fff" },
  { icon: <AntdIcon />, name: "Ant Design", color: "#1677ff" },

  { icon: <RestIcon />, name: "REST", color: "#f06529" },
  { icon: <WebSocketIcon />, name: "WebSockets", color: "#00aced" },

  { icon: <SeoIcon />, name: "SEO", color: "#00c853" },

  {
    icon: <InternationalizationIcon />,
    name: "next-intl&react-i18next",
    color: "#0070f3",
  },
];

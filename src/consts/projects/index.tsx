export interface Project {
  name: string;
  key: string;
  description: string;
  image: string;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Todo List",
    key: "todo-list",
    description: "A simple todo list app.",
    image: "/projects/todo-list.png",
    url: "/projects/todo-list",
  },
  {
    name: "Adventure",
    key: "adventure",
    description: "A simple adventure game with a hero.",
    image: "/projects/adventure.png",
    url: "/projects/adventure",
  },
  {
    name: "Weather App",
    key: "weather-app",
    description: "A simple weather app.",
    image: "/projects/weather-app.png",
    url: "/projects/weather-app",
  },
];

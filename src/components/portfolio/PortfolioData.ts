import dgadmin from "../../assets/dgadmin.png";
import dgtourist from "../../assets/dgtourist.png";
import newsdb from "../../assets/newsdb.png";
import leba from "../../assets/leba.png";
import todo from "../../assets/todo.png";

export const data = [
  {
    id: 1,
    image: dgadmin,
    title: "Digital Guide Admin Panel",
    description:
      "In this application, cities can create and manage their own tours",
    frontend: "React.js, JavaScript, ContextAPI",
    backend: "Node.js, Express, MySQL, Sequelize ORM",
    github: "https://github.com/aqtnguyen/digitalguide/tree/master/client",
  },
  {
    id: 2,
    image: dgtourist,
    title: "Digital Guide App",
    description: "A mobile application to explore the city",
    frontend: "React Native Expo, ContextAPI",
    backend: "Node.js, Express, MySQL, SequelizeORM",
    github: "https://github.com/aqtnguyen/digitalguide/tree/master/mobile",
  },
  {
    id: 3,
    image: newsdb,
    title: "News Dashboard",
    description: "I built this project to improve my full stack knowledge",
    frontend: "Next.js, TypeScript, GraphQL",
    backend: "Node.js, Express, MySQL, TypeORM, Redis",
    github: "https://github.com/aqtnguyen/news-dashboard",
  },
  {
    id: 4,
    image: leba,
    title: "Leba",
    description:
      "This is a social platform application, where you can post anything you want",
    frontend: "Next.js, TypeScript, Redux",
    backend: "Java Spring Boot, MySQL",
    github: "https://github.com/aqtnguyen/leba",
  },
  {
    id: 5,
    image: todo,
    title: "To Do App",
    description: "A simple CRUD application",
    frontend: "React.js, TypeScript, Tailwind CSS, Redux",
    backend: "Java Spring Boot, MySQL",
    github: "https://github.com/aqtnguyen/to-do-app",
  },
];

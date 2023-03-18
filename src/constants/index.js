// import {cpp, html, css, javascript, typescript} from "../assets";
// import {mongodb, express, reactjs, nodejs} from "../assets";
// import {materialui, bootstrap, socketio, mysql, postman, tailwind,threejs,} from "../assets";
// import {solidity, ethereum, hardhat, ganache, truffle, metamask,} from "../assets";
import {mobile, creator, carrent,  jobit, tripguide, } from "../assets";
import {hyperedge} from "../assets";
import {
SiSolidity,
SiCplusplus,
SiJavascript,
SiMongodb,
SiExpress,
SiReact,
SiNodedotjs,
SiTailwindcss,
SiMysql,
SiPostman,
SiBootstrap,
SiSocketdotio,
SiDocker,
SiGithubactions,
SiGooglecloud,
SiLatex,
SiHeroku,
SiVercel,
SiFigma,
SiCanva,
SiGit,
SiHtml5,
SiCss3,
SiTypescript,
SiEthereum,
SiThreedotjs,
SiIpfs
 } from "react-icons/si"
 import {FaHardHat} from "react-icons/fa"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-stack Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: SiCplusplus
    },
    {
      name: "HTML 5",
      icon: SiHtml5,
    },
    {
      name: "CSS 3",
      icon: SiCss3,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Express JS",
      icon: SiExpress,
    },
    {
      name: "React JS",
      icon: SiReact,
    },
    {
      name: "Node JS",
      icon: SiNodedotjs,
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
    },
    {
      name: "Socket.io",
      icon: SiSocketdotio,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "Solidity",
      icon: SiSolidity,
    },
    {
      name: "Ethereum",
      icon: SiEthereum,
    },
    {
      name: "Hardhat",
      icon: FaHardHat,
    },
    {
      name: "IPFS",
      icon: SiIpfs,
    },
    {
      name: "Postman",
      icon: SiPostman,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Three JS",
      icon: SiThreedotjs,
    },
    {
      name: "git",
      icon: SiGit,
    },
    {
      name: "docker",
      icon: SiDocker,
    },
    {
      name: "google cloud",
      icon: SiGooglecloud,
    },
    {
      name: "github actions",
      icon: SiGithubactions,
    },
    {
      name: "latex",
      icon: SiLatex,
    },
    {
      name: "heroku",
      icon: SiHeroku,
    },
    {
      name: "vercel",
      icon: SiVercel,
    },
    {
      name: "figma",
      icon: SiFigma,
    },
    {
      name: "canva",
      icon: SiCanva,
    },
  ];
  
  const experiences = [
    {
      title: "Blockchain Developer",
      company_name: "HyperEdge",
      icon: hyperedge,
      iconBg: "#383E56",
      date: "January 2023 - Ongoing",
      points: [
        "Developing and maintaining web applications using Blockchain tools like Etherium, Solidity and other related technologies.",
        "Collaborating with cross-functional teams including managers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];

  
  const projects = [
    {
      name: "DeVahan",
      description:
        "Decentralized vehicle management system to track vehicles using solidity smart contracts and IPFS, with minimized on-chain data and operations from manufacturing till sold. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "blockchain",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/neetu-749/Dvahan",
    },
    {
      name: "Mern-Whats",
      description:
        "Web app web-WhatsApp clone allowing users to do real-time chat along with google authentication developed using MERN. Implemented real time application using Socket.io.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "google-authentication",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Let's Groww",
      description:
        "A marketplace to connect company and investor allowing real-time chat using socket.io. Firebase realtime database is used for images and MongoDb for rest.     ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/neetu-749/lets_groww_backend",
    },
  ];
  
  export { services, technologies, experiences, projects };
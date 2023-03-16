import {cpp, html, css, javascript, typescript} from "../assets";
import {mongodb, express, reactjs, nodejs} from "../assets";
import {materialui, bootstrap, socketio, mysql, postman, tailwind,threejs,} from "../assets";
import {solidity, ethereum, hardhat, ganache, truffle, metamask,} from "../assets";
import {mobile, backend, creator, web, git, docker, hyperedge, carrent, jobit, tripguide, } from "../assets";
  
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
      icon: cpp
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: express
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Material UI",
      icon: materialui,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Socket.io",
      icon: socketio,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Ethereum",
      icon: ethereum,
    },
    {
      name: "Hardhat",
      icon: hardhat,
    },
    {
      name: "Ganache",
      icon: ganache,
    },
    {
      name: "Truffle",
      icon: truffle,
    },
    {
      name: "Metamask",
      icon: metamask,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
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
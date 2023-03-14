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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };
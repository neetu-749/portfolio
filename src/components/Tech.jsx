import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import SkillsStyles from './skillsStyles.css';
import {ImCss3, ImHtmlFive2} from 'react-icons/im';
import {FaSass,FaPython, FaHardHat,FaNodeJs} from 'react-icons/fa';
import {SiAdobephotoshop, SiLinux, SiThreedotjs, SiUbuntu} from 'react-icons/si';

import {
  SiLinkedin,
  SiGmail,
  SiGithub,
  SiSolidity,
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiIpfs,
  SiMysql,
  SiPostman,
  SiSocketdotio,
  SiC,
  SiRedux,
  SiBootstrap,
  SiFastapi,
  SiFirebase,
  SiPostgresql,
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
  SiSass,
  SiNpm,
  SiLeetcode,
  SiNextdotjs,
  SiTypescript,
  SiEthereum
   } from "react-icons/si"
import { FaBootstrap, FaReact } from "react-icons/fa";
  
  export {FaHardHat} from "react-icons/fa"

const Tech = () => {
  const styles = StyleSheet.create

  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <div className={SkillsStyles.tooltip}><SiCplusplus size={50}/><span className={SkillsStyles.tooltiptext}>C++</span></div>
                            <div className={SkillsStyles.tooltip}><SiJavascript size={50}/><span className={SkillsStyles.tooltiptext}>Javascript</span></div>
                            <div className={SkillsStyles.tooltip}><SiTypescript size={50}/><span className={SkillsStyles.tooltiptext}>Typescript</span></div>
                            
                            <div className={SkillsStyles.tooltip}><SiRedux size={50}/><span className={SkillsStyles.tooltiptext}>Redux</span></div>
                            <div className={SkillsStyles.tooltip}><SiNextdotjs size={50}/><span className={SkillsStyles.tooltiptext}>NextJs</span></div>
                            <div className={SkillsStyles.tooltip}><ImHtmlFive2 size={50}/><span className={SkillsStyles.tooltiptext}>HTML</span></div>
                            <div className={SkillsStyles.tooltip}><ImCss3 size={50}/><span className={SkillsStyles.tooltiptext}>CSS</span></div>
                            <div className={SkillsStyles.tooltip}><FaSass size={50}/><span className={SkillsStyles.tooltiptext}>Sass</span></div>
                            <div className={SkillsStyles.tooltip}><SiTailwindcss size={50}/><span className={SkillsStyles.tooltiptext}>Tailwind CSS</span></div>
                            <div className={SkillsStyles.tooltip}><FaBootstrap size={50}/><span className={SkillsStyles.tooltiptext}>Bootstrap</span></div>
                            <div className={SkillsStyles.tooltip}><SiMongodb size={50}/><span className={SkillsStyles.tooltiptext}>MongoDB</span></div>
                            <div className={SkillsStyles.tooltip}><SiExpress size={50}/><span className={SkillsStyles.tooltiptext}>Express</span></div>
                            <div className={SkillsStyles.tooltip}><FaReact size={50}/><span className={SkillsStyles.tooltiptext}>React</span></div>
                            <div className={SkillsStyles.tooltip}><FaNodeJs size={50}/><span className={SkillsStyles.tooltiptext}>NodeJS</span></div>
                            <div className={SkillsStyles.tooltip}><SiNpm size={50}/><span className={SkillsStyles.tooltiptext}>npm</span></div>
                            <div className={SkillsStyles.tooltip}><SiMysql size={50}/><span className={SkillsStyles.tooltiptext}>MySql</span></div>
                            <div className={SkillsStyles.tooltip}><SiPostgresql size={50}/><span className={SkillsStyles.tooltiptext}>PostgreSQL</span></div>
                            <div className={SkillsStyles.tooltip}><SiThreedotjs size={50}/><span className={SkillsStyles.tooltiptext}>ThreeJs</span></div>
                            <div className={SkillsStyles.tooltip}><SiSolidity size={50}/><span className={SkillsStyles.tooltiptext}>Solidity</span></div>
                            <div className={SkillsStyles.tooltip}><SiEthereum size={50}/><span className={SkillsStyles.tooltiptext}>Ethereum</span></div>
                            <div className={SkillsStyles.tooltip}><FaHardHat size={50}/><span className={SkillsStyles.tooltiptext}>Hardhat</span></div>
                            <div className={SkillsStyles.tooltip}><SiIpfs size={50}/><span className={SkillsStyles.tooltiptext}>Ipfs</span></div>

                            <div className={SkillsStyles.tooltip}><SiSocketdotio size={50}/><span className={SkillsStyles.tooltiptext}>Socket.io</span></div>
                            <div className={SkillsStyles.tooltip}><SiGit size={50}/><span className={SkillsStyles.tooltiptext}>Git</span></div>
                            <div className={SkillsStyles.tooltip}><SiGithub size={50}/><span className={SkillsStyles.tooltiptext}>GitHub</span></div>

                            <div className={SkillsStyles.tooltip}><SiGithubactions size={50}/><span className={SkillsStyles.tooltiptext}>Git Actions</span></div>
                            {/* <div className={SkillsStyles.tooltip}><SiGitlab size={50}/><span className={SkillsStyles.tooltiptext}>GitLab</span></div> */}
                            <div className={SkillsStyles.tooltip}><SiGooglecloud size={50}/><span className={SkillsStyles.tooltiptext}>GCP</span></div>
                            <div className={SkillsStyles.tooltip}><SiFirebase size={50}/><span className={SkillsStyles.tooltiptext}>Firebase</span></div>
                            <div className={SkillsStyles.tooltip}><SiPostman size={50}/><span className={SkillsStyles.tooltiptext}>Postman</span></div>
                            <div className={SkillsStyles.tooltip}><SiHeroku size={50}/><span className={SkillsStyles.tooltiptext}>Heroku</span></div>
                            <div className={SkillsStyles.tooltip}><SiVercel size={50}/><span className={SkillsStyles.tooltiptext}>Vercel</span></div>
                            {/* <div className={SkillsStyles.tooltip}><SiNetlify size={50}/><span className={SkillsStyles.tooltiptext}>Netlify</span></div> */}
                            <div className={SkillsStyles.tooltip}><SiLinux size={50}/><span className={SkillsStyles.tooltiptext}>Linux</span></div>
                            <div className={SkillsStyles.tooltip}><SiUbuntu size={50}/><span className={SkillsStyles.tooltiptext}>Ubuntu</span></div>


							<div className={SkillsStyles.tooltip}><SiCanva size={50}/><span className={SkillsStyles.tooltiptext}>Canva</span></div>
    </div>
  );
};



export default SectionWrapper(Tech, "tech");
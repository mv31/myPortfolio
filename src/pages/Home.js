import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Manoj M V</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM,
               BootStrap, MaterialUI, Yarn,StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring,  ExpressJS, GraphQL, ApolloServer,
              MySQL, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java,  C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
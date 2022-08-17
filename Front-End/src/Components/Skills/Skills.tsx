import { StyledHeading } from "../About/AboutElements";
import RotatingSphere from "../RotatingSphere/RotatingSphere";
import { SkillsBody, SkillsContainer, Text } from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsBody id="skills">
        <SkillsContainer>
          <StyledHeading>Skills</StyledHeading>
          <Text>
            I have been coding for 3 years and I have learned to code in C++, JavaScript, 
            Python, Typescript, version control with Git, and database
            management with MySQL. I possess strong knowledge in Data
            Structures, Algorithms, and OOP principles. I can set up and manage
            a Windows OS and Linux OS.
            <br />
            <br />I have base
            knowledge with different programming languages like C, Haskell, Java, and
            Prolog. I also have taken and certified Python Coursera courses which
            you can check in my&nbsp;
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/pratik-tayade-48407b15a/"
            >
              LinkedIn
            </a>{" "}
            profile.
          </Text>
        </SkillsContainer>
        <SkillsContainer justify="center">
          <RotatingSphere />
        </SkillsContainer>
      </SkillsBody>
    </>
  );
};

export default Skills;

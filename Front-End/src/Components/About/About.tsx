import photoOfMe from "../../Assets/Photo.jpg";
// import photoOfMe1 from "../../Assets";
import {
  AboutBody,
  AboutContainer,
  StyledHeading,
  Photo,
  TextSection,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutBody id="about">
        <AboutContainer>
          <StyledHeading>Who I Am?</StyledHeading>
          <TextSection>
            I am a Software Developer and a student at VPPCOE Mumbai University pursuing Bachelor of Engineering (B.E.)
            in IT, located in Mumbai.
            <br />
            <br />
            An IT Engineer with 8-10 months of Industrial Experience in Web-Devlopment and AI & ML. Created successful websites that are fast, easy to use, and built with best practices. My main experience is in front-end development but I also have a good knowledge in Data Structures & Algorithms and AI & ML.
            <br />
            <br />I am passionate about solving technical problems, researching
            and developing new software and technologies. I undertake and
            challenge myself to always improve, by being proactive, diligent,
            responsible, and committed to finding the perfect solution to any
            problem.
          </TextSection>
        </AboutContainer>
        <AboutContainer>
          <Photo src={photoOfMe} />
        </AboutContainer>
      </AboutBody>
    </>
  );
};

export default About;

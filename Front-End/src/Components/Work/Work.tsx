import Project from "../Project/Project";
import { WorkBody, WorkContainer } from "./WorkElements";
import { StyledHeading } from "../About/AboutElements";
import AiNewsBot from "./../../Assets/AI News bot.mp4";
import Airline from "./../../Assets/Airline Reservation System.mp4";
import LaptopPrice from "./../../Assets/Laptop Price Prediction.mp4";
import AgeGenderDetection from "./../../Assets/Age&GenderDetection.mp4";

const Work = () => {
  const ageGenderDetection: string[] = [
    "Python",
    "Machine Learning",
    "AI",
    "CNN",
    "OpenCV",
    "Streamlit",
  ];

  const AiNewsVoiceBot: string[] = [
    "API integration",
    "Alan Ai",
    "HTML",
    "React.js",
    "CSS",
    "JavaScript",
  ];

  const AirlineRes: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
  ];

  const LaptopPricePred: string[] = [
    "Data Science",
    "Regression Models",
    "Machine Learning",
    "Prediction Model",
  ];

  return (
    <>
      <WorkBody id="work">
        <WorkContainer style={{ alignSelf: "flex-start" }}>
          <StyledHeading>Some of My Projects/Work</StyledHeading>
        </WorkContainer>
        <div style={{ height: 40 }}></div>
        <Project
          invertedOrientation={false}
          projectName="Age and Gender Detection"
          projectDescription="Used Deep Learning to accurately identify the gender and age of a person from a single image of a face. The predicted gender may be one of ‘Male’ and ‘Female’, and the predicted age may be one of the following ranges- (0–2), (4–6), (8–12), (15–20), (25–32), (38–43), (48–53), (60–100)."
          video={AgeGenderDetection}
          stackItems={ageGenderDetection}
        ></Project>
        <Project
          invertedOrientation={true}
          projectName="AI News bot"
          projectDescription="Application using Alan AI. Alan AI is a revolutionary speech recognition software that allows you to add voice capabilities to your applications. It allows you to control absolutely everything in the app using your voice."
          video={AiNewsBot}
          stackItems={AiNewsVoiceBot}
        ></Project>
        <Project
          invertedOrientation={false}
          projectName="Online Flight Reservation System"
          projectDescription="Online Flight Reservation System is a web application that helps the commuters to book flight ticket online."
          video={Airline}
          stackItems={AirlineRes}
        ></Project>
        <Project
          invertedOrientation={true}
          projectName="Laptop Price Prediction"
          projectDescription="The problem statement is that if any user wants to buy a laptop then our application should be compatible to provide a tentative price of laptop according to the user configurations. Although it looks like a simple project or just developing a model, the dataset we have is noisy and needs lots of feature engineering, and preprocessing that will drive your interest in developing this project."
          video={LaptopPrice}
          stackItems={LaptopPricePred}
        ></Project>
        <h1 style={{ color: "white", paddingBottom: "1.2em" }}>
          You can check more of my work in&nbsp;
          <a
            style={{ color: "white", alignSelf: "center" }}
            href="https://github.com/Pratik733"
          >
            Github
          </a>
        </h1>
      </WorkBody>
    </>
  );
};

export default Work;

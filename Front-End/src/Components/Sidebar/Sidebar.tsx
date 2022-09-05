import { Line, SidebarBody, SocialIcon } from "./SidebarElements";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const iconSize = 30;

const Sidebar = () => {
  return (
    <>
      <SidebarBody>
        <SocialIcon href="mailto:pratik.tayade733@gmail.com">
          <FiMail size={iconSize} />
        </SocialIcon>
        <SocialIcon href="https://github.com/Pratik733">
          <FiGithub size={iconSize} />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/pratik-tayade-48407b15a/">
          <FiLinkedin size={iconSize} />
        </SocialIcon>
        <Line />
      </SidebarBody>
    </>
  );
};

export default Sidebar;


import { ReactComponent as GithubIcon } from "./Icons/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "./Icons/linkedin-square-icon.svg";
import { ReactComponent as XIcon } from "./Icons/x-social-media-black-icon.svg";
const GuideFooter = () => {
  return (
    <footer className="footer signup-footer" style={{backgroundColor : "transparent"}}>
      <div className="footerContainer" >
        <div className="footer-left">
          <a href="https://github.com/notaliranjbar" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="footer-icon signup-footer-icon github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="footer-icon signup-footer-icon linkedin" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <XIcon className="footer-icon signup-footer-icon" />
          </a>
        </div>
        <div className="footer-right">
          <a href="/">Homepage</a>
        </div>
      </div>
    </footer>
  );
};

export default GuideFooter;
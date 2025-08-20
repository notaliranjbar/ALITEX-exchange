
import { ReactComponent as GithubIcon } from "./Icons/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "./Icons/linkedin-square-icon.svg";
import { ReactComponent as XIcon } from "./Icons/x-social-media-black-icon.svg";
const WalletPageFooter = () => {
  return (
    <footer className="footer" style={{backgroundColor : "transparent" , marginTop : "auto"}}>
      <div className="footerContainer">
        <div className="footer-left">
          <a href="https://github.com/notaliranjbar" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="footer-icon github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="footer-icon linkedin" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <XIcon className="footer-icon" />
          </a>
        </div>
        <div className="footer-right">
          <a href="/help-center">Help Center</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <span>@2025 Ali Ranjbar</span>
      </div>
    </footer>
  );
};

export default WalletPageFooter;

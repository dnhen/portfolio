import '../Styles/SectionFooter.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SectionFooter = () => {
  return (
    <div className="footer">
      <div className="roundedBox">
        <h1><span className="logoText">dnhen.</span></h1>
      </div>
      <div className="iconList">
        <a href="https://twitter.com/thednhen"><FaTwitter size="25" /></a>
        <a href="https://www.linkedin.com/in/daniel-henry1"><FaLinkedinIn size="25" /></a>
        <a href="https://github.com/dnhen"><FaGithub size="25" /></a>
      </div>
      <p>Created by me © 2021</p>
    </div>
  )
}

export default SectionFooter

import '../Styles/SectionCover.css';
import CoverImage from '../Assets/cover_coding.svg';
import { FaArrowDown } from "react-icons/fa";

const SectionCover = () => {

  return (
    <div className="coverContent" id="home">
      <div className="leftContent">
        <p className="smallText">Hey, I'm <span className="background">Daniel.</span></p>
        <p className="largeText">I love writing <span className="underline">beautiful code</span> <span className="blinker">|</span></p>
        <button>Check out my work <FaArrowDown style={{paddingLeft: "5px", verticalAlign: "middle"}} /></button>
      </div>
      <div className="rightContent">
        <img src={CoverImage} id="coverImage" alt="Person typing code" />
      </div>
    </div>
  );
}

export default SectionCover;

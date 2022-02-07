import '../Styles/SectionAbout.css';
import { FaPencilRuler, FaDatabase, FaUsers } from 'react-icons/fa';

const SectionAbout = () => {

  return (
    <div className="aboutContent" id="about">
      <div className="backgroundBox">
        <div className="innerBox">
          <h1>About me</h1>
          <p>Lorem ipsum goes here this is kinda funny because. Lorem ipsum goes here this is kinda funny because. Lorem ipsum goes here this is kinda funny because. Lorem ipsum goes here this is kinda funny because. Lorem ipsum goes here this is kinda funny because.</p>
        </div>
      </div>
      <div className="roundedBox">
        <div className="feature">
          <FaPencilRuler size="40" style={{color: "#6B289E"}} />
          <p className="title">Front-End</p>
          <p>Testing this item that goes here. Test One</p>
          <p className="title">Past Projects</p>
          <p>Testing this item that goes here.</p>
          <p>Testing this item that goes here.</p>
          <p>Testing this item that goes here.</p>
        </div>
        <div className="feature">
          <FaDatabase size="40" style={{color: "#6B289E"}} />
          <p className="title">Back-End</p>
          <p>Testing this item that goes here.</p>
          <p className="title">Past Projects</p>
          <p>Testing this item that goes here.</p>
          <p>Testing this item that goes here.</p>
          <p>Testing this item that goes here.</p>
        </div>
        <div className="feature">
          <FaUsers size="40" style={{color: "#6B289E"}} />
          <p className="title">Leadership</p>
          <p>Testing this item that goes here.</p>
          <p className="title">Past Projects</p>
          <p>Testing this item that goes here.</p>
          <p>Testing this item that goes here.</p>
          <p>Testing this item that goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default SectionAbout;

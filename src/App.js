import './App.css';
import Navbar from './Components/Navbar';
import SectionCover from './Components/SectionCover';
import SectionAbout from './Components/SectionAbout';
import SectionProjects from './Components/SectionProjects';
import SectionFooter from './Components/SectionFooter';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <SectionCover />
      <SectionAbout />
      <SectionProjects />
      <SectionFooter />
    </div>
  );
}

export default App;

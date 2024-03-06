
import About from './About_Section/About_sec.js';
import FirstNavBar from './First-nav_Folder/First_nav_bar.js';
import Second_nav_bar from './Second_nav_Folder/Second_nav_bar.js';
import Section_03 from './Section_03/Section_03.js';
import About_sec from './About_Section/About_sec.js';
import Gallery from './Gallery_Section/Gallery.js';
import Services from './Services_Section/Services.js';
import Message from './Message_Section/Message.js';
import Map from './Map_Section/Map.js';
import Opening_hours from './Opening_hr/Opening_hours.js';
import Contact from './Contact_Section/Contact.js';
function App() {
  return (
    <div className="App">
     <FirstNavBar/> 
     <Second_nav_bar /> 
     <Section_03/>
     <About_sec/>
     <Gallery/>
     <Services/>
     <Message/>
     <Map/>
     <Opening_hours/>
     <Contact/>
    </div>
  );
}

export default App;

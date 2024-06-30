import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  
  // let greet=<b>Good morning</b>;
  //fragment is <></> tag
  return (
    <>
    
    <Navbar title="WordApp" prompts="Prompts"/>
    <TextForm heading="Enter the text to modify"/>
    
    </>
  );
}

export default App;

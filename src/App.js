//import logo from './logo.svg';
import './App.css';
import NavBar from './MyComponents/NavBar';
import TextForm from './MyComponents/TextForm';

function App() {
  return (
    <>
  {/* <NavBar title={3} aboutText="About Text"/> */ /*here number is passed so it shows error */}
  {/* <NavBar /> if nothis is passes in props default values will be displayed */}
  <NavBar title="TextUtils" /*aboutText="About Text"*/  /> 
  <div className='container'>
    <br></br>
    <br></br>
    <TextForm heading='Enter the text to analyse' /></div>

  </>
   
  );
}

export default App;

import { Route, Routes} from "react-router-dom";
import'./App.css';
import Home from "./Home";
import Room from "./Room";
import About from "./About"; // Import the About component
import Contact from "./Contact"; // Import the Contact component
import SignIn  from './SignIn'; // Import the Contact component
import SignUp from "./SignUp"; // Import the Contact component

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/room/:roomID" element={<Room/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;

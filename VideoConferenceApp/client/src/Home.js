import React from "react";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import conf from "../src/assets/conf.jpeg";
import Navbar from "./components/Navbar";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  // const [alertShown, setAlertShown] = useState(false);
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };
  useEffect(() => {
    // Check if the alert has already been shown
    const alertShown = sessionStorage.getItem("alertShown");
    
    if (!alertShown) {
      // Show the alert and store in sessionStorage
      alert("Please SignIn using SignUp/SignIn link at the top to continue Further Please Click Ok and Proceed To do SignIn First.");
      sessionStorage.setItem("alertShown", "true");
    }
  }, []);
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div
        style={{
          marginTop: "5rem", // Adjust to match the height of your navbar
          padding: "1rem",
        }}
      >
      <div className="relative h-screen home-content">
        {/* Image */}
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={conf} className="object-cover  w-full h-full"  alt="ConferenceImage"/>
        </div>
        {/* Overlay */}
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className=" flex flex-col items-center justify-center pb-8">
            <h1 className="text-[25px] md:text-[30px] text-white font-bold pt-2">
              Welcome to Video Conference App
            </h1>
            {/* <p className="text-[26px] text-white  -mt-2">With ZegoCloud</p> */}
          </div>

          {/* Enter Code */}
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12 flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col justify-center items-center">
              <label className="text-[30px] md:text-[40px] font-bold pt-6">
                Enter Meeting Id
              </label>
              <input
                type="text"
                required
                placeholder="Enter Meeting Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[12rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >
             Join
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;

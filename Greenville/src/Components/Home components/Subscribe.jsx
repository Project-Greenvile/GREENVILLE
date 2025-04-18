import { motion } from "framer-motion";
import { clogo } from "../../assets";

export default function Subscribe() {
  return (
    <>
      <div className="subscribeCon">
        <div className="phoneMock">
          <motion.img
            src={clogo}
            alt="logo"
            className="myMock"
            animate={{
              rotate: 360, // Rotating 360 degrees
            }}
            transition={{
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Continuous loop
              duration: 10, // Rotation speed, adjust as needed
              ease: "linear", // Smooth continuous rotation
            }}
          />
        </div>

        <div className="otherHalf">
          <div className="anticipationText">
            <h1 className="subSecHeader">
              Coming soon <br></br>Greenville Application
            </h1>
            <p className="subSecParagraph">
            Imagine being able to request, track, and manage your waste pickups from your mobile phone... soon you'll be able to.
            </p>
          </div>

          <div className="anticipateForm">
            <form>
              <input
                type="email"
                placeholder="Enter Email"
                className="subInput"
              />
              <button className="subBtn">Join waiting list</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

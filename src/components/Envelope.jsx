import SilverDish from "./SilverDish";
// export default function Envelope() {
//   return (
//     <body className="body">
//       <SilverDish />
//       <div className="wrapper">
//         <div className="lid one"></div>
//         <div className="lid two"></div>
//         <div className="envelope"></div>
//         <div className="letter">
//           <div className="section1"></div>
//           <div className="section2"></div>
//           {/* <div className="section3"></div> */}
//         </div>
//         {/* <!-- Button centered inside the letter --> */}
//         <button className="open-btn">Open</button>
//       </div>
//     </body>
//   );
// }

import { useState } from "react";

export default function Envelope({ onClick }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
    onClick(); // call parent function
  };

  return (
    <>
      <SilverDish />
      <div
        className="wrapper"
        style={{
          width: "300px",
          height: "200px",
          position: "absolute",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Envelope Lid */}
        <div
          className={`lid one`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderTop: "100px solid #f2efe8",
            borderLeft: "150px solid transparent",
            borderRight: "150px solid transparent",
            borderBottom: "100px solid transparent",
            transform: opened ? "rotateX(90deg)" : "rotateX(0deg)",
            transformOrigin: "top",
            transition: "transform 0.25s linear",
            zIndex: 3,
          }}
        />
        <div
          className="lid two"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderTop: "100px solid #f2efe8",
            borderLeft: "150px solid transparent",
            borderRight: "150px solid transparent",
            borderBottom: "100px solid transparent",
            transform: opened ? "rotateX(180deg)" : "rotateX(90deg)",
            transformOrigin: "top",
            transition: "transform 0.25s linear",
            zIndex: 1,
          }}
        />

        {/* Envelope Body */}
        <div
          className="envelope"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderTop: "100px solid transparent",
            borderLeft: "150px solid #e8e2d4",
            borderRight: "150px solid #e8e2d4",
            borderBottom: "100px solid #e8e2d4",
            zIndex: 3,
          }}
        />

        {/* Letter */}
        <div
          className="letter"
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            borderRadius: "15px",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.5s",
            transform: opened ? "translateY(-50px)" : "translateY(0)",
            border: "2px solid #d1d1d1",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            backgroundColor: "#fff",
          }}
        >
          <div
            className="section1"
            style={{ flex: 1, width: "100%", backgroundColor: "#e8e2d4" }}
          />
          <div
            className="section2"
            style={{ flex: 3, width: "100%", backgroundColor: "#421603" }}
          />
        </div>

        <button
          onClick={handleClick}
          style={{
            position: "absolute",
            top: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #e6e6e6, #c0c0c0, #888888)",
            border: "3px solid #666",
            cursor: "pointer",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Courier New, monospace",
            fontWeight: "bold",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Open
        </button>
      </div>
    </>
  );
}

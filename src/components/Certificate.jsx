import { useEffect, useState } from "react"

export default function Certificate() {
  const [data,setData] = useState({});
  useEffect(()=>{
    console.log("axios get data");

  },[])
  return (
    <>
      <div
        style={{
          marginTop: "35px",
          marginLeft: "20px",
          borderStyle: "solid",
          borderWidth: "8px",
          borderColor: "#446A46",
        }}
      >
        <div
          style={{
            height: "450px",
            width: "680px",
            margin: "20px",
            position: "absolute",
            zIndex: "-1",
            opacity: "0.1",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "300px", marginTop: "80px",marginLeft:"55px" }}
            src="images/logo.png"
            alt="logo"
          />
        </div>
        <div
          style={{
            height: "450px",
            margin: "20px",
          }}
        >
          <a
            href={`https://react-app-testing.vercel.app/transaction/$`}
            style={{
              padding: "0",
              float: "right",
              fontSize: "0.8rem",
              marginRight: "10px",
              textDecoration: "none",
              color: "grey",
            }}
          >
            Document Hash : {"hash"}
          </a>
          <div
            style={{
              width: "100%",
              backgroundColor: "#FAF5E4",
              height: "110px",
              borderRadius: "10px",
            }}
          >
            <img
              src="images/logo.png"
              alt="logo"
              style={{ height: "80px", margin: "15px", float: "left" }}
            />
            <h1 style={{ paddingTop: "10px" }}>BITS PILANI GOA</h1>
            <div style={{ float: "right", marginRight: "30px" }}>
              <p>Certificate ID: {"certificate id"}</p>
            </div>
            <h6> Pilani | Goa | Hyderabad | Dubai</h6>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "Tiro Bangla",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              This certifies that
            </h1>
            <div style={{ color: "#446A46" }}>
              <h2>~ {"Harsh Tyagi"} ~</h2>
            </div>
            <h1
              style={{
                fontFamily: "Tiro Bangla",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              has successfully completed IT bootcamp's
            </h1>
            <h3>" {"Course name"} "</h3>
            <h1
              style={{
                fontFamily: "Tiro Bangla",
                fontSize: "1rem",
                marginTop: "10px",
              }}
            >
              Developer Certification, representing approximately 100 hrs of
              coursework
            </h1>
            <hr />
            <div
              style={{ float: "left", marginLeft: "20px", marginTop: "20px" }}
            >
              <h6>Issued on: </h6>
              <h5>{"Time Stamp"}</h5>
            </div>
            <div style={{ float: "right", marginRight: "20px" }}>
              <div style={{ marginTop: "45px" }} />
              
              <h6>{" Prof. Name"}</h6>
              <h6 style={{ fontSize: "0.7rem" }}>CSE Department, Goa Campus</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

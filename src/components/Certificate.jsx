import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-spinners/BeatLoader";

export default function Certificate() {
  let params = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    axios
      .get(`https://bigchaindb-post-txn.herokuapp.com/viewcertificate/${params.certId}/${params.hash}`)
      .then(function (response) {
        console.log(response.data);
        setData(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])

  return (
    <>
      {loading ? (
        <div
          style={{ padding: "0 18%", marginTop: "120px", textAlign: "center" }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <div style={{ padding: "0 17%", marginTop: "90px" }}>
            <h2 style={{ color: "#446A46" }} className="text-center">
              Your Certificate is here 🎉
            </h2>
            <div
              style={{
                marginTop: "35px",
                marginLeft: "20px",
                borderStyle: "solid",
                borderWidth: "8px",
                borderColor: "#446A46",
                borderRadius: "20px",
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
                  style={{
                    width: "300px",
                    marginTop: "80px",
                    marginLeft: "55px",
                  }}
                  src="images/logo.png"
                  alt="logo"
                />
              </div>
              <div
                style={{
                  height: "470px",
                  margin: "10px",
                }}
              >
                <p
                  onClick={()=>{
                      window.open(`https://react-app-testing.vercel.app/transaction/${data.hash}`, "_blank", "noopener,noreferrer");
                  }}
                  style={{
                    padding: "0",
                    float: "right",
                    fontSize: "0.8rem",
                    marginRight: "10px",
                    cursor:"pointer",
                    marginTop: "0px",
                    textDecoration: "none",
                    color: "grey",
                  }}
                >
                  Document Hash : {data.hash} -- Click to view on Blockchain
                </p>

                <br />
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#FAF5E4",
                    height: "110px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="../../images/logo.png"
                    alt="logo"
                    style={{ height: "80px", margin: "12px",marginTop:"0px", float: "left" }}
                  />
                  <h1 style={{ paddingTop: "10px" }}>BITS PILANI GOA</h1>
                  <h6> Pilani | Goa | Hyderabad | Dubai</h6>
                  <div
                    style={{
                      float: "right",
                      marginRight: "30px",
                      marginTop: "-50px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: " 1.2rem",
                        padding: "3px",
                        fontWeight: "900",
                        fontFamily: "monospace",
                        whiteSpace: "normal",
                        border: "solid 2px",
                        borderRadius: "10px",
                      }}
                    >
                      Certificate ID: {10000000 + Number(data.doc_uid)}
                    </p>
                  </div>
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
                    <h2>~ {data.certificate_data.name} ~</h2>
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
                  <h3>" {data.certificate_data.course} "</h3>
                  <h1
                    style={{
                      fontFamily: "Tiro Bangla",
                      fontSize: "1rem",
                      marginTop: "10px",
                    }}
                  >
                    Developer Certification, representing approximately 100 hrs
                    of coursework
                  </h1>
                  <hr />
                  <div
                    style={{
                      float: "left",
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <h6>Issued on: </h6>
                    <h5>{data.time_stamp}</h5>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      marginTop: "20px",
                    }}
                  >
                    <button
                    onClick={()=>{
                      window.open(`http://localhost:3001/${data.doc_uid}/${data.hash}`, "_blank", "noopener,noreferrer");
                    }}
                      className="btn btn-primary"
                    >
                      View Certificate
                    </button>
                  </div>
                  <div style={{ float: "right", marginRight: "20px" }}>
                    <div style={{ marginTop: "25px" }} />

                    <h6>{data.certificate_data.professor}</h6>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      CSE Department, Goa Campus
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center m-3">
            <button className="btn btn-lg btn-danger">
              <strong>Download PDF</strong>{" "}
            </button>
          </div>
        </>
      )}
    </>
  );
}

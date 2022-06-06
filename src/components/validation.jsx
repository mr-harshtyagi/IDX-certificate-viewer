import { Container, Row,Col, Table } from "react-bootstrap"
import NavBar from "./navbar"
import { useParams } from "react-router-dom";
import Loader from "react-spinners/BeatLoader";
import { ClipLoader } from "react-spinners";
import { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import { BsFillPatchCheckFill, BsCheckCircleFill } from "react-icons/bs";
import axios from "axios";

const Validation = () => {
    let params =useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
     useEffect(() => {
       axios
         .get(
           `https://bigchaindb-post-txn.herokuapp.com/viewcertificate/${params.certId}/${params.hash}`
         )
         .then(function (response) {
           console.log(response.data);
           setData(response.data);
           setLoading(false);
         })
         .catch(function (error) {
           console.log(error);
         });
     }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <div style={{ marginTop: "90px", textAlign: "center" }}>
          <Container>
            <Row>
              <Col lg="3" sm="1"></Col>
              <Col lg="6" sm="10">
                <ClipLoader size={50} />
                <br />
                <br />
                <h1> Verifying Certificate ...</h1>
                <br />
                <div
                  style={{
                    float: "left",
                    display: "inline-block",
                    paddingLeft: "20px",
                  }}
                >
                  <ClipLoader />
                  <h2
                    style={{
                      fontWeight: "300",
                      display: "inline-block",
                      marginLeft: "20px",
                    }}
                  >
                    Verifying Credential Data
                  </h2>
                </div>
                <div
                  style={{
                    float: "left",
                    display: "inline-block",
                    marginTop: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <ClipLoader />
                  <h2
                    style={{
                      fontWeight: "300",
                      display: "inline-block",
                      marginLeft: "20px",
                    }}
                  >
                    Checking Issuer
                  </h2>
                </div>
                <div
                  style={{
                    float: "left",
                    display: "inline-block",
                    marginTop: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <ClipLoader />
                  <h2
                    style={{
                      fontWeight: "300",
                      display: "inline-block",
                      marginLeft: "20px",
                    }}
                  >
                    Checking Validity
                  </h2>
                </div>
                <div
                  style={{
                    float: "left",
                    display: "inline-block",
                    marginTop: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <ClipLoader />
                  <h2
                    style={{
                      fontWeight: "300",
                      display: "inline-block",
                      marginLeft: "20px",
                    }}
                  >
                    Verifying Transaction Data
                  </h2>
                </div>
              </Col>
              <Col lg="3" sm="1"></Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div style={{ marginTop: "90px", textAlign: "center" }}>
          <Container>
            <Row>
              <Col lg="3" sm="1"></Col>
              <Col lg="6" sm="10">
                <BsFillPatchCheckFill
                  style={{ fontSize: "5rem", color: "green" }}
                />
                <br />
                <br />
                <h1> Verified Certificate</h1>
                <br />
                <div
                  style={{
                    width: "100%",
                    float: "left",
                    display: "inline-block",
                    paddingLeft: "20px",
                  }}
                >
                  <BsCheckCircleFill
                    style={{
                      float: "left",
                      fontSize: "2rem",
                      color: "green",
                    }}
                  />
                  <h3
                    style={{
                      float: "left",
                      fontWeight: "500",
                      display: "inline-block",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Document Hash
                  </h3>
                  <Form.Control type="text" value={data.hash} disabled />
                </div>
                <div
                  style={{
                    float: "left",
                    display: "inline-block",
                    paddingLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <BsCheckCircleFill
                    style={{
                      fontSize: "2rem",
                      color: "green",
                    }}
                  />
                  <h3
                    style={{
                      fontWeight: "500",
                      display: "inline-block",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Issuer :{" "}
                    <strong>
                      <span style={{ color: "blue" }}>ID</span>entri
                      <span style={{ color: "blue" }}>X</span> Protocol
                    </strong>
                  </h3>
                </div>
                <div
                  style={{
                    float: "left",
                    display: "inline-block",
                    paddingLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <BsCheckCircleFill
                    style={{
                      float: "left",
                      fontSize: "2rem",
                      color: "green",
                    }}
                  />
                  <h3
                    style={{
                      float: "left",
                      fontWeight: "500",
                      display: "inline-block",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Issued on :
                  </h3>
                  <h3
                    style={{
                      fontWeight: "500",
                      display: "inline-block",
                      
                    }}
                  >
                    <h4>
                      <strong> {data.time_stamp}</strong>
                    </h4>
                  </h3>
                </div>

                <div
                  style={{
                    float: "left",
                    display: "inline-block",
                    paddingLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <BsCheckCircleFill
                    style={{
                      float: "left",
                      fontSize: "2rem",
                      color: "green",
                    }}
                  />
                  <h3
                    style={{
                      float: "left",
                      fontWeight: "500",
                      display: "inline-block",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Transaction Records :
                  </h3>
                  <h2
                    style={{
                      color: "green",
                      fontWeight: "600",
                      display: "inline-block",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <strong>MATCHED</strong>
                  </h2>
                </div>
              </Col>
              <Col lg="3" sm="1"></Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}

export default Validation
import { Container, Row,Col, Table } from "react-bootstrap"
import NavBar from "./navbar"
import { useParams } from "react-router-dom";
import Loader from "react-spinners/BeatLoader";
import { useState,useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import axios from "axios";

const Validation = () => {
    let params =useParams();
    const [loading, setLoading] = useState(true);
     useEffect(() => {
       axios
         .get(
           `https://bigchaindb-post-txn.herokuapp.com/viewcertificate/${params.certId}/${params.hash}`
         )
         .then(function (response) {
           console.log(response.data);
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
        <div
          style={{ padding: "0 18%", marginTop: "120px", textAlign: "center" }}
        >
          <Loader />
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
                <h1>Verified Certificate</h1>
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
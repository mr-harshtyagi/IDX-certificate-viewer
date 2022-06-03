import { Col, Container, Row } from 'react-bootstrap';
import Certificate from './Certificate';
import NavBar from './navbar';

export default function Viewcertificate(){
    return (
      <>
        <NavBar />

        <Container>
          <Row>
            <Col lg="12" sm="12">
              <Certificate />
            </Col>
          </Row>
        </Container>
      </>
    );
}


import { Container,Row, Col } from 'react-bootstrap';
import Certificate from './Certificate';

export default function App(){
    return (
      <>
        <Container style={{ margin: "0", padding: "0" }}>
          <Row>
            <Col lg="1">
            
            </Col>
            <Col lg="10">
              <Certificate />
            </Col>
            <Col lg="1">
              
            </Col>
          </Row>
        </Container>
      </>
    );
}


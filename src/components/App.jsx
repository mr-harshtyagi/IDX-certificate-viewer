import { Container, Row ,Col} from "react-bootstrap";
import NavBar from "./navbar";
import Sample from "./Sample";

export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col lg="12" sm="12">
            <Sample />
          </Col>
        </Row>
      </Container>
    </>
  );
}

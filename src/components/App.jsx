import { Container, Row ,Col} from "react-bootstrap";
import NavBar from "./navbar";
import Sample from "./Sample";

export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Sample />
          </Col>
        </Row>
      </Container>
    </>
  );
}

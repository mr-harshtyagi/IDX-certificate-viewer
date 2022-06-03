import { Navbar } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";
export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="dark" fixed="top">
        <div style={{ padding: "0 30px" }}>
          <BsFillCircleFill style={{ fontSize: "3rem" }} />
        </div>
        <h2 style={{ display: "inline" }}>
          <span style={{ color: "blue" }}>ID</span>entri
          <span style={{ color: "blue" }}>X</span>
        </h2>
      </Navbar>
    </div>
  );
}

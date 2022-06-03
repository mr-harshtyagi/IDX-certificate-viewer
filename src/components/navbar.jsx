import { Navbar,Container } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";
export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="dark" fixed="top">
        <div style={{ padding:"0 30px"}}>
            <BsFillCircleFill
              style={{ fontSize: "3rem" }}
            />
            <h2 style={{display:"inline", paddingLeft:"20px"}}>IDentrix Protocol</h2>
        </div>
      </Navbar>
    </div>
  );
}

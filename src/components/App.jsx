import NavBar from "./navbar";

export default function App() {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        <h1>This is IDX's Certificate viewer Web Application.</h1>
        <h1>It can be used to view certificates by scanning QR codes</h1>
        <h1>You can also view blockchain transaction by clicking on hash</h1>
      </div>
    </>
  );
}

import Certificate from './Certificate';
import DownloadPDF from './downloadPDF';
import NavBar from './navbar';

export default function App(){
    return (
      <>
      <NavBar/>
        <div style={{ padding: "0 18%",marginTop: "90px" }}>
          <Certificate />
        </div>
        <DownloadPDF/>
      </>
    );
}


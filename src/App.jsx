import { useState } from "react";
import "./App.css";
import {FiAlertCircle, FiLinkedin, FiTwitter} from "react-icons/fi"
import { ImNewTab } from "react-icons/im";

function App() {
  return (
    <>
      <div className="main">
        <h1>Satvik Sagar Sharma</h1>
        <p>
          Software Engineer <a rel="nofollow"  target="_blank" href="https://www.airbus.com/en"> @Airbus .<ImNewTab></ImNewTab> </a>
        </p>
        <p>Currently learning "xyz"</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veritatis in earum autem, ut molestiae incidunt, ipsam perferendis unde, eius nemo nesciunt distinctio reiciendis velit perspiciatis quia fugit harum. Culpa sit tempora ipsam doloribus ducimus molestiae voluptatibus nobis placeat hic commodi numquam modi, aperiam dolorem maiores vel, ut dolor aspernatur?
        </p>
      </div>
      <div className="secondary">
        <a 
          rel ="nofollow"
          href="https://www.linkedin.com/in/satvik-sagar-sharma-861b63194/"
          target="_blank"
          title="LinkedIn">
        <FiLinkedin></FiLinkedin>
        </a>
        <a
          rel="nofollow"
          href="https://www.twitter.com"
          target="_blank"
          title="Twitter"
        >
          <FiTwitter></FiTwitter>
        </a>
      </div>
    </>
  );
}

export default App;

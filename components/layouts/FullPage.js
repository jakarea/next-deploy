import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

const FullPage = (props) => (
  <div>
    <Header />
    <Navbar />
    {/* <div id="loading">
      <div className="load-circle">
        <span className="one"></span>
      </div>
    </div> */}
    {props.children}
    <Footer />
  </div>
);

export default FullPage;

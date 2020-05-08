import Header from "./../Header";
import Navbar from "./../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Layout = (props) => (
  <div>
    <Header />
    <Navbar />
    {/* <div id="loading">
      <div className="load-circle">
        <span className="one"></span>
      </div>
    </div> */}
    <section id="resume" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xs-12">{props.children}</div>
          <div className="col-lg-4 col-xs-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Layout;

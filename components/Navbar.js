
import Link from './../utils/ActiveLink'

const Navbar = () =>(
    <header className="header fixed-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-8">
            <h1 className="logo">
              <a href="#">Jakarea Parvez</a>
            </h1>
          </div>
          <div className="col-lg-8 col-4">
            <nav className="navbar navbar-expand-lg">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <i className="fa fa-bars"></i>
                </button>
              </div>
              <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link  activeClassName="active" href="/"><a>Home</a></Link>
                  </li>
                  <li>
                    <Link activeClassName="active" href="/about"><a>About</a></Link>
                  </li>
                  {/* <li>
                    <Link activeClassName="active" href="/services"><a>Services</a></Link>
                  </li> */}
                  <li>
                    <Link activeClassName="active" href="/projects"><a>Projects</a></Link>
                  </li>
                  <li>
                    <Link activeClassName="active" href="/blog"><a>Blog</a></Link>
                  </li>
                 
                  <li>
                    <Link activeClassName="active" href="/contact"><a>Contact</a></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
)

export default Navbar
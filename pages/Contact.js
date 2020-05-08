import Layout from "./../components/layouts/FullPage";
import HireMe from "../components/HIreme";

const Contact = () => (
  <Layout>
    <section id="contact" class="section contact-us">
      <div class="container">
        <div class="section-title">
          <h2>
            Contact<span> Me</span>
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-6 col-xs-12 col-md-6 col-md-offset-1">
            <div class="contact-form">
              <form id="contact_form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="sr-only">Name</label>
                      <input
                        class="form-control"
                        name="name"
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="sr-only">Email</label>
                      <input
                        class="form-control"
                        name="name"
                        placeholder="Email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="sr-only">Phone</label>
                      <input
                        class="form-control"
                        name="name"
                        placeholder="Phone"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="sr-only">Website</label>
                      <input
                        class="form-control"
                        name="name"
                        placeholder="Website"
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="sr-only">Your message</label>
                      <textarea
                        class="form-control"
                        name="message"
                        rows="7"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group action pull-right">
                      <button class="m-btn">SEND MESSAGE</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-4 col-lg-6 col-xs-12">
            <div class="contact-info">
              <i class="fa fa-map-marker"></i>
              <h4>Adress:</h4>
              <p>
                478, DIT Road <br /> Malibag, Dhaka, 1217
              </p>
            </div>
            <div class="contact-info">
              <i class="fa fa-envelope"></i>
              <h4>Email:</h4>
              <p>
                <a href="mailto:jakareaparvez@gmail.com">
                  jakareaparvez@gmail.com
                </a>
                <br />
                <a href="mailto:getme@jakarea.me">getme@jakarea.me</a>
              </p>
            </div>
            <div class="contact-info">
              <i class="fa fa-phone"></i>
              <h4>Phone:</h4>
              <p>
                Mob: +88 01728247398
                <br />
                Fax: +88 018845533350
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HireMe />
  </Layout>
);

export default  Contact
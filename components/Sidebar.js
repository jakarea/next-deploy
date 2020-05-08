const Sidebar = () => (
  <div>
    <div className="resume-box blog-post sidebar">
      <form action="" method="get">
        <div className="col-lg-12 side-form">
          <div className="form-group">
            <label className="sr-only">Search...</label>
            <input
              className="form-control search_box"
              name="query"
              placeholder="Search..."
              type="text"
            />
            <button className="m-btn">Search</button>
          </div>
        </div>
      </form>
    </div>
    <div className="resume-box blog-post sidebar">
      <div className="section-title">
        <h2>
          About<span> Me</span>
        </h2>
      </div>
      <div className="about-me">
        <p>
          Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada
          interdum. Ae Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean tincidunt sit amet erat malesuada interdum. Ae adipiscing elit.
          Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui
          quis leo fermentum scelerisque.
        </p>
      </div>
    </div>
    <div className="resume-box blog-post sidebar">
      <div className="section-title">
        <h2>
          Recent<span> Posts</span>
        </h2>
      </div>
      <div className="recent-post">
        <ul>
          <li>
            <a href="">Hello world!</a>
          </li>
          <li>
            <a href="">CRAS CONSEQUAT RISUS AT ELIT DIGNISSIM</a>
          </li>
          <li>
            <a href="">PRAESENT PLACERAT RISUS QUIS EROS</a>
          </li>
          <li>
            <a href="">
              Mauris nec urna quis lorem porta dictum. Nam velit neque
            </a>
          </li>
          <li>
            <a href="">Inline gallery post with feature image</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="resume-box blog-post sidebarß">
      <div className="section-title">
        <h2>
          Categories<span> </span>
        </h2>
      </div>
      <div className="recent-post">
        <ul>
          <li className="cat-item cat-item-15">
            <a href="">Feature</a>
          </li>
          <li className="cat-item cat-item-3">
            <a href="">Image</a>
          </li>
          <li className="cat-item cat-item-28">
            <a href="">Link</a>
          </li>
          <li className="cat-item cat-item-17">
            <a href="">Nature</a>
          </li>
          <li className="cat-item cat-item-27">
            <a href="">Post Formats</a>
          </li>
          <li className="cat-item cat-item-12">
            <a href="">Slider</a>
          </li>
          <li className="cat-item cat-item-30">
            <a href="">Sticky</a>
          </li>
          <li className="cat-item cat-item-1">
            <a href="">Uncategorized</a>
          </li>
          <li className="cat-item cat-item-6">
            <a href="">Video</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar;

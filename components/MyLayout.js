import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div className="container" style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;